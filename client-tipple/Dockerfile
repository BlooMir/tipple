FROM node:22

# 시간대 package 다운로드
RUN apt-get update && apt-get install -y tzdata
# 한국
ENV TZ=Asia/Seoul

# 작업 폴더 설정 및 copy
WORKDIR /app/client-tipple
COPY package*.json ./

# 의존성 설치 및 build
RUN npm install
COPY . .
RUN npm run build

# 애플리케이션 실행 포트 (notion 참조)
EXPOSE 2016

# 애플리케이션 실행
CMD [ "npm", "run", "start" ]