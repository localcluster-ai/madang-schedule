# Moyoung Detailed Spec: Implementation Specs

## 1. Backend 상세 (Spring Boot)
- **Package**: `com.localcluster.madang.schedule`
- **Entity**: `Schedule.java` (Lombok, JPA 적용)
- **CORS Config**: `WebConfig.java`에서 `http://localhost:3000` 허용.

## 2. Frontend 상세 (Next.js)
- **Page**: `/app/page.tsx` (일정 목록 및 입력 폼)
- **Components**: `ScheduleCard.tsx`, `ScheduleForm.tsx`
- **State Management**: `useState`, `useEffect` 기반의 단순 상태 관리.

## 3. Infra 상세
- **docker-compose.yml**: `backend`, `frontend`, `mysql` 서비스 정의.
- **Environment**: `.env` 파일을 통한 DB 접속 정보 관리.

---
*Moyoung - Detailing the future.*
