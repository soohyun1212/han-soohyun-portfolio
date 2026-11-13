import './hero-anatomy.css';
import { withBasePath } from '@/lib/site-path';

// Coordinates are measured against the unchanged 1920 × 1020 dorsal plate.
const annotations = [
  { en: 'CEPHALON', ko: '프로필', href: '#about', x: 775, y: 582, path: 'M775 582 C800 625 850 660 850 715 C850 895 935 925 1100 925 C1230 925 1340 960 1400 960 C1520 890 1340 890 1460 960 C1550 985 1750 900 1750 980 C1750 995 1750 1005 1750 1020', position: 'bottom-right' },
  { en: 'CLAW', ko: '핵심 역량', href: '#competencies', x: 420, y: 245, path: 'M420 245 C420 185 365 160 335 130 C265 10 265 190 335 70 C325 40 240 55 240 0', position: 'top-left' },
  { en: 'CARAPACE', ko: '프로젝트', href: '#projects', x: 1115, y: 548, path: 'M1115 548 C1115 425 1110 270 1090 200 C1160 80 1160 260 1090 140 C1070 100 1050 50 1050 0', position: 'top-center' },
  { en: 'TAIL FAN', ko: '도구·스킬', href: '#tools-and-skills', x: 1715, y: 410, path: 'M1715 410 C1675 285 1710 230 1715 180 C1645 60 1645 240 1715 120 C1740 80 1750 40 1750 0', position: 'top-right' },
  { en: 'WALKING LEGS', ko: 'AI 웹사이트 제작', href: '#built-with-ai', x: 960, y: 770, path: 'M960 770 C920 750 870 795 920 815 C1040 774 860 774 980 815 C1020 825 1080 820 1105 820', compactPath: 'M960 770 C920 750 870 795 920 815 C1040 774 860 774 980 815 C990 818 998 818 1005 818', position: 'walking' },
  { en: 'COMPOUND EYES', ko: '기획 방식', href: '#planning-approach', x: 707, y: 625, path: 'M707 625 C674 657 650 680 650 735 C650 825 620 900 650 930 C770 860 590 860 710 930 C750 955 800 980 800 1020', position: 'bottom-center' },
  { en: 'ANTENNAE', ko: '연락처', href: '#contact', x: 145, y: 874, path: 'M145 874 C100 874 78 905 95 947 C100 960 104 965 110 965 C230 915 50 915 170 965 C200 980 240 985 240 1020', position: 'bottom-left' },
] as const;

function AnnotationLabel({ annotation }: { annotation: (typeof annotations)[number] }) {
  const { en, ko, href, position } = annotation;
  return <a className={`hero-anatomy-label hero-anatomy-label--${position}`} href={href}>
    <span lang="en">{en}</span>{' / '}<span lang="ko">{ko}</span>
  </a>;
}

export function HeroVisual() {
  return <figure className="hero-photo hero-anatomy">
    <div className="hero-photo-image">
      <img src={withBasePath('/images/lobster-dorsal-screened.png')} width="1920" height="1020" alt="위에서 촬영한 전신 가재 사진을 명암별 망점 크기로 표현한 흑백 인쇄 그래픽" fetchPriority="high"/>
      <svg className="hero-anatomy-lines" viewBox="0 0 1920 1020" aria-hidden="true">
        {annotations.map(annotation => <a key={annotation.en} href={annotation.href} tabIndex={-1}>
          {('compactPath' in annotation
            ? [{ d: annotation.path, className: 'hero-anatomy-route--regular' }, { d: annotation.compactPath, className: 'hero-anatomy-route--compact' }]
            : [{ d: annotation.path, className: '' }]).map(({ d, className }) => <g key={d} className={className}>
            <path className="hero-anatomy-hit-area" d={d} vectorEffect="non-scaling-stroke"/>
            <path className="hero-anatomy-halo" d={d} vectorEffect="non-scaling-stroke"/>
            <path d={d} vectorEffect="non-scaling-stroke"/>
          </g>)}
          <circle cx={annotation.x} cy={annotation.y} r="4" vectorEffect="non-scaling-stroke"/>
        </a>)}
      </svg>
      {annotations.filter(a => a.position === 'walking').map(annotation => <AnnotationLabel key={annotation.en} annotation={annotation}/>)}
    </div>
    <figcaption className="hero-anatomy-key">
      {annotations.filter(a => a.position !== 'walking').map(annotation => <AnnotationLabel key={annotation.en} annotation={annotation}/>)}
    </figcaption>
  </figure>;
}
