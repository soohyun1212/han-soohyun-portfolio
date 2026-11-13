> 이전 편집 기록입니다. 현재 Hero의 사진·스크리닝·문구 기준은 HERO-PERSONAL-REFINEMENT.md를 참조하세요.

# Hero 가재 사진 교체

## 최신 Hero 편집

현재 Hero는 `public/images/lobster-horizontal-halftone.png`(1672×941 RGBA)를 사용한다. 아래 초기 4:3 버전을 내장 image_gen 편집 모드로 추가 편집해, 왼쪽 집게와 오른쪽 꼬리로 이어지는 수평 구도 및 눈에 보이는 뉴스프린트 망점을 적용했다. 원본 사진과 사용 조건은 동일하다. 지정된 두 태그라인과 하단 스크롤 행을 제거하고 기획 과정은 유지했다. 나머지 섹션과 공통 푸터는 변경하지 않았다.

최신 편집 프롬프트:

Edit this photographic lobster cutout, not a new animal. Keep the real photographed lobster, both full claws and existing bands, body, legs, thin antennae and complete tail. Rotate/recompose the existing top-angled photographed object into a strongly horizontal spread silhouette: claws to the left, segmented body and tail extending right. Preserve natural anatomy and photographic proportions; no invented limbs, no vector tracing, no illustration, no 3D. Transparent-background landscape canvas about 16:9 with generous clear margins on every side; no cropped extremities. Make the lobster a clearly HALFTONE NEWSPRINT PHOTOGRAPHIC GRAPHIC, with visibly separated round black ink dots of variable diameter responding to source tones, open light midtones and fine paper-print grain. The dot screen must be readily visible at a 650px-wide website display: use a medium-fine 5–8px dot pitch at roughly 1536px output, not near-invisible grain. Preserve readable tail segmentation, shell highlights and claw volumes; avoid crushed black masses. Neutral black and gray only, no color. Do not leave a clean smooth ordinary photographic cutout: photographic structure should resolve into distinct ink dots at normal viewing size. The effect is ink screening of a REAL PHOTO, not drawn pointillism. No poster text, captions, borders, square plate, drop shadow, white background or baked checkerboard. True alpha background.

## 초기 전신 누끼 편집 기록

수정 범위는 Hero 비주얼 컴포넌트·관련 CSS·공통 푸터의 이미지 출처에 한정한다. Home 본문, IA, 프로젝트 데이터와 카드, 나머지 섹션은 변경하지 않는다.

Junior Libby의 공개 도메인 실사 사진 Live Lobster를 사용한다. 출처와 이용 조건은 ASSET-CREDITS.md에 기록했다. 원본과 출력은 4:3이며, 출력은 투명 배경 RGBA PNG다. CSS에 object-fit: contain과 외부 여백을 적용하고 이미지 배경·테두리·둥근 모서리·그림자를 사용하지 않는다.

가공 도구는 내장 image_gen의 편집 모드다. 입력은 `live-lobster.jpg`, 출력은 `public/images/lobster-full-cutout.png`다. 출력은 원본과 대조해 두 집게·몸통·꼬리·촬영 방향을 확인한다. 실제 사진을 편집했으며 새 가재를 생성하도록 지시하지 않았다.

## 사용한 편집 프롬프트

Edit the supplied licensed real photograph only. It is Junior Libby's Live Lobster photograph, not a reference for inventing a new animal. Preserve the EXACT lobster anatomy, pose, natural proportions, source aspect ratio 4:3, both complete claws including existing real rubber bands, the full body, segmented tail, legs and thin antennae. Do not create, reconstruct, reshape, rotate, restage or redraw any body parts. Remove the off-white background and cast shadows completely into genuine alpha transparency, including spaces between legs and antennae. Keep every visible body part inside the canvas with transparent margin. Convert the photographed lobster to neutral grayscale with gentle balanced midtones, lifted shadow detail and intact photographic three-dimensional texture; no solid black crushed body regions. Apply extremely fine subtle photographic print halftone, with smaller/larger ink dots according to tonal darkness, restrained enough that photographic detail clearly dominates. Full-body photographic cutout on transparent background for an editorial portfolio. No colored pixels, no vector, no illustration, no stylization, no 3D, no new objects, no text added, no checkerboard baked into pixels, no rectangle or white halo. This is background removal and tonal processing of the same actual photograph, not generation of a lobster.
