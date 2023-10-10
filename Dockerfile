FROM --platform=linux/amd64 node:18.4.0-alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata && \
    apk add --no-cache bash
RUN yarn install && \
    yarn build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["yarn", "start"]