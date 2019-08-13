FROM trevoreyre/node
ENV HOST 0.0.0.0
USER node

RUN mkdir /home/node/app
RUN mkdir /home/node/app/node_modules
RUN npm install -g @squarespace/server

WORKDIR /home/node/app


