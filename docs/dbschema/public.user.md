# public.user

## Description

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| id | integer | nextval('user_id_seq'::regclass) | false | [public.user_location](public.user_location.md) |  |  |
| school_number | integer |  | false |  |  |  |
| username | varchar |  | false |  |  |  |
| class_name | varchar |  | false |  |  |  |
| attendance_number | varchar |  | false |  |  |  |
| is_calling | boolean |  | false |  |  |  |
| created_at | timestamp without time zone | now() | false |  |  |  |
| updated_at | timestamp without time zone | now() | false |  |  |  |

## Constraints

| Name | Type | Definition |
| ---- | ---- | ---------- |
| PK_cace4a159ff9f2512dd42373760 | PRIMARY KEY | PRIMARY KEY (id) |

## Indexes

| Name | Definition |
| ---- | ---------- |
| PK_cace4a159ff9f2512dd42373760 | CREATE UNIQUE INDEX "PK_cace4a159ff9f2512dd42373760" ON public."user" USING btree (id) |

## Relations

```mermaid
erDiagram

"public.user_location" }o--|| "public.user" : "FOREIGN KEY (user_id) REFERENCES "user"(id)"

"public.user" {
  integer id
  integer school_number
  varchar username
  varchar class_name
  varchar attendance_number
  boolean is_calling
  timestamp_without_time_zone created_at
  timestamp_without_time_zone updated_at
}
"public.user_location" {
  integer id
  integer user_id FK
  integer room_id FK
  timestamp_without_time_zone created_at
  timestamp_without_time_zone updated_at
}
```

---

> Generated by [tbls](https://github.com/k1LoW/tbls)