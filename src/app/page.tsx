import { Header, Footer } from '@/components/site-chrome';
import { SectionHeader } from '@/components/section-header';
import { Arrow } from '@/components/icons';
import { HeroVisual } from '@/components/hero-visual';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { ProjectCard } from '@/components/project-card';
import { ProjectFilter } from '@/components/project-filter';
import { ContactActions } from '@/components/contact';
import { projects } from '@/data/projects';
import { PrintBand } from '@/components/print-band';
import { AiProduction } from '@/components/ai-production';
import { PersonalDownloads } from '@/components/personal-downloads';
import './editorial-home.css';
import './international-editorial.css';
import './section-branding.css';

const competencies = [
  ['사용자 조사', '데스크 리서치 · 지역·시장 현황 조사', '사용자 인터뷰 · 설문조사', '에스노그래피 · 타운왓칭'],
  ['분석 및 문제 정의', '벤치마킹 · SWOT 분석', '문제 정의 · 사용자 요구 분석'],
  ['사용자 모델링', '페르소나 · 유저 시나리오', '사용자 여정 지도'],
  ['서비스 구조 설계', '정보구조(IA) · 사용자 흐름'],
  ['화면 기획 및 설계', '와이어프레임 · 화면설계서'],
  ['사용성 평가 및 검증', '사용성 테스트 · 아이트래킹', '히트맵 · 게이즈 플롯 · 클러스터 분석', '평가 결과 기반 개선안 도출'],
];
const planning = [
  ['처음 세운 답보다, 확인한 근거를 믿습니다', '처음 정한 방향을 그대로 밀기보다 사용자 조사와 검증 과정에서 확인한 내용을 기준으로 문제와 해결 방향을 다시 조정합니다.'],
  ['복잡한 정보를, 다음 단계가 보이는 구조로 정리합니다', '흩어진 정보와 요구사항을 우선순위와 판단 기준에 따라 정리하고, 이후 기획과 설계 과정으로 자연스럽게 이어지는 구조를 만듭니다.'],
  ['역할을 나누고, 같은 방향으로 움직입니다', '팀 프로젝트에서는 역할과 진행 상황을 공유하고, 논의가 필요한 지점을 정리해 팀이 같은 목표를 기준으로 움직일 수 있도록 조율합니다.'],
];

