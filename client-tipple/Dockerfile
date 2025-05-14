FROM oven/bun:1.1.13

# 시간대 package 다운로드
RUN apt-get update && apt-get install -y tzdata
# 한국
ENV TZ=Asia/Seoul

# 작업 폴더 설정 및 copy
WORKDIR /app/client-tipple

# 프로젝트 파일 전체 복사 (bun.lockb 포함)
COPY . .

# 의존성 설치
RUN bun install
RUN bun run build

RUN bun add -g serve

EXPOSE 3000

# 애플리케이션 실행
CMD [ "bun", "run", "start" ]