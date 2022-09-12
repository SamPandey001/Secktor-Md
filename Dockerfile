FROM quay.io/sampandey001/secktor:latest
RUN git clone https://sampandey001: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@github.com/SamPandey001/sec.git /root/SamPandey001
WORKDIR /root/SamPandey001/
RUN npm install -g npm@8.11.0
RUN npm install -g nodemon 
RUN npm install -g forever
RUN npm i cfonts
CMD ["npm", "start"]
