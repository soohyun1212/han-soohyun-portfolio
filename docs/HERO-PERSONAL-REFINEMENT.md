# 헤더와 Hero: 개인 포트폴리오 위계

헤더 표기는 PORTFOLIO로 수정했다. 기존 메뉴는 유지한다. Hero의 확정 슬로건, 소개 본문, 프로젝트 보기와 다운로드 버튼은 보존했다. 임의 영문 문구, 과정 문구, 도판·학명, 관련 장식은 제거했다. LOBSTER는 새 제목으로 대체하지 않고 사진 위 작은 보조 표기(데스크톱 20px, 모바일 16px)로 낮췄다. 다른 섹션과 프로젝트 데이터는 수정하지 않았다.

## 새 사진 출처

- 작품: The American lobster, Plate 4 (1895), Adult male lobster, dorsal view. 원본에 “Photographed from life”라고 명시된 실사 사진이다.
- 원저자: Francis Hobart Herrick. 스캔 제공: Biodiversity Heritage Library.
- 원본 페이지: https://commons.wikimedia.org/wiki/File:The_American_lobster_(Plate_4)_(6678741085).jpg
- BHL 원본: https://www.biodiversitylibrary.org/page/37159838
- Flickr 원본: https://www.flickr.com/photos/biodivlibrary/6678741085
- 라이선스: Commons 페이지의 CC BY 2.0을 따른다. 페이지는 1895년 원저작물의 Public Domain 상태도 안내한다. 푸터에는 원본·저자/BHL·CC BY 2.0 링크와 수정 여부를 표시한다.
- 최종 파일: `public/images/lobster-dorsal-screened.png`, 1920×1020 RGBA.

## 실제 명암 기반 AM 스크리닝

내장 image_gen 편집 도구로 원본의 종이 배경과 바깥 문구를 제거하고, 원래의 위에서 본 구도를 유지하며 사진 전체를 90도 회전한 누끼를 확보했다. 그 다음 `scripts/screen-dorsal.cjs`에서 실제 픽셀 휘도를 읽어 망점을 계산한다. 매끈한 원본 사진이나 고정 점 패턴을 최종 출력 위에 덧씌우지 않는다.

휘도는 RGB의 0.2126/0.7152/0.0722 가중합이다. 3~98 백분위로 톤 범위를 잡고, 45도 스크린의 각 셀에서 5개 표본의 알파 가중 휘도를 계산한다. 피치는 7.5px다. 정규화 휘도 L에 대해 점 면적 비율은 `0.06 + 0.74 × (1 − L)^0.7`, 점 반지름은 `pitch × sqrt(coverage / π)`다. 반지름 범위는 약 1.036~3.785px이며, 11,762개의 점으로 출력했다. 원본 누끼의 알파로 결과를 잘라 다리·집게 사이 구멍을 보존하고 60px 투명 여백을 추가했다.

## 배경 제거용 편집 프롬프트

BACKGROUND REMOVAL ONLY of this actual 1895 photograph, marked Photographed from life. Preserve this exact historic photographed lobster specimen, both raised widely spread claws, eyes, fine antennae, legs, segmented abdomen and tail fan. Do not invent a new animal, restage the pose, change the top-down viewpoint, redraw, restore missing anatomy, modernize or illustrate it. Remove ALL cream paper background, page frame, book captions and text outside the animal to genuine alpha transparency, including holes between limbs. Convert sepia into neutral grayscale while preserving exact photographic tonal gradients and shell detail. Rotate the entire photographed specimen 90 degrees counterclockwise as one rigid object so the claws point LEFT and the abdomen and tail extend RIGHT in a horizontal landscape canvas. Keep the complete silhouette with 5% transparent margin. No halftone yet; exact luminance-based mathematical screening will be applied separately afterwards. No new cast shadow, no pedestal, no white halo, no background plate, no border, no added grain or dots, no AI reconstruction, no vector, no 3D, no new text. Keep authentic photographic detail from the source; this is an extraction of the supplied real photograph. Output a transparent-background photographic cutout.

