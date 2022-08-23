(async () => {
	switch (command) {
case 'horo':
{
const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
	   let textw = "";
    textw += `*🌟 Horoscope of  ${querie}*\n\n`;
	textw += `*Current Date:* ${json.current_date}.\n`;
	textw += `*Sign:* ${querie}.\n`;
	textw += `*Lucky Time:* ${json.lucky_time}.\n`;
	textw += `*Compatibility:* ${json.compatibility}.\n`;
	textw += `*Lucky Number:* ${json.lucky_number}.\n`;
	textw += `*Lucky Color:* ${json.color}.\n`;
        textw += `*Today Mood:* ${json.mood}.\n`;
	textw += `*Overall:* ${json.description}.\n`;

    citel.reply(textw)
});
}
break
		}
})()
