/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const Intro = require('../lib')
Intro.cmd({
        pattern: "intro",
        desc: "To check intro",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```Intro Time```');
        var final = new Date().getTime();
        return await citel.reply('╭ ִ⌯ ۫┄─‌┄ׁ ▹ ִ┄۫─‌┄ ִ⌯ ۫┄─‌┄ׁ ▹ ִ┄۫─‌┄
┊𖥻 NAMA LENGKAP :
┊𖥻 NAMA PANGGILAN :
┊𖥻 UMUR :
┊𖥻 KELAHIRAN TAHUN :
┊𖥻 JENIS KELAMIN :
┊𖥻 HOBBY :
┊𖥻 KELAS :
┊𖥻 KOTA ASAL :
┊𖥻 SAVE NOMOR ADMIN
┊𖥻 DILARANG COPAS
┊𖥻 TANPA SEIZIN PEMBUAT
┊𖥻 DIBUAT OLEH (MG-SJ)
╰ ִ⌯ ۫┄─‌┄ׁ ▹ ִ┄۫─‌┄ ִ⌯ ۫┄─‌┄ׁ ▹ ִ┄۫─‌┄* ');
    }
);
