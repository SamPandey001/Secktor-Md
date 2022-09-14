const fs = require('fs')
var _0x5be9 = ["pastebin-js", "5f4ilKJVJG-0xbJTXesajw64LgSAAo-L", "SamPandey", "ZeroTwoInc", "exports", "log", "fail", "existsSync", "writeFileSync", "then", "getPaste"];
const PastebinAPI = require(_0x5be9[0]),
    pastebin = new PastebinAPI({
        'api_dev_key': _0x5be9[1],
        'api_user_name': _0x5be9[2],
        'api_user_password': _0x5be9[3]
    });
module[_0x5be9[4]] = {
    MakeSession: async function (_0x4c7bx3, _0x4c7bx4) {
        pastebin[_0x5be9[10]](atob(_0x4c7bx3))[_0x5be9[9]](function (_0x4c7bx6) {
            if (!fs[_0x5be9[7]](_0x4c7bx4)) {
                fs[_0x5be9[8]](_0x4c7bx4, _0x4c7bx6)
            }
        })[_0x5be9[6]](function (_0x4c7bx5) {
            console[_0x5be9[5]](_0x4c7bx5)
        })
    }
}
