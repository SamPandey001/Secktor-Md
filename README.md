<h1 align="center">Secktor MD WhatsApp Bot</h1>

<p align="center">
  <a href="https://chat.whatsapp.com/DG86OkvmerHKHJjkE5X2Wv">
    <img src="https://raw.githubusercontent.com/SecktorBot/Brandimages/8075d6f814c48414dd03688a35f4bfd80fb6e603/logos/SocialLogo%201.svg" alt="Secktor MD" height="300">
  </a>
</p>

<p align="center">Secktor brings excitement and efficiency to your WhatsApp experience.</p>

<p align="center">
  <a href="https://chat.whatsapp.com/DG86OkvmerHKHJjkE5X2Wv" target="_blank">
    <img alt="Join Group" src="https://img.shields.io/badge/Join Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>
  <a href="https://github.com/SamPandey001/Secktor-Md/blob/main/LICENCE" target="_blank">
    <img alt="License: GPL-3" src="https://badges.frapsoft.com/os/gpl/gpl.png?v=103" />
  </a>
</p>

---

### Deployment Methods

1. **Get [Session ID](https://legend.koyeb.app)**

     - Scan the QR code: `WhatsApp > Three dots > Linked Devices`.

2. **Set Up MongoDB**

     - Obtain a [MongoDB URI](https://github.com/SamPandey001/Secktor-Md/wiki/Mongodb-URI).
     - Example URI:
          ```plaintext
          mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
          ```

3. **Fork the Repository**

     - Click [FORK](https://github.com/SamPandey001/Secktor-MD/fork).

4. **Deploy**

     - **[Heroku](https://secktorub-b34f1c3c60d3.herokuapp.com/heroku)**
     - **[Koyeb](https://secktorub-b34f1c3c60d3.herokuapp.com/koyeb)** (Get API key [here](https://app.koyeb.com/settings/api)).
     - **[Replit](https://repl.it/github/SamPandey001/Secktor-Md)**  
       Run these commands in the Replit shell if needed:

          ```bash
          yarn
          npm i pm2 -g && pm2 start lib/client.js
          ```

          Fill variables in the JSON format:

          ```json
          {
          	"SESSION_ID": "Your-Session-ID",
          	"OWNER_NUMBER": "Your-Number",
          	"OWNER_NAME": "Your-Name",
          	"MONGODB_URI": "Your-MongoDB-URI",
          	"PACK_INFO": "PackName;Author",
          	"PREFIX": "."
          }
          ```

7.  ***[Deploy on Railway](https://secktorub-b34f1c3c60d3.herokuapp.com/railway)***
  
9. ***Deploy in [Linux](https://github.com/SamPandey001/Secktor-Deploy#deploy-in-any-shell-including-termux)***

10. if you get error in doing above try, [Deploy on VPS or PC.](https://github.com/SamPandey001/Secktor-Md/blob/main/deploy-on-vps.md)
---

### Resources

-    [Secktor Documentation](https://github.com/SamPandey001/Secktor-Md/wiki)
-    [Deployment Tutorials](https://www.youtube.com/watch?v=vWpVSgIVYqg)
-    [Support Group](https://chat.whatsapp.com/DG86OkvmerHKHJjkE5X2Wv)

### Credits

-    Thanks to [Yusuf Usta](https://github.com/yusufusta) for inspiring ideas.

### License

Secktor is licensed under the [GPL-3 license](https://github.com/SamPandey001/Secktor-Md/blob/main/LICENCE).
