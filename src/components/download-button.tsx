import { withBasePath } from '@/lib/site-path';

export function DownloadButton({ label, href, className = '' }: { label: string; href?: string; className?: string }) {
  const pdfHref = href?.replace(/\.download\.json$/, '.pdf');
  const content = <><span className="pdf-view-caption">{label}<span className="pdf-view-word"> 보기</span></span><span className="download-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.5"/></svg></span></>;
  return pdfHref
    ? <a className={`${className} download-button`} href={withBasePath(pdfHref)} target="_blank" rel="noopener noreferrer" aria-label={`${label} 보기`} title="새 탭에서 PDF 보기">{content}</a>
    : <button className={`${className} download-button`} type="button" disabled aria-label={`${label} 보기 (파일 연결 전)`} title="파일 연결 전">{content}</button>;
}
