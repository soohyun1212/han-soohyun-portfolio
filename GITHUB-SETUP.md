# GitHub 업로드 및 실행 안내

현재 작업 프로젝트 전체 소스와 에셋입니다.
소스 커밋: 7e8c5afd7964834d186f86730a7c26bc8ff04405

## 사용

1. ZIP을 풀고 `han-soohyun-portfolio` 폴더의 내용을 GitHub 저장소 루트로 올립니다.
2. Node.js 24 LTS(또는 package.json의 지원 버전)를 설치합니다.
3. `npm ci` 후 `npm run dev`를 실행합니다.
4. 개발 주소는 http://127.0.0.1:3000/ 입니다.
5. `npm run build`는 정적 웹사이트를 `out/`에 생성합니다.
   현재 `output: 'export'` 설정이므로 배포 대상은 `out/`입니다.

Windows PowerShell에서 npm.ps1 실행이 차단된다면 `npm.cmd ci`, `npm.cmd run dev`를 사용합니다.
`Start-Portfolio.cmd`의 로컬 전용 Node 경로가 없는 다른 PC에서는 위 명령을 사용하세요.

## PDF 다운로드

MEDI-BRIDGE 자료는 저장소의 파일 크기 제한 때문에 두 바이너리 조각과 다운로드 설정 파일로 저장되어 있습니다.
`public/documents/medi-bridge-plan-and-wireframes.part-1`, `.part-2`, `.download.json`을 모두 유지하세요.
공통 다운로드 버튼이 이 파일들을 읽어 원본 PDF 한 파일을 내려받습니다. 내용과 화질은 원본과 같습니다.
이력서·자기소개서는 아직 파일이 연결되지 않은 상태이며 `src/data/documents.ts`에서 설정합니다.

## 제외 항목

- 의존성 및 생성물: node_modules, .next, out, .tools, tsbuildinfo, 로그
- Git 기록, 인증 정보 및 기존 Sites 연결 설정(.openai)
- 저장소에서 제외된 원본 대용량 PDF(동일 내용을 위의 분할 파일로 포함)

기존 프로젝트와 공개 사이트는 수정하거나 재배포하지 않았습니다.
기존 README와 docs는 작업 이력이므로 일부 설명보다 현재 소스 설정이 최신입니다.
