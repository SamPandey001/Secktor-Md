FROM quay.io/sampandey001/secktor:latest
RUN git clone https://sampandey001/Secktor-Md.git /root/SamPandey001
WORKDIR /root/SamPandey001/
RUN npm install -g npm@8.11.0
RUN npm install -g nodemon 
RUN npm install -g forever
RUN npm i cfonts
CMD ["npm", "start"]
