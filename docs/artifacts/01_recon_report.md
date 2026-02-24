# Chetam Recon Report: Madang-Schedule Stack

## 1. 정찰 대상
- **Backend**: Spring Boot 3.2.x (Java 17)
- **Frontend**: Next.js 14 (App Router, TypeScript)
- **Database**: MySQL 8.0
- **Infra**: Docker Compose (Multi-stage build)

## 2. 최적 토폴로지 (Mono-repo)
```
/madang-schedule
├── backend/ (Spring Boot)
├── frontend/ (Next.js)
├── docker-compose.yml
└── docs/ (Development Artifacts)
```

## 3. 핵심 정찰 포인트
- **CORS**: Next.js(3000)와 Spring(8080) 간의 통신 허용 설정 필요.
- **Docker**: DB 초기화 스크립트(`init.sql`)를 포함하여 컨테이너 기동 시 테이블 자동 생성 보장.
- **Network**: Docker 내부 네트워크를 통해 서비스명(`mysql-db`)으로 통신.

---
*Chetam - Web context captured and injected.*