export default function Home() {
  return <div id="top" className="portfolio-home"><Header/><main id="main">
    <section className="hero page-wrap" aria-labelledby="hero-title">
      <div className="hero-topline">SERVICE PLANNING · UI/UX</div>
      <div className="hero-masthead" aria-hidden="true">THINK IN LAYERS</div>
      <div className="hero-grid"><div className="hero-copy"><h1 id="hero-title" className="hero-slogan"><span>서비스의 한 겹부터 <span className="slogan-accent">단단하게 설계</span>하는</span><span>기획자 한수현입니다</span></h1><p className="hero-description"><span>가재가 탈피하듯, 처음 정한 방향에 머무르지 않고 확인한 근거에 따라 기획의 방향을 조정합니다.</span><span>복잡한 정보 속에서 우선순위와 판단 기준을 정리해 다음 단계가 보이는 구조를 설계합니다.</span></p><div className="hero-actions"><a className="button button-dark" href="#projects">대표 프로젝트 보기<Arrow diagonal/></a><PersonalDownloads className="button button-text"/></div></div>
      <HeroVisual/></div>
      <div className="hero-scroll"><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>

    <section id="about" className="section page-wrap profile-section"><SectionHeader index="01" label="PROFILE" title="CEPHALON" koreanTitle="두부"/>
      <div className="profile-grid"><div className="portrait-pair"><ImagePlaceholder label="첫 번째 프로필 이미지 영역" portrait/><ImagePlaceholder label="두 번째 프로필 이미지 영역" portrait/></div><div className="profile-information"><div className="profile-name"><h3>한수현</h3><span>HAN SOO HYUN</span></div><dl className="profile-basics"><div><dt>생년월일</dt><dd>2003.12.12</dd></div><div><dt>휴대전화</dt><dd>010-8266-5074</dd></div><div><dt>E-mail</dt><dd>sky4194119@naver.com</dd></div><div><dt>주소</dt><dd>경기도 시흥시</dd></div></dl></div></div>
      <div className="profile-history"><div><h3>학력<span>EDUCATION</span></h3><ul><li><time>2027.02</time><div>계원예술대학교 디지털미디어디자인과 <span>기획 세부전공 · 졸업 예정</span></div></li><li><time>2026.03</time><div>계원예술대학교 디지털미디어디자인과 <span>기획 세부전공</span></div></li><li><time>2023.03</time><div>계원예술대학교 디지털미디어디자인과 <span>입학</span></div></li></ul></div><div><h3>수상 및 출품<span>AWARDS & ENTRIES</span></h3><ul><li><time>2026.07</time><div>커뮤니케이션디자인 국제 공모전 <span>기획서 부문 입선</span></div></li><li><time>2026.06</time><div>커뮤니케이션디자인 국제 공모전 <span>디지털미디어디자인 부문 출품</span></div></li></ul></div></div>
    </section>

    <section id="competencies" className="competency-section"><div className="page-wrap section"><SectionHeader index="02" label="CORE COMPETENCIES" title="CLAW" koreanTitle="집게발" description="사용자 문제를 붙잡고, 근거를 확인하며 방향을 구체화하는 핵심 역량입니다."/><div className="competency-grid">{competencies.map(([name,...methods],i) => <article key={name} className="competency"><span className="competency-number">0{i+1}</span><h3>{name}</h3><ul>{methods.map(m => <li key={m}>{m}</li>)}</ul></article>)}</div></div></section>

    <PrintBand/>
    <section id="projects" className="section page-wrap projects-section"><SectionHeader index="03" label="PROJECTS" title="CARAPACE" koreanTitle="등딱지" description="검증과 수정을 반복하며, 한 단계씩 완성도를 높여 온 프로젝트입니다."/><div className="subsection-heading"><h3>대표 프로젝트</h3><span>03 PROJECTS</span></div><div className="featured-project-grid">{[projects[0],projects[1],projects[4]].map(p => <ProjectCard key={p.slug} project={p} featured/>)}</div>
      <div className="all-projects"><div id="all-projects" className="subsection-heading"><div><h3>전체 프로젝트</h3></div><span>ALL WORKS / 08</span></div><ProjectFilter/></div>
    </section>

    <section id="tools-and-skills" className="tools-section"><div className="page-wrap section"><SectionHeader index="04" label="TOOLS & SKILLS" title="TAIL FAN" koreanTitle="꼬리부채" description="생각을 실제 기획 결과물로 구체화하는 데 활용하는 도구입니다."/><div className="tools-table">{[['기획·설계 및 협업','Figma · FigJam · Notion'],['문서·발표','PowerPoint · Excel · Word · Google Docs · 한글'],['생성형 AI','ChatGPT · Gemini · Claude · Perplexity']].map(([label,tools],i) => <div className="tool-row" key={label}><span className="tool-number">0{i+1}</span><h3>{label}</h3><p>{tools}</p></div>)}</div></div></section>

    <AiProduction/>

    <section id="planning-approach" className="section page-wrap planning-section"><SectionHeader index="06" label="PLANNING APPROACH" title="COMPOUND EYES" koreanTitle="겹눈" description="하나의 답을 고집하기보다, 확인한 근거를 바탕으로 방향을 조정합니다."/><div className="planning-grid">{planning.map(([title,body],i) => <article key={title}><span className="planning-number">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <PrintBand inverse/>
    <section id="contact" className="contact-section"><div className="page-wrap section"><SectionHeader index="07" label="CONTACT" title="ANTENNAE" koreanTitle="더듬이" description="프로젝트 또는 협업에 관한 연락은 아래 연락처로 부탁드립니다." variant="contact"/><p className="contact-invitation">새로운 기회와 만남을,<br/>기다리고 있습니다.</p><ContactActions/><Footer/></div></section>
  </main></div>;
}
