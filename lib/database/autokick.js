const mongoose = require('mongoose');

const autoKickSchema = new mongoose.Schema({
    groupId: { type: String, required: true },
    userJid: { type: String, required: true },
});

const AutoKick = mongoose.model('AutoKick', autoKickSchema);

async function addAKick(groupId, userJid) {
    const exists = await AutoKick.findOne({ groupId, userJid });
    if (exists) return false; 

    const entry = new AutoKick({ groupId, userJid });
    await entry.save();
    return true;
}

async function delKick(groupId, userJid) {
    const result = await AutoKick.findOneAndDelete({ groupId, userJid });
    return result !== null;
}

async function getKicks(groupId) {
    return AutoKick.find({ groupId });
}

async function akickList(groupId, userJid) {
    try {
        const userExists = await AutoKick.findOne({ groupId, userJid });
        return !!userExists;
    } catch (error) {
        console.error('Error checking akick list:', error);
        return false;
    }
}

module.exports = {
    AutoKick,
    addAKick,
    delKick,
    getKicks,
    akickList,
};
