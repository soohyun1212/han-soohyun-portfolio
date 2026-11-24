import Link from 'next/link';
import { Arrow } from './icons';
import { ImagePlaceholder } from './image-placeholder';
import type { Project } from '@/data/projects';

export function ProjectCover({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`project-cover ${large ? 'cover-large' : ''}`}>
    {project.image
      ? <img className="project-cover-image" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${project.image}`} alt={`${project.name} 프로젝트 표지`} width={1600} height={900} loading={large ? 'eager' : 'lazy'} decoding="async" fetchPriority={large ? 'high' : 'low'} />
      : <ImagePlaceholder label={`${project.title} 이미지 영역`}/>}
  </div>;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link prefetch={false} href={`/projects/${project.slug}`} className={`project-card ${featured ? 'featured-card' : ''}`}>
    <ProjectCover project={project}/>
    <h3>{project.title}</h3>
    <div className="card-category"><span>{project.category}</span>{project.award && <span className="award">수상작</span>}<Arrow diagonal/></div>
    <p>{project.cardSummary}</p>
  </Link>;
}
