import Link from 'next/link';
import { Header } from '@/components/site-chrome';
export default function NotFound() { return <><Header detail/><main id="main" className="page-wrap not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>찾으시는 페이지가 없습니다.</h1><Link className="button button-dark" href="/#all-projects">프로젝트 목록으로 돌아가기 ↗</Link></main></>; }
