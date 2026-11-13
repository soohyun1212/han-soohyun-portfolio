import Link from 'next/link';
import { PersonalDownloads } from './personal-downloads';
import { withBasePath } from '@/lib/site-path';

export function Header({ detail = false }: { detail?: boolean }) {
  const prefix = detail ? withBasePath('/') : '';
  return <header className="site-header"><div className="header-inner">
    <Link className="wordmark" href={detail ? '/' : '#top'} aria-label="한수현 포트폴리오 홈">한수현<span className="wordmark-small">PORTFOLIO</span></Link>
    <nav aria-label="주요 메뉴"><a href={`${prefix}#about`}>About</a><a href={`${prefix}#projects`}>Projects</a><a href={`${prefix}#contact`}>Contact</a></nav>
  </div></header>;
}

export function Footer({ detail = false }: { detail?: boolean }) {
  const prefix = detail ? withBasePath('/') : '';
  return <footer className="site-footer"><a className="footer-brand" href={detail ? withBasePath('/') : '#top'}>한수현<span>LOBSTER / 2026</span></a><nav aria-label="하단 메뉴"><a href={`${prefix}#projects`}>Projects</a><a href={`${prefix}#about`}>About</a><a href={`${prefix}#contact`}>Contact</a><a href="#top">↑ Top</a></nav><span className="copyright">© 2026 한수현</span>
    {!detail && <PersonalDownloads/>}
    <details className="image-credits-toggle">
      <summary>Image Credits</summary>
      <div className="image-credits-content">
        <p><a href="https://commons.wikimedia.org/wiki/File:The_American_lobster_(Plate_4)_(6678741085).jpg" target="_blank" rel="noreferrer">The American Lobster, Plate 4 — F. H. Herrick / Biodiversity Heritage Library</a> · <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a> · 편집본</p>
        <p><a href="https://www.fws.gov/media/crayfish-shore" target="_blank" rel="noreferrer">Crayfish on the shore — Ryan Hagerty / U.S. Fish &amp; Wildlife Service</a> · Public Domain · 편집본</p>
      </div>
    </details>
  </footer>;
}
