FROM quay.io/sampandey001/secktor:latest
RUN npm install --location=global nodemon 
RUN npm --omit=dev install
RUN npm install --location=global chalk
RUN npm i cfonts
RUN npm install --location=global pm2
RUN npm i -g heroku
RUN npm config set loglevel silent

CMD ["pm2-runtime", "start"]
