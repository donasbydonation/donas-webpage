# Donas webpage

## Proposals

### Development proposal (Updated May 12, 2023)

- NextJS SSR

### Deployment proposal (Updated May 12, 2023)

- GitHub action CI
- AWS CodeDeploy CD
- Docker compose for container orchestration

## Image info (`ghcr.io/donasbydonation/front-end`)

### Ports

| PORT | DESCRIPTION |
|---|---|
| `3000/TCP` | Main TCP port |

### Environment variables

| ENV | DESCRIPTION |
|---|---|
| `BACK_END_URL` | API server endpoint. Default to `localhost:8080` |

## Local build & test

### Build

```bash
docker compose build
```

### Build-n-up

> NOTE: You must run [back-end related containers](https://github.com/donasbydonation/donas-apiserver/blob/main/docker-compose.yml) first.

```bash
docker compose build --up
```
