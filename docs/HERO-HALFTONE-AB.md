# Hero 복구 및 하프톤 A/B 검토

헤더는 HAN SOO HYUN / PORTFOLIO와 기존 메뉴를 유지한다. Hero의 SERVICE PLANNING · UI/UX, 대형 Oswald LOBSTER, 얇은 가로선과 SCROLL TO EXPLORE ↓를 복구했다. 작은 회색 LOBSTER는 제거했다. 확정 슬로건·소개문·버튼은 그대로다. 삭제 요청한 다른 문구와 전용 장식은 복구하지 않는다.

## 이미지 두 안

동일한 `assets/hero/lobster-dorsal-clean.png`를 `scripts/screen-dorsal.cjs`로 스크리닝했다. 두 파일은 1920×1020 RGBA이며 알파 마스크와 구도는 완전히 동일하다. 명암 정규화, 점 면적 계산, 45도 스크린 각도와 여백도 동일하며 피치만 변경했다. 원본 사진 위에 패턴을 덧씌우지 않는다.

| 버전 | 원본 망점 피치 | 점 반지름 범위 | 점 개수 | 1440px Hero에서 보이는 피치 |
| --- | --- | --- | --- | --- |
| A Medium | 14px | 1.935~7.065px | 3,362 | 약 5.15px |
| B Strong | 22px | 3.040~11.102px | 1,368 | 약 8.10px |

파일: `public/images/lobster-halftone-a-medium.png`, `public/images/lobster-halftone-b-strong.png`. 출처와 라이선스는 기존 도판과 동일하며 ASSET-CREDITS.md와 Footer Image Credits에 기록되어 있다.

## 선택 전 상태

메인 페이지는 기존 `lobster-dorsal-screened.png`를 유지한다. 어느 후보도 임의로 확정하지 않았다. 별도 `public/hero-comparison.html`에서 실제 메인 페이지를 1440px 또는 390px 프레임으로 표시하고, 검토용 스타일에서 후보 이미지만 교체한다. 이 비교 인터페이스는 메인 IA나 메뉴에 추가하지 않는다. 원래 페이지의 React DOM을 수정하지 않아 하이드레이션에 간섭하지 않는다.

## 검수

원본 페이지의 Hero 이후 본문은 줄바꿈 형식을 정규화해 이전 소스와 비교했고 동일하다. 스크롤 안내의 #about 이동을 확인했다. 후보 두 안을 실제 크기에서 캡처했으며, 데스크톱의 표시 이미지 폭은 약 707px, 모바일은 350px다. 다른 섹션의 콘텐츠·프로젝트 데이터·다운로드 상태는 유지한다.
