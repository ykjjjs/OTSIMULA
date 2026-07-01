# OTSIMULA

## 프로젝트 개요
- **이름**: OTSIMULA
- **목표**: ASTRA 정밀 전략기획서 - 안과 이전 대비 AI 선제대응 전략 문서를 정적 웹페이지로 배포
- **특징**: 단일 HTML 파일(인터랙티브 차트/시각화 포함, Chart.js 기반)로 구성된 전략 리포트

## URLs
- **Production**: https://0206da61-200c-4f0a-a620-eaf7d7084eba.vip.gensparksite.com
- **GitHub**: GitHub 연동 후 업데이트 예정 (저장소명: OTSIMULA)

## 데이터 아키텍처
- **데이터 모델**: 정적 HTML/CSS/JS (사용자 업로드 파일 `index.html`)
- **저장 서비스**: Cloudflare Pages 정적 자산(ASSETS 바인딩) — 별도 DB/스토리지 미사용
- **데이터 흐름**: 요청 → Hono 워커 → `c.env.ASSETS.fetch()` → `public/index.html` 정적 자산 반환

## 사용 안내
브라우저에서 배포된 URL로 접속하면 ASTRA 전략기획서 페이지가 바로 표시됩니다. 페이지 내 인터랙티브 차트/동선 다이어그램을 클릭하여 세부 데이터를 확인할 수 있습니다.

## 배포
- **플랫폼**: Cloudflare Pages (Genspark 관리형 계정)
- **상태**: ✅ Active
- **기술 스택**: Hono + TypeScript + Vite (정적 자산 서빙용 경량 워커)
- **최종 업데이트**: 2026-07-01

## 배포 검증
- `GET /` → 200 OK, ASTRA 전략기획서 페이지 정상 렌더링 확인
