import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const publicRoot = path.resolve('public');
const documents = path.join(publicRoot, 'documents');
const manifests = (await readdir(documents)).filter(name => name.endsWith('.download.json'));

for (const name of manifests) {
  const manifest = JSON.parse(await readFile(path.join(documents, name), 'utf8'));
  const parts = await Promise.all(manifest.parts.map(async part => {
    if (typeof part !== 'string' || !part.startsWith('/documents/')) throw new Error('Invalid PDF part path');
    const file = path.resolve(publicRoot, `.${part}`);
    if (!file.startsWith(`${documents}${path.sep}`)) throw new Error('PDF part is outside documents');
    return readFile(file);
  }));
  const pdf = Buffer.concat(parts);
  if (pdf.length !== manifest.size || createHash('sha256').update(pdf).digest('hex') !== manifest.sha256) {
    throw new Error(`PDF integrity check failed: ${name}`);
  }
  const filename = name.replace(/\.download\.json$/, '.pdf');
  await writeFile(path.join(documents, filename), pdf);
  console.log(`Prepared ${filename}: ${pdf.length} bytes; original SHA256 verified`);
}
