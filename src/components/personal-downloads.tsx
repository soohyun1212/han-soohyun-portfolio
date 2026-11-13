import { personalDocument } from '@/data/documents';
import { DownloadButton } from './download-button';
import './personal-downloads.css';

export function PersonalDownloads({ className = 'personal-download' }: { className?: string }) {
  return <div className="personal-downloads" role="group" aria-label="이력서 및 자기소개서 보기">
    <DownloadButton
      label={personalDocument.label}
      href={personalDocument.href}
      className={className}
    />
  </div>;
}
