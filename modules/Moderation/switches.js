
(async () => {
	switch (command) {
	 case 'enable':
   case 'act':
   if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)

                                        if (!isGroup) return citel.reply("This command is only for group")
  if (!isAdmins) return citel.reply("❌ This command is only for admmin")
  if (!isBotAdmins) return citel.reply("❌ Provide Admin Role");
                                        if (args[0] == "antilink") {
                                        sck.findOne({ id : citel.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: citel.chat, antilink: "true" }).save()
  return citel.reply(' Antilink Enabled Successfully')
           } else {
           if(gc.antilink == "true") return citel.reply("Antilink was alredy enabled is already enabled")
                                      await sck.updateOne({ id: citel.chat }, {antilink: "true"})
                              return citel.reply('Enabled antilink in current chat.')
                          }
                  })
                                        } else if(args[0] == "events"){
                                          sck.findOne({ id : citel.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: citel.chat, events: "true" }).save()
  return citel.reply("Successfully Enabled *Events*")
           } else {
           if(gc.events == "true") return citel.reply("*Events* are already enabled")
                                      await sck.updateOne({ id: citel.chat }, {events: "true"})
                              return citel.reply("Successfully Enabled *Events*")
                          }
                  })
                                    } else if(args[0] == "invitdgdfgfdgdfgdfgdfg"){
                                          sck.findOne({ id : citel.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: citel.chat, invite: "true" }).save()
  return citel.reply(" Successfully Enabled *Indfsfdvite*")
           } else {
           if(gc.invite == "true") return citel.reply("*Idsgdgnvite* is already enabled")
                                      await sck.updateOne({ id: citel.chat }, {invite: "true"})
                                  console.log(gc.invite)
                              return citel.reply("Successfully Enabled *Invite*")

                          }
                  })
                                     } else if(args[0] == "nsfw"){
                                          sck.findOne({ id : citel.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: citel.chat, nsfw: "true" }).save()
  return citel.reply("Successfully Enabled *NSFW*")
           } else {
           if(gc.nsfw == "true") return citel.reply("*NSFW* is already enabled")
                                      await sck.updateOne({ id: citel.chat }, {nsfw: "true"})
                                  console.log(gc.invite)
                              return citel.reply("Successfully Enabled *NSFW*")

                          }
                  })
                                    }
                                    else {
                                          citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
                                        }


    break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'disable':
     case 'deact':
      if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
                                        if (!isGroup) return citel.reply("This feature in only for Group.")
  if (!isAdmins) return citel.reply("❌ This Command is only for Admin")
  if (!isBotAdmins) return citel.reply("❌ Give me Admin Role");
    if (args[0] == "antilink") {
  sck.findOne({ id : citel.chat }).then(async(usr) => {
           if (!usr) {
  return citel.reply("Antilink disabled")
           } else {
           if(usr.antilink !== "true") return citel.reply(" Antlinki was already disabled")
                                      await sck.updateOne({ id: citel.chat }, {antilink: "false"})
  return citel.reply("Disabled antilink Successfully.");
                          }
                  })
   }else if (args[0] == "events") {
  sck.findOne({ id : citel.chat }).then(async(usr) => {
           if (!usr) {
   return citel.reply("Events were already disabled")
           } else {
           if(usr.events !== "true") return citel.reply("Events was already disabled")
                                      await sck.updateOne({ id: citel.chat }, {events: "false"})
  return citel.reply("Successfully Disabled *Events*");
                          }
                  })
   } else if (args[0] == "invitefgjdngjdfjsgdj") {
  sck.findOne({ id : citel.chat }).then(async(usr) => {
           if (!usr) {
   return citel.reply("*Invite* is already disabled")
           } else {
           if(usr.invite !== "true") return citel.reply("🎏 *Invite* is already disabled")
                                      await sck.updateOne({ id: citel.chat }, {invite: "false"})
  return citel.reply("🧩 Successfully Disabled *Invite*");
                          }
                  })
    } else if (args[0] == "nsfw") {

  sck.findOne({ id : citel.chat }).then(async(usr) => {
           if (!usr) {
   return citel.reply("*NSFW* is already disabled")
           } else {
           if(usr.nsfw !== "true") return citel.reply("*NSFW* is already disabled")
                                      await sck.updateOne({ id: citel.chat }, {nsfw: "false"})
  return citel.reply("Successfully Disabled *NSFW*");
                          }
                  })
   }
   else {
      citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
   }
  break
  
		}
})()
