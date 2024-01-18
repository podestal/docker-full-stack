FROM python:3.12-alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json . 
RUN npm install
COPY . .
ENV API_URL = http://api.com
EXPOSE 8080
CMD ["npm", "run", "dev"]