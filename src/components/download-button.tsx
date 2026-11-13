'use client';

import { useState } from 'react';

export function DownloadButton({ label, href, className = '' }: { label: string; href?: string; className?: string }) {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  async function downloadDocument() {
    if (!href || busy) return;
    setBusy(true);
    setFailed(false);
    try {
      const response = await fetch(href);
      if (!response.ok) throw new Error('Download unavailable');
      const manifest: { filename: string; size: number; parts: string[] } = await response.json();
      const parts = await Promise.all(manifest.parts.map(async part => {
        const response = await fetch(part);
        if (!response.ok) throw new Error('Download incomplete');
        return response.blob();
      }));
      const pdf = new Blob(parts, { type: 'application/pdf' });
      if (pdf.size !== manifest.size) throw new Error('Download incomplete');
      const url = URL.createObjectURL(pdf);
      const link = document.createElement('a');
      link.href = url;
      link.download = manifest.filename;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }
  const content = <><span>{label}</span><span className="download-label">다운로드<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" stroke="currentColor" strokeWidth="1.5"/></svg></span></>;
  if (href?.endsWith('.download.json')) return <>
    <button className={`${className} download-button`} type="button" onClick={downloadDocument} disabled={busy} aria-busy={busy} aria-label={`${label} 다운로드`}>{content}</button>
    {failed && <span role="alert">다운로드에 실패했습니다. 다시 시도해 주세요.</span>}
  </>;
  return href
    ? <a className={`${className} download-button`} href={href} download aria-label={`${label} 다운로드`}>{content}</a>
    : <button className={`${className} download-button`} type="button" disabled aria-label={`${label} 다운로드 (파일 연결 전)`} title="파일 연결 전">{content}</button>;
}
