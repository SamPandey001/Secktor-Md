FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/SamPandey001/Secktor-Md /root/SamPandey001
WORKDIR /root/SamPandey001/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
