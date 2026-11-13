import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Header, Footer } from '@/components/site-chrome';
import { ProjectCover } from '@/components/project-card';
import { MetadataList } from '@/components/metadata-list';
import { DownloadButton } from '@/components/download-button';
import { PersonalDownloads } from '@/components/personal-downloads';
import { Arrow } from '@/components/icons';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return { title: '한수현 - 포트폴리오', description: p?.summary };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex(p => p.slug === slug);
  return <div id="top" className="detail-page"><Header detail/><main id="main">
    <section className="page-wrap detail-intro"><Link className="back-link" href="/#all-projects"><span>←</span> 프로젝트 목록</Link><div className="detail-category"><span>PROJECT {project.number} / {project.category}</span>{project.award && <span className="award">수상작</span>}</div><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><dl className="detail-meta">{[['역할',project.role],['인원',project.team],['기간',project.period],['주요 산출물',project.materials.join(' · ')]].map(([key,value]) => <div key={key}><dt>{key}</dt><dd><MetadataList value={value}/></dd></div>)}</dl><ProjectCover project={project} large/></section>
    <nav className="detail-section-nav page-wrap" aria-label="프로젝트 내용"><a href="#overview">01 Overview</a><a href="#process">02 Process</a><a href="#decisions">03 Decisions</a><a href="#result">04 Result</a><a href="#deliverables">산출물 ↓</a></nav>
    <section id="overview" className="detail-section page-wrap"><div className="detail-section-label"><span className="detail-section-kicker"><span>01</span><span>OVERVIEW</span></span><h2>프로젝트 개요</h2></div><div className="detail-section-body"><p className="overview-body">{project.overview}</p><h3 className="contribution-label">프로젝트 기여</h3><div className="contribution-grid">{project.contributions.map((c,i) => <article key={c.title}><span>0{i+1}</span><h4>{c.title}</h4><p>{c.body}</p></article>)}</div></div></section>
    <div className="detail-process-band"><section id="process" className="detail-section page-wrap"><div className="detail-section-label"><span className="detail-section-kicker"><span>02</span><span>PROCESS</span></span><h2>프로젝트<br/>진행 과정</h2></div><div className="detail-section-body"><p className="section-intro">{project.processIntro}</p><div className="process-grid">{project.process.map((p,i) => <article key={p.title}><div className="process-number"><span>0{i+1}</span>{i<3 && <Arrow/>}</div><h3>{p.title}</h3><p>{p.body}</p></article>)}</div></div></section></div>
    <section id="decisions" className="detail-section page-wrap"><div className="detail-section-label"><span className="detail-section-kicker"><span>03</span><span>DECISIONS</span></span><h2>주요 판단과<br/>변화</h2></div><div className="detail-section-body decisions">{project.decisions.map((d,i) => <article className="decision" key={d.title}><span className="decision-index">DECISION / 0{i+1}</span><h3>{d.title}</h3><div className="decision-grid">{[['처음 판단',d.initial],['확인한 근거',d.evidence],['바꾼 방향',d.change]].map(([title,body],j) => <div key={title} className={j === 2 ? 'decision-change' : ''}><h4><span>0{j+1}</span>{title}</h4><p>{body}</p></div>)}</div></article>)}</div></section>
    <section id="result" className="detail-section page-wrap result-section"><div className="detail-section-label"><span className="detail-section-kicker"><span>04</span><span>RESULT</span></span><h2>결과 및 회고</h2></div><div className="detail-section-body result-grid"><article><span className="result-caption">OUTCOME</span><h3>결과</h3><p>{project.result}</p></article><article><span className="result-caption">REFLECTION</span><h3>회고</h3><p>{project.reflection}</p></article></div></section>
    <section id="deliverables" className="page-wrap deliverables"><div><span className="eyebrow">PROJECT DELIVERABLES</span><h2>프로젝트 자료</h2></div><div className="deliverable-buttons">{project.materials.map(m => <DownloadButton className="deliverable-button" key={m} label={m} href={project.downloads?.[m]}/>)}</div></section>
    <div className="page-wrap detail-personal-downloads"><PersonalDownloads/></div>
    <nav className="project-pagination page-wrap" aria-label="프로젝트 이동">{index>0 ? <Link prefetch={false} href={`/projects/${projects[index-1].slug}`}><span>← 이전 프로젝트</span><strong>{projects[index-1].name}</strong></Link> : <span className="pagination-disabled" aria-disabled="true">← 이전 프로젝트</span>}<Link className="project-list-link" href="/#all-projects">프로젝트 목록으로 돌아가기<span>↗</span></Link>{index<projects.length-1 ? <Link prefetch={false} className="next-project" href={`/projects/${projects[index+1].slug}`}><span>다음 프로젝트 →</span><strong>{projects[index+1].name}</strong></Link> : <span className="pagination-disabled">다음 프로젝트 →</span>}</nav>
  </main><div className="detail-footer page-wrap"><Footer detail/></div></div>;
}
