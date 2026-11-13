# LOBSTER — 한수현 포트폴리오

Next.js App Router · TypeScript · Tailwind CSS로 구현한 개인 포트폴리오입니다.

## Windows 실행

Node.js 24 LTS 또는 20.9 이상의 지원 버전을 설치한 환경에서 이 폴더를 열고 실행합니다.

```powershell
npm.cmd ci
npm.cmd run dev
```

PowerShell 실행 정책으로 `npm.ps1`이 차단될 때 `npm.cmd`를 사용하면 됩니다. 일반 터미널에서는 `npm run dev`도 동일하게 실행됩니다.

접속 주소: http://127.0.0.1:3000/

이 PC에는 프로젝트 내부 `.tools/`에 공식 Node.js Windows 런타임을 별도로 준비했습니다. `Start-Portfolio.cmd`를 실행하면 해당 런타임으로 개발 서버를 실행합니다. 시스템 PATH나 Windows 설정은 변경하지 않습니다. `.tools/`는 Git과 소스 배포용 ZIP에서 제외합니다. 다른 PC에서는 Node.js를 설치해주세요.

## 검증 및 프로덕션 실행

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

개발 서버와 프로덕션 서버는 같은 3000 포트를 사용하므로 동시에 실행하지 않습니다.

## 파일 구조

```text
src/app/                    # Home, 공통 레이아웃, 404
src/app/projects/[slug]/     # 프로젝트 상세 공통 템플릿
src/components/              # 내비게이션, 카드, 필터, 연락처 등
src/data/projects.json       # 화면설계서에서 확인한 8개 프로젝트 콘텐츠
src/data/projects.ts         # 공통 데이터 타입
reference/                  # 구현 기준 PDF 원본 2개 (공개 경로 밖)
docs/IMPLEMENTATION.md       # 자료 분석과 구현 결정
public/                     # 추후 이미지·산출물 보관 위치
```

## 이미지와 문서 추가

Hero에는 라이선스를 확인한 NOAA 실사 사진을 흑백 하프톤으로 가공해 사용합니다. [디자인 방향](docs/ART-DIRECTION.md)과 [사진·폰트 출처](docs/ASSET-CREDITS.md)를 참고해주세요.

- 프로젝트·프로필 이미지: `ImagePlaceholder` 공통 컴포넌트의 단색 회색 영역입니다. 프로젝트 카드 비율은 4:3이며, 최종 이미지 수령 후 컴포넌트와 `projects.json`의 이미지 필드를 연결할 수 있습니다. 현재 임의 이미지나 커버는 표시하지 않습니다.
- 이력서: 다운로드 버튼으로 표시합니다. 파일을 받기 전에는 비활성 상태입니다. 검토된 최종 파일을 `public/documents/`에 넣고 `src/data/documents.ts`의 `href`에 경로를 추가합니다.
- 산출물: 다운로드 버튼으로 표시하며 파일 경로가 없으면 비활성 상태입니다. `projects.json`의 각 프로젝트에 `"downloads": { "화면설계서": "/documents/example.pdf" }`처럼 자료명과 경로를 연결합니다.
- 제목·기간·역할·상세 문구는 `projects.json` 한곳에서 관리합니다.

## Vercel 배포

1. 이 폴더를 저장소 루트로 GitHub 등에 업로드합니다. `node_modules`, `.next`, `.tools`는 제외합니다.
2. Vercel에서 저장소를 Import하고 Framework Preset을 **Next.js**로 선택합니다.
3. Root Directory는 이 폴더로, Build Command는 `npm run build`로 둡니다. Node.js 버전은 24 LTS를 선택합니다.
4. 별도 환경변수나 데이터베이스는 필요 없습니다.

공개 배포 전 실제 이미지·다운로드 자료와 개인정보 공개 범위를 확인해주세요. 현재 메타데이터는 제작 중 상태에 맞춰 `noindex, nofollow`입니다. 공개 검색 노출을 원할 때 `src/app/layout.tsx`의 robots 설정을 바꾸면 됩니다. Vercel 계정 연결 및 실제 배포는 아직 실행하지 않았습니다.

## 자료 기준

- `reference/스토리보드＿완성.pdf`: v0.3, 45페이지. Home 정보구조와 인터랙션, 프로젝트 8개의 상세 콘텐츠 기준.
- `reference/이걸로수정해야됨진짜최종.pdf`: 14페이지. LOBSTER 브랜딩과 최종 슬로건, 포트폴리오 목적 기준.

화면 순서와 프로젝트 사실은 제공 자료를 따릅니다. 대표 이미지, 프로필 사진, 산출물 파일은 추가하지 않았으며 수치·참여율·성과를 새로 만들지 않았습니다.
