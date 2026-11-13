import type { ReactNode } from 'react';

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  koreanTitle: string;
  description?: string;
  variant?: 'default' | 'contact';
};

export function SectionHeader({ index, label, title, koreanTitle, description, variant = 'default' }: SectionHeaderProps) {
  return <header className={`section-header${variant === 'contact' ? ' section-header--contact' : ''}`}>
    <div className="section-kicker"><span>{index}</span><span aria-hidden="true">/</span><span>{label}</span></div>
    <h2><span className="section-title-en">{title}</span>{' '}<span className="section-anatomy-name">{koreanTitle}</span></h2>
    {description && <p>{description}</p>}
  </header>;
}
