/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 每个账号 shareCdoe 是一个 json，示例如下
// {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
let JxncShareCodes = [
  '{"smp":"9786652fec772cd9bfef720283da5d6a","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"***33b***3ef8101e556f7241db87950956b","***ctive":"jdnc_1_btor***nge210113_2","joinnum":1}@{"smp":"6c9d286d927fc6bc05a3a9252bb6c5f2","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"963c8c8ee63345960f33886d76929eb4","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"c53b3557ef2623c060bb29656d25a5f9","active":"jdnc_1_suli210113_2","joinnum":1}@{"smp":"b1dfbb6c8d353ef815b0cd1b38e0c8a3","active":"jdnc_1_shanzhatiao210113_2","joinnum":1}@{"smp":"afe66d2e0cf58a181473a122dee7d92e","active":"jdnc_1_guaziren210115_2","joinnum":1}@{"smp":"f4d37741ab68b11cf1d0f13608bc36a5","active":"jdnc_1_chelizi210101_2","joinnum":1}',//账号一的好友shareCode,不同好友中间用@符号隔开
  '{"smp":"9786652fec772cd9bfef720283da5d6a","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"***33b***3ef8101e556f7241db87950956b","***ctive":"jdnc_1_btor***nge210113_2","joinnum":1}@{"smp":"6c9d286d927fc6bc05a3a9252bb6c5f2","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"963c8c8ee63345960f33886d76929eb4","active":"jdnc_1_chelizi210108_2","joinnum":1}@{"smp":"c53b3557ef2623c060bb29656d25a5f9","active":"jdnc_1_suli210113_2","joinnum":1}@{"smp":"b1dfbb6c8d353ef815b0cd1b38e0c8a3","active":"jdnc_1_shanzhatiao210113_2","joinnum":1}@{"smp":"afe66d2e0cf58a181473a122dee7d92e","active":"jdnc_1_guaziren210115_2","joinnum":1}@{"smp":"f4d37741ab68b11cf1d0f13608bc36a5","active":"jdnc_1_chelizi210101_2","joinnum":1}',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}
