FROM node:18

EXPOSE 3001

ARG UNAME=user
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

USER $UNAME

COPY . .

CMD ["bash", "-c", "npm start"]