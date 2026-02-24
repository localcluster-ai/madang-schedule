# [LOG] Dopyeonsu Architect Decision
- **Decision**: 3-Tier Layered Architecture with Domain-Driven Design (DDD) principles.
- **Rationale**: To ensure scalability and separation of concerns between business logic and infrastructure.
- **Design Pattern**: Repository Pattern for data access, DTO for data transfer.

# Madang-Schedule v2: High-Level Architecture

## 1. System Topology (UML)

```mermaid
graph TD
    subgraph Frontend [Next.js Client]
        UI[User Interface] --> SC[Server Components]
        SC --> API_C[API Client]
    end

    subgraph Backend [Spring Boot Server]
        API_C --> CTRL[ScheduleController]
        CTRL --> SVC[ScheduleService]
        SVC --> REPO[ScheduleRepository]
        REPO --> ENTITY[ScheduleEntity]
    end

    subgraph Storage [Infrastructure]
        ENTITY --> DB[(MySQL 8.0)]
    end
```

## 2. Dynamic Sequence (UML)

```mermaid
sequenceDiagram
    participant User
    participant NextJS as Frontend (Next.js)
    participant Spring as Backend (Spring Boot)
    participant DB as Database (MySQL)

    User->>NextJS: 일정 생성 요청 (Title, Date)
    NextJS->>Spring: POST /api/v1/schedules (JSON)
    Spring->>Spring: 데이터 검증 (Validation)
    Spring->>DB: INSERT INTO schedules...
    DB-->>Spring: ID 반환
    Spring-->>NextJS: 201 Created (DTO)
    NextJS-->>User: 성공 UI 업데이트
```

---
*Architected by Dopyeonsu - Sovereign Blueprint v2.0*
