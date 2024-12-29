const mongoose = require('mongoose');

const autoDeleteSchema = new mongoose.Schema({
    groupId: { type: String, required: true },
    userJid: { type: String, required: true },
});

const AutoDelete = mongoose.model('AutoDelete', autoDeleteSchema);

async function addAutoDelete(groupId, userJid) {
    const exists = await AutoDelete.findOne({ groupId, userJid });
    if (exists) return false;

    const entry = new AutoDelete({ groupId, userJid });
    await entry.save();
    return true;
}

async function delAutoDelete(groupId, userJid) {
    const result = await AutoDelete.findOneAndDelete({ groupId, userJid });
    return result !== null;
}

async function getAutoDeletes(groupId) {
    return AutoDelete.find({ groupId });
}

async function isAutoDelete(groupId, userJid) {
    try {
        const exists = await AutoDelete.findOne({ groupId, userJid });
        return !!exists;
    } catch (error) {
        console.error('Error checking auto-delete list:', error);
        return false;
    }
}

module.exports = {
    AutoDelete,
    addAutoDelete,
    delAutoDelete,
    getAutoDeletes,
    isAutoDelete,
};
