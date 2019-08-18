FROM node:10.16.3-alpine

COPY src /src

WORKDIR /src

CMD ["node", "index"]
