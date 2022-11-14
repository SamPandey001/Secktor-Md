## Install Secktor on Termux

-  All you need is patient and Internet in phone with termux.
-  If you don't have termux install from [Termux](https://play.google.com/store/apps/details?id=com.termux&hl=en_IN&gl=US&pli=1)
-  First fork Repo and fill vars or..
-  Open termux and run these commands

  ```
  bash <(curl -L https://gist.githubusercontent.com/SamPandey001/012a7d671b143170bf34b419419327d5/raw)
  ```

-  make a file with name ```config.env``` and will given vars
-  To make file

    ```
    touch config.env
    ```
    
- To fill vars

     ```
     nano config.env
     ```
     
    ``` 
       OWNER_NUMBER="911234567890"
       MONGODB_URI="mongodb+srv://*************"
       SESSION_ID = "secktorbot.herokuapp.com/session"
       THUMB_IMAGE = "https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png"
       port = 5000
       email = "sam@secktor.live"
       global_url = "instagram.com"
       OWNER_NAME = "SamPandey001"
       AUTO_REACTION = false
       FAKE_COUNTRY_CODE = 92
       READ_MESSAGE = false
       PREFIX = .
       WARN_COUNT = 3
       DISABLE_PM = false
       ANTI_BAD_WORD = "fuck"
       LEVEL_UP_MESSAGE= true
       WELCOME_MESSAGE =  "*Hi,* @user \n*Welcome in* @gname \n*Member count* : @count th"
       THEME= SECKTOR
       WORKTYPE = public
       PACK_INFO = "Sam;Pandey"
       ANTILINK_VALUES = "chat.whatsapp.com"
       
    ```
- run ```node lib/client.js``` and bot will be working
