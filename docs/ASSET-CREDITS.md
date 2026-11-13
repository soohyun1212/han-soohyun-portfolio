# 이미지 및 글꼴 출처

## Hero 사진

- 현재: The American lobster, Plate 4 (1895), Francis Hobart Herrick / Biodiversity Heritage Library. 위에서 촬영한 전신 실사 도판.
- 원본: https://commons.wikimedia.org/wiki/File:The_American_lobster_(Plate_4)_(6678741085).jpg
- 라이선스: CC BY 2.0, https://creativecommons.org/licenses/by/2.0/ . 원본 페이지는 기계적 스캔 및 1895년 원저작물의 Public Domain 상태도 안내한다.
- 수정: image_gen 편집으로 종이 배경 제거·회전·흑백 변환 후 JavaScript/Sharp에서 원본 휘도를 계산해 AM 망점으로 출력. 사진 위의 점 패턴 오버레이가 아니다.
- 파일: `public/images/lobster-dorsal-screened.png`, 1920×1020 RGBA.
- 저자/BHL, 원본, 라이선스, 수정 여부는 Footer Image Credits에 표시한다.
- 처리 공식과 프롬프트: `HERO-PERSONAL-REFINEMENT.md`, 재현 코드: `scripts/screen-dorsal.cjs`.
- 이전 Junior Libby 및 NOAA 파일은 과거 버전용이며 현재 Hero에서 사용하지 않는다.

## 하프톤 A/B 검토 파일

동일 사진과 알파 마스크로 피치 14px의 `lobster-halftone-a-medium.png`와 22px의 `lobster-halftone-b-strong.png`를 만들었다. 어느 후보도 메인 이미지로 확정하지 않았다. 비교 및 처리 조건은 HERO-HALFTONE-AB.md를 참조한다.

## 글꼴

- Pretendard: https://github.com/orioncactus/pretendard — SIL Open Font License, `public/fonts/` 라이선스 참조.
- Oswald: https://github.com/google/fonts/tree/main/ofl/oswald — SIL Open Font License, `public/fonts/Oswald-LICENSE.txt`.
- IBM Plex Mono: https://github.com/google/fonts/tree/main/ofl/ibmplexmono — SIL Open Font License, `public/fonts/IBMPlexMono-LICENSE.txt`.

프로젝트 및 프로필 이미지는 아직 제공되지 않았으므로 사용한 사진이나 생성 이미지가 없다.
