'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

const filters = ['전체', '신규 서비스 기획', '서비스 개선'] as const;
export function ProjectFilter() {
  const [active, setActive] = useState<string>('전체');
  const filtered = projects.filter(p => active === '전체' || p.category === active);
  return <><div className="project-filter-bar"><div className="project-filters" aria-label="프로젝트 분류">{filters.map(f => <button type="button" key={f} aria-pressed={active === f} className={active === f ? 'active' : ''} onClick={() => setActive(f)}>{f}<span>{f === '전체' ? projects.length : projects.filter(p => p.category === f).length}</span></button>)}</div><span className="filter-count" role="status" aria-live="polite">{String(filtered.length).padStart(2, '0')} PROJECTS</span></div><div className="all-project-grid">{filtered.map(p => <ProjectCard key={p.slug} project={p}/>)}</div></>;
}
