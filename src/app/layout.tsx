import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { BackToTop } from '@/components/back-to-top';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
});

const oswald = localFont({
  src: '../../public/fonts/Oswald-Variable.ttf',
  variable: '--font-display',
  weight: '200 700',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://soohyun1212.github.io/han-soohyun-portfolio/'),
  title: '한수현 - 포트폴리오',
  openGraph: { title: '한수현 - 포트폴리오', siteName: '한수현 - 포트폴리오' },
  twitter: { card: 'summary', title: '한수현 - 포트폴리오' },
  description: '서비스의 한 겹부터 단단하게 설계하는 기획자 한수현. 사용자 조사와 검증, 구조 설계와 재설계의 과정을 담은 포트폴리오.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" className={`${pretendard.variable} ${oswald.variable}`}><body><a className="skip-link" href="#main">본문으로 이동</a>{children}<BackToTop/></body></html>;
}
