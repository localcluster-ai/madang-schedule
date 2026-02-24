# Dopyeonsu Blueprint: Madang-Schedule Architecture

## 1. 데이터 모델링 (MySQL)
- `schedules` 테이블: `id` (PK), `title`, `content`, `start_time`, `end_time`, `created_at`.

## 2. API 명세 (REST)
- `GET /api/schedules`: 전체 일정 조회
- `POST /api/schedules`: 일정 생성
- `DELETE /api/schedules/{id}`: 일정 삭제

## 3. 계층 구조 (Backend)
- `Controller` -> `Service` -> `Repository` -> `Entity` (JPA 표준)

---
*Dopyeonsu - Architectural sovereignty established.*
