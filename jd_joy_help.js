/*
宠汪汪强制为别人助力（助力一个好友你自己可以获得30积分，一天上限是帮助3个好友，自己获得90积分，不管助力是否成功，对方都会成为你的好友）
更新�址：https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js
更新时间：2021-1-21
目前提供了304位好友的friendPin供使用。脚本随机从里面获取一个，助力成功后，退出小程序重新点击进去开始助力新的好友
欢迎大家使??? https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1 (currentPage=1表示第一页好友，=2表示第二页好???)
提供各自账号列表的friendPin给我
如果想设置固定好友，那下载下来放到本地使用，可以修改friendPin换好???(助力一好友后，更换一次friendPin里面的内???)
感谢github @Zero-S1提供
使用方法???
①设置好相应软件的重???
②从京东APP宠汪???->领狗???->邀请好友助力，分享给你小号微信或者微信的文件传输助手??? 自己再打开刚才的分享，助力成功后，返回到此小程序首页重新进去宠汪汪即可助力下一位好???
③如提示好友人气旺，说明此好友已满了三人助力，需重新进出小程序，重新进入来客有礼-宠汪汪???
[MITM]
hostname = draw.jdfcloud.com
======================Surge=====================
[Script]
宠汪汪强制为别人助力= type=http-request,pattern=^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js

===================Quantumult X=====================
[rewrite_local]
^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin url script-request-header https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js

=====================Loon=====================
[Script]
http-request ^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力


你也可从下面链接拿好友的friendPin(复制链接到有京东ck的浏览器打开即可)

https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1
*/
let url = $request.url
const friendsArr = ["jd_41345a6f96aa5", "jd_45a6b5953b15b", "jd_45a6b5953b15b", "jd_704a2e5e28a66", "jd_66f5cecc1efcd", "jd_sIhNpDXJehOr", "jd_5851f32d4a083", "yhr_19820404", "13008094886_p", "13966269193_p", "jd_4e4d9825e5fb1", "jd_5ff306cf94512", "ququkoko", "jd_59a9823f35496", "529577509-275616", "18923155789_p", "jd_455da88071d1e", "dreamscometrue5120", "蒋周???19620607", "jd_620ceca400151", "杉雨2011", "MARYMY88", "13682627696_p", "jd_6777ee65f9fcc", "夏海???12315", "jd_437b4f3fa5d83", "zyjyc9998", "meoygua", "MLHK7288", "jd_42d9ce3001acd", "jd_57650a30ef6eb", "jd_44ca1016e0f96", "jd_74332d1d62a97", "jd_7dbe4f8a40a7d", "jd_4fa238e4e3039", "elbereth1122", "jd_4d9be23908e41", "jd_51f0d43d78900", "13588108107_p", "123by456", "09niuniuma", "143798682-947527", "jd_560c6f30e6951", "jd_54ddb8af5374a", "夏革???", "247466310", "wang2011", "chensue", "1362245003-624122", "wdGefYCBlyOuvz", "jd_412f7eb363cd8", "18311575050_p", "1307976-34738981", "wdgOGLtOJjjbnp", "klhzdx", "jd_5fdcdcb183d7d", "jd_5862fd8834680", "jd_51a64a9da6b94", "302990512-553401", "jd_4078f69a72873", "jd_ewYCRdmukzQH", "13348822441_p", "hlcx86021", "390823571-784974", "jd_79af2bc7a56a3", "15053231812_p", "jd_6f53253d117c5", "jd_5bf29dffa62ea", "jd_47a1c4ad02103", "刘凤???", "145391572-102667", "yanglan0409", "jd_4b8a70f3b06c3", "弑神X", "jd_59d962a076126", "sjw3000", "jd_4d4def8b59787", "L1518235423", "jd_579b891fbea9b", "frank818", "hellohuhua", "jd_4cf1918577871", "jd_akYbyiXqrIDC", "李纪???", "jd_54a4260ca986c", "jd_4cba35cfa8220", "13654075776_p", "13916051043", "jd_6f9b9a6769afb", "iamkgbfox", "jd_5fbda9be54d5b", "jd_76763ba485c5e", "jd_485c757b79422", "xiaojingang_0", "lanye1545", "chenzhiyun2002", "lmpbjs1988", "jd_SmPxpudoGYOb", "jwl19690905", "荷舞弄清???88", "jd_750d6a9734717", "jd_64e37854e713f", "jd_573c9832d8989", "wdkplHVQlgowTW", "wwk232323", "jd_6bfe51f915c90", "我手机号???", "13681610268_p", "ss836580793", "15868005933_p", "zooooo58", "陌上花开花又???", "jd_701f52f8badbb", "jd_462f9229c20e4", "jd_42193689987a0", "jd_7dc5829121bcc", "13656692651_phz", "jd_47f49f22f1dc3", "handechun959", "13775208986_p", "guoyizhang", "jd_677dd20bf2749", "jd_FfAnqFVEoBul", "jd_4e59841cae4f9", "jd_5279d593e7803", "思绪随风2011", "jd_62e335d785872", "suyugen", "jd_4e68b48d16f7b", "jd_56b7a4e092e85", "cocoty", "jd_7b6d6e7dc98f1", "jd_63423cd594e8b", "greatyunyun", "4349小丢???", "18027486801_p", "15207695569_p", "llbai11", "wdNRUvbJItetlvB", "jd_54154982c707f", "85192cool", "jd_60d497271825b", "greatyunyun9320", "ky252571504", "jd_74e60dbcae365", "wdiicnSbYSHWwE", "jd_529a0a309d418", "jd_7be92b11b7e8f", "13486659225_p", "jd_iFnquhpWWAzO", "jd_6e348ece13e20", "jd_6f5b49bb757cb", "znz传奇", "418001066_m", "jd_67ded5748c3ab", "361372-27819972", "jd_5fafb631c98af", "jd_76dd04e844d63", "小鹿Jenny", "00数字方程???", "jd_77a82b603c6c3", "勇敢的小???", "jd_4481f68984466", "jd_758f5224ee957", "mwb1992062_m", "15975229552_p", "zdj8341", "pet_virtual_friend_胡皋???", "pet_virtual_friend_绿茶sama", "pet_virtual_friend_Ainio", "jd_4915949b7bfa1", "jd_7ca74ed9224ef", "jd_42764f5ea2341", "5317123-63418293", "jd_40a2d9485cbdb", "qazmcl1230", "jd_7ced325aba4fd", "jd_402fe7425fcaf", "95581245-627991", "luffy-314_m", "jd_BCXgLlmxHdiS", "jd_610b3d00928e5", "你要醒来", "338379384-148135", "pet_virtual_friend_乔治???", "jd_54130a3e282ea", "jd_6169b3411ed5b", "jd_428d930ca56a5", "qq6924309", "pet_virtual_friend_路遇狗与少年", "jd_712bd3bfd55d6", "jd_4e97fe5ca4003", "tommy_he1", "13981372001_p", "129867657-673064", "jd_525d6e7a57e7c", "wdZuirGekSHKmF", "jd_75e1da74980ab", "jd_RVMXldNSQNOP", "jd_5f94da0265e0d", "jd_67ab629be7e61", "13887490621_p", "jd_4e0d529ba3c35", "jd_493918e314b50", "jd_71a220104187a", "jd_vVhhkdUpTkJQ", "gary388jingdong", "wdjQkAbFobMTyo", "cloud_kim", "jd_558ed75f52d39", "15555448319_p", "wdhxZuEvXhhvCf", "jd_72b940be8c0f4", "congcong炒葱???", "jd_7eb0de64eb25a", "13209558123_p", "jd_53bf7cb6fb8e6", "jd_4fe620f72fa7c", "夏雨的爱???", "jd_47ba82eb392a5", "jd_LXnFHXoJwXkW", "62160785-578856", "醒醒该睡???", "jd_LOEWgvNwQIWD", "xiiirww", "pet_virtual_friend_特兰克斯", "pet_virtual_friend_Talon", "jd_4f7cd5b108733", "jd_NgNWXMVkJIvk", "jadonglin", "玩家卫弈", "liangxuejingdong", "jd_627171efb7c0a", "jd_53bc7a14f64d6", "15809290902_p", "jd_65a2ab73d9aa5", "jd_6edb943cacbfb", "jd_7f7eabc5caf7d", "jd_725e17effb6a9", "蔡辉???", "voxb", "gdxx_hhw_m", "jd_78f0d6524a1dc", "jd_sDtnONLeHwfG", "xyyshy1983", "yinlang46", "ypqian", "15817094457_p", "fdxwb", "wuyaoxin2012", "明子???", "henry1927_m", "chamy99", "jd_461e384274c34", "248358330-645106", "jd_4fd63de4a6033", "蜜糖向日???", "wonghe", "36453197-121619", "琳琅满目cbb", "jd_5b7cc9e532426", "134795344-89911673", "15211488203_p", "jd_6f1f0722f8365", "jd_JmGCpqgpCtqG", "墨明棋妙???", "pet_virtual_friend_1314爱澳", "1209815-33190621", "zhouhuayh", "jd_6d3cbb8b0751a", "jd_6e00e826f939b", "mztvip", "davidharry", "sara35424", "sun5025", "jd_62ce2385bb364", "352834026-406289", "pet_virtual_friend_丁座的真爱粉", "jd_582eecf8d27a9", "jd_49acdb02e8514", "13976911784_p", "jd_uGzohbhFpRuz", "wzywolfgang", "yjbonny", "沧海不轮???", "649297742_327799447", "倚兰???", "琳琳8796", "snzh2013", "jd_73751adc04afd", "wdNnlMzPGJJKgqI", "yygt1158", "jd_53df36eb204a0", "花开花花???", "jd_611e082213c89", "jd_71e77d9235cf5", "jd_596fd9fea411f", "jd_7277d200aa1ac", "15230573701_p", "zb19881021", "692620136???", "168876810-159969", "zhushidan100", "上自习的???", "15602231009_p", "jd_5213fd3fd5e09", "jd_6711f97ee4dfe", "44787591-640051", "MisterGlasses", "jd_7b22bbfe1e7e5", "138555963-81748582", "jd_QEVVkkDTQAlJ", "4932713-24535180", "jd_6dce98c07a644", "jd_DUtPtiiDamDr", "wangyneu", "wBm1TsDy3p_m", "jd_6acd3a6cc79cc","jd_444f5c020f31c","jd_71caf6b3ec4cb", "shin_dynasty", "carola82", "jd_AOhLSBLdSnux", "ningbormb"]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含???
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
let friendPin = encodeURI(friendsArr[randomNumber(0, friendsArr.length)]) //强制为对方助???,可成为好友关???
const timestamp = new Date().getTime()
newUrl = url.replace(/friendPin=.*?$/i, "friendPin=" + friendPin).replace(/invitePin=.*?$/i, "invitePin=" + friendPin).replace(/inviteTimeStamp=.*?$/i, "inviteTimeStamp=" + timestamp + "&")
console.log(newUrl)
$done({ url: newUrl })

