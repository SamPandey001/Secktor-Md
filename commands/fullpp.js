/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 **/

const { cmd } = require('../lib');
const Jimp = require('jimp');

cmd(
	{
		pattern: 'fullpp',
		desc: 'Set full screen profile picture',
		category: 'user',
	},
	async (Void, citel, text, { isCreator }) => {
		if (!isCreator) return;
		if (!citel.quoted) return await citel.reply('_Reply to a photo_');
		if (!citel.quoted.mtype === 'imageMessage')
			return await citel.reply('_Reply to a photo_');
		const media = await citel.quoted.download();
		await updateProfilePicture(
			Void.user.id.split(':')[0] + '@s.whatsapp.net',
			media,
			Void,
		);
		return await citel.reply('_Profile Picture Updated_');
	},
);

async function updateProfilePicture(jid, img, Void) {
	const { query } = Void;
	const { preview } = await generateProfilePicture(img);
	await query({
		tag: 'iq',
		attrs: {
			to: jid,
			type: 'set',
			xmlns: 'w:profile:picture',
		},
		content: [
			{
				tag: 'picture',
				attrs: { type: 'image' },
				content: preview,
			},
		],
	});
}

async function generateProfilePicture(buffer) {
	const jimp = await Jimp.read(buffer);
	const min = jimp.getWidth();
	const max = jimp.getHeight();
	const cropped = jimp.crop(0, 0, min, max);
	return {
		img: await cropped
			.scaleToFit(324, 720)
			.getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG),
	};
}
