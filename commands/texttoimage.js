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

const { tlang,cmd } = require('../lib')
const Config = require('../config')
const prefix = Config.prefix
const maker = require('mumaker')

    //---------------------------------------------------------------------------
cmd({ pattern: "deepsea", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "horror", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "whitebear", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "joker", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "metallic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "steel", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "harrypotter", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "underwater", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "luxury", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "glue", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "fabric", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "toxic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "ancient", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({
            pattern: "cloud",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "transformer",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "thunder",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "scifi",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "sand",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rainbow",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pencil",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "neon",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "magma",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaves",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/natural-leaves-text-effect-931.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "glitch",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "discovery",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "christmas",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "candy",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "1917",
            category: "textpro",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            let anu = await maker.textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)
            Void.sendMessage(citel.chat, {
                image: {
                    url: anu
                },
                caption: `Made by ${tlang().title},For my ${tlang().greet}`
            }, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "blackpink",
        category: "textpro",
        desc: "Some text to image feature with various styles."
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)
        Void.sendMessage(citel.chat, {
            image: {
                url: anu
            },
            caption: `Made by ${tlang().title},For my ${tlang().greet}`
        }, {
            quoted: citel
        })
    }
)
