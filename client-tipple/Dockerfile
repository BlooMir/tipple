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

# 빌드 (필요하면 build, dev, start 중 선택)
RUN bun run build

# 애플리케이션 실행 포트 (notion 참조)
EXPOSE 2016

# 애플리케이션 실행
CMD [ "bun", "run", "start" ]