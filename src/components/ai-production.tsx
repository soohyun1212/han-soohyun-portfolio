import './ai-production.css';
import { withBasePath } from '@/lib/site-path';

const stages = [
  {
    name: 'PLAN',
    lead: 'CHATGPT',
    description: '요구사항과 레퍼런스를 분석해 정보 구조와 화면별 실행 프롬프트를 설계했습니다.',
  },
  {
    name: 'BUILD',
    lead: 'CODEX',
    description: '기존 코드베이스를 바탕으로 페이지와 컴포넌트를 구현하고 기능과 스타일을 수정했습니다.',
  },
  {
    name: 'REVIEW',
    lead: 'CREATIVE DIRECTION',
    description: '브라우저에서 결과를 검수하고 레이아웃·타이포그래피·반응형을 반복 개선했습니다.',
  },
  {
    name: 'PUBLISH',
    lead: 'GITHUB PAGES',
    description: 'GitHub Pages로 사이트를 배포하고 화면별 렌더링과 주요 링크의 정상 작동을 검증했습니다.',
  },
];

export function AiProduction() {
  return (
    <section id="built-with-ai" className="section page-wrap ai-production" aria-labelledby="ai-production-title">
      <header className="section-header">
        <div className="section-kicker"><span>05</span><span aria-hidden="true">/</span><span>BUILT WITH AI</span></div>
        <h2 id="ai-production-title"><span className="section-title-en">WALKING LEGS</span>{' '}<span className="section-anatomy-name">걷는다리</span></h2>
        <p>ChatGPT를 활용해 기획을 구조화하고, Codex로 구현한 뒤 직접 검수·개선하여 GitHub Pages에 배포했습니다.</p>
      </header>
      <div className="ai-production-spread">
        <figure className="ai-production-plate">
          <img
            src={withBasePath('/images/crayfish-shore-usfws-print.png')}
            alt="강가에 있는 가재의 등껍질과 걷는다리를 측면에서 보여주는 흑백 하프톤 사진"
            width={1600}
            height={1064}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <ol className="ai-production-stages" role="list">
          {stages.map(({ name, lead, description }, index) => (
            <li className="ai-production-stage" key={name}>
              <p className="ai-production-step"><span>0{index + 1}</span> / {name}</p>
              <div className="ai-production-stage-copy">
                <h3>{lead}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <dl className="ai-production-stack">
        <div><dt>구현</dt><dd>Next.js · React · TypeScript · Tailwind CSS</dd></div>
        <div><dt>배포</dt><dd>GitHub Pages · GitHub Actions</dd></div>
      </dl>
    </section>
  );
}
