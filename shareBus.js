const $ = new Env('助力码随机上车🚗')
const jsname = "助力码随机上车🚗";
const notify = $.isNode() ? require('./sendNotify') : '';
let message = '';
if ($.isNode()) {
  message += `脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()} \n\n`;
  console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
  console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}=============\n`)
}
/**
 * zd 种豆
 * nc 农场
 * mc 萌宠
 * dd 东东工厂
 * jx 京喜工厂
 * cash 签到领现金
 * year 压岁钱
 * nian 年兽

 */
const shareCodes = [
  // Chris
  {
    zd: 'ybvc7vkuuqg3q3tc2h5pwmkfyi',
    nc: '96cadc24677b452abf157c51cfb1376a',
    mc: 'MTE1NDQ5OTIwMDAwMDAwMzkwODEzMzU=',
    dd: 'T0105aQgG09atgCjVWnYaS5kRrbA',
    jx: '8xiUadjzs_KbIuVygTqkDg==',
    zz: 'S5aQgG09atg',
    cash: 'eEJkN73xJQ',
    year: 'octiALcL48cbT-J9e_xx-Zsax2ZvTDHYinVe',
		nian: 'cgxZdDjRf-uZqUKFawD4juwn6wbTMpI',
  },
  // yh
  {
    zd: 'e7lhibzb3zek2o3osubib6jnwdifwbxlqmpzu7y',
    nc: 'b74b0d1a1ff74966994d3c9a6eb1bef2',
    mc: 'MTE1NDUwMTI0MDAwMDAwMDQwMTEyNDEz',
    dd: 'T0225KkcRBga81LSdBylkvJYdwCjVWnYaS5kRrbA',
    jx: 'k4KqkxwwBXhrxXq6-13dqQ==',
    zz: 'S5KkcRBga81LSdBylkvJYdw',
    cash: 'eU9YaOqxYPojpWiEzXZB1Q',
    year: 'oMZeX-BLpo1SV-RgMbUi_C62WDebLS0iTWH_66ZTSs56aCIw',
    nian: 'cgxZdTXtILzZ7AjMXAP46RwDOXnr04fu2OK6qadhKZKFEq-PqeFNE5XNP9Q',
  },
  // 悠哉
  {
    zd: 'haofcpgvxtwwoksczndwypn7d7qcxytdwhsfwpa',
    nc: '02f8e4e9947746cea7b57f0f02068f82',
    mc: 'MTAxODExNDYxMTEwMDAwMDAwNDAxMzI3NzU=',
    dd: 'T019-ivB0Mu6TIJfqM9XLbMCjVWnYaS5kRrbA',
    jx: 'Q3G7yKihFtskVqxkDs4Eiw==',
    zz: 'S-ivB0Mu6TIJfqM9XLbM',
    cash: 'Z82F_DkR3yquebt2cjc',
    nian: 'cgxZa7cwtG95U9hBgNAKVuLL9qvCj6bVLNFoagHLJ4OXBc7WZl84',
  },
  // 正阳
  {
    zd: 'awus372yrusdniyfhgunn4m554',
    nc: '63e2663045994a62b2ff1fc13f8a45c3',
    mc: 'MTE1NDQ5OTUwMDAwMDAwNDAxMTI3MTM=',
    dd: 'T012a2nZmL20IdxkCjVWnYaS5kRrbA',
    jx: 'ImRebJq_57-RN3IgPi9m_A==',
    zz: 'Sa2nZmL20Idxk',
    cash: '9o-dtE8fsnSV',
    year: 'Lwabg0XldAPkT659N_w8sym2Pg4EOMAmq_VEaOQ',
    nian: 'cgxZ-vUo_Bl3PoZ6REnKvoV23OQ2fIBHYoQh',
  },
  // luccy
  {
    zd: 'oss2ycictwzowutap6w6fvllhfnzpbfw4uapnvi',
    nc: '809e185f1db1416194f416381bb4fb4f',
    mc: 'MTAxODExNTM5NDAwMDAwMDA0MDEzMjc4Mw==',
    dd: 'P04z54XCjVWnYaS5uCdrLh_fKvgIXjDJ9xTJ0cnmA',
    jx: 'bGZyuA43q56Dx1ZTB1v1Wgi_GsDPku1qLBCaBDw3mXA=',
    zz: 'Sa2jXmJm4Iv5j9Y9MQXmNoL7-',
    cash: '9o6TtGsTsVaSJPttHv2UAgk4',
    nian: 'cgxZ-vQm_D17PaR93ZAROuGyAH94KTDjfLrvzpxI_5_9M-rFb8vZAGSYowDqDX50',
  },
  // 俊辰
  {
    zd: '4npkonnsy7xi2shhdpwzao2adev6aemttkh3coq',
    nc: '8ac8ccc95a2a44bab39e393ab23286b3',
    mc: 'MTE1NDAxNzgwMDAwMDAwNDA1MjY2OTc=',
    dd: 'P04z54XCjVWnYaS5m9cZ2eq2y1NkoUO7Kq5iIM',
    jx: 'geWiRnjBuaYU1FTPo9qHWQ==',
    cash: 'eU9Ya760N_sho23TnidA0g',
    year: 'oMZeXLRO8YxQUeE3YuQj-4HakEwHFjtCmbHdvpwI-mlwNRVC',
    nian: 'cgxZdTXtI-jcuwnOWgavusWH_p3CHh0lYhBKunmfczB0cWNCSZCEsn6iUi4',
  },
  // skylee1
  {
    zd: 'e7lhibzb3zek33girhyhdliwt5fg7y7coc6fbcq',
    nc: '6cc1f00d3df34d49a50a0fffa15b86bf',
    mc: 'MTAxODc2NTEzMTAwMDAwMDAyMDU1MjUwNw==',
    dd: 'T0144qQ3GU9HtgySfgCjVWnYaS5kRrbA',
    jx: '4J64q0wPBO9KYK3SrFOu9Q==',
    zz: 'S4qQ3GU9HtgySfg',
    cash: 'f0JzNb3sJaRjrw',
    year: 'pst1ArcW49MSXa59e7A8s1siZMVONvYYO-HT553c',
    nian: 'cgxZczjGfeuEqVaMVknljFEc40bAC_-qM-bAPlKO',
    },
  // skylee2
  {
    zd: '66nvo67oyxpyce6odctijj3nrhl5wdost2w3fry',
    nc: '964765d091634c699247597f1ce199fe',
    mc: 'MTAxODc2NTEzMzAwMDAwMDAxNDcyMDE2NQ==',
    dd: 'T0225KkcRBtPoQLRIkvzk_dYdACjVWnYaS5kRrbA',
    jx: 'M7RAgr_EtABMv4X65FO4ig=='
    zz: 'S5KkcRBtPoQLRIkvzk_dYdA',
    cash: 'eU9YaOnkMqog8z_SzHNB1g',
    year: 'oMZeX-Me9N1RAbM2MLAi_-tTNPZgycIfPmkVJB7vQUBQ1RiQ',
    nian: 'cgxZdTXtIL-MvljPClSu6EFYVzoxq2DpsvRkeZlFMZP5emzkiv6juYaPMHM',
  },
  // skylee3
  {
    zd: '53c3u54x45cxpg6jra5vmwmmyq',
    dd: 'T0205KkcN117qwKKWGK9y41fCjVWnYaS5kRrbA',
    mc: 'MTAxODc2NTEzMjAwMDAwMDAwMzQ1Mzc3Mw==',
    nc: '131adcf7cc59470e9a2bbdf7ebc7cedc',
    jx: 'EBKF96NEIjafPXEj156fVA==',
    zz: 'S5KkcN117qwKKWGK9y41f',
    cash: 'eU9YG6_QOKp7iRaclAlG',
    nian: 'cgxZdTXtU_m4tFiUcH3gsNZWk5oVClunQhZrDbXC0DMjykp3SwtwXfc',
  },
];
$.result = []

!(async () => {
  for (let i = 0; i < shareCodes.length; i++) {
    const {zd, nc, mc, dd, jx, zz} = shareCodes[i];
    zd && await createZd(`http://jd.turinglabs.net/api/v2/jd/bean/create/${zd}/`)
    nc && await createNc(`http://jd.turinglabs.net/api/v2/jd/farm/create/${nc}/`)
    mc && await createMc(`http://jd.turinglabs.net/api/v2/jd/pet/create/${mc}/`)
    dd && await createDd(`http://jd.turinglabs.net/api/v2/jd/ddfactory/create/${dd}/`)
    jx && await createJx(`http://jd.turinglabs.net/api/v2/jd/jxfactory/create/${jx}/`)
    zz && await createZz(`https://code.chiang.fun/api/v1/jd/jdzz/create/${zz}/`)
    cash && await createZz(`https://code.chiang.fun/api/v1/jd/jdcash/create/${cash}/`)
    year && await createZz(`https://code.chiang.fun/api/v1/jd/year/create/${year}/`)
    nian && await createZz(`https://code.chiang.fun/api/v1/jd/jdnian/create/${year}/`)
  }
  await showMsg()
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

// 种豆得豆
function createZd(zdUrl) {
  return new Promise((resolve) => {
    const url = {url: zdUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data) {
          if (_data.message.indexOf("existe") !== -1) {
            message += `种豆得豆：已在车上` + '\n'
          } else {
            message += `种豆得豆：完美上车` + '\n'
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

// 京东农场
function createNc(ncUrl) {
  return new Promise((resolve) => {
    const url = {url: ncUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京东农场：已在车上` + '\n'
        } else {
          message += `京东农场：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

// 京东萌宠
function createMc(mcUrl) {
  return new Promise((resolve) => {
    const url = {url: mcUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京东萌宠：已在车上` + '\n'
        } else {
          message += `京东萌宠：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createDd(ddUrl) {
  return new Promise((resolve) => {
    const url = {url: ddUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `东东工厂：已在车上` + '\n'
        } else {
          message += `东东工厂：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createJx(jxUrl) {
  return new Promise((resolve) => {
    const url = {url: jxUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京喜工厂：已在车上` + '\n'
        } else {
          message += `京喜工厂：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createZz(jxUrl) {
  return new Promise((resolve) => {
    const url = {url: jxUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.msg.indexOf("Exists") !== -1) {
          message += `京东赚赚：已在车上` + '\n'
        } else {
          message += `京东赚赚：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

async function showMsg() {
  if ($.isNode()) {
    $.log(jsname + '\n' + message)
    await notify.sendNotify(jsname, "", message)
  } else {
    $.log(message)
    $.msg(jsname, "", message)
  }

}

// prettier-ignore
function Env(t, s) {
  return new class {
    constructor(t, s) {
      this.name = t, this.data = null, this.dataFile = "box.dat", this.logs = [], this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, s), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports
    }

    isQuanX() {
      return "undefined" != typeof $task
    }

    isSurge() {
      return "undefined" != typeof $httpClient
    }

    isLoon() {
      return "undefined" != typeof $loon
    }

    loaddata() {
      if (!this.isNode) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s);
        if (!e && !i) return {};
        {
          const i = e ? t : s;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch {
            return {}
          }
        }
      }
    }

    writedata() {
      if (this.isNode) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s),
          o = JSON.stringify(this.data);
        e ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(s, o) : this.fs.writeFileSync(t, o)
      }
    }

    lodash_get(t, s, e) {
      const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return e;
      return o
    }

    lodash_set(t, s, e) {
      return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}, t)[s[s.length - 1]] = e, t)
    }

    getdata(t) {
      let s = this.getval(t);
      if (/^@/.test(t)) {
        const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), o = e ? this.getval(e) : "";
        if (o) try {
          const t = JSON.parse(o);
          s = t ? this.lodash_get(t, i, "") : s
        } catch (t) {
          s = ""
        }
      }
      return s
    }

    setdata(t, s) {
      let e = !1;
      if (/^@/.test(s)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(s), h = this.getval(i),
          a = i ? "null" === h ? null : h || "{}" : "{}";
        try {
          const s = JSON.parse(a);
          this.lodash_set(s, o, t), e = this.setval(JSON.stringify(s), i), console.log(`${i}: ${JSON.stringify(s)}`)
        } catch {
          const s = {};
          this.lodash_set(s, o, t), e = this.setval(JSON.stringify(s), i), console.log(`${i}: ${JSON.stringify(s)}`)
        }
      } else e = $.setval(t, s);
      return e
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }

    setval(t, s) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = t, this.writedata(), !0) : this.data && this.data[s] || null
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }

    get(t, s = (() => {
    })) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, e, i) => {
        !t && e && (e.body = i, e.statusCode = e.status, s(t, e, i))
      }) : this.isQuanX() ? $task.fetch(t).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, s) => {
        try {
          const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
          this.ckjar.setCookieSync(e, null), s.cookieJar = this.ckjar
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)))
    }

    post(t, s = (() => {
    })) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, e, i) => {
        !t && e && (e.body = i, e.statusCode = e.status, s(t, e, i))
      }); else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)); else if (this.isNode()) {
        this.initGotEnv(t);
        const {url: e, ...i} = t;
        this.got.post(e, i).then(t => {
          const {statusCode: e, statusCode: i, headers: o, body: h} = t;
          s(null, {status: e, statusCode: i, headers: o, body: h}, h)
        }, t => s(t))
      }
    }

    msg(s = t, e = "", i = "", o) {
      this.isSurge() || this.isLoon() ? $notification.post(s, e, i) : this.isQuanX() && $notify(s, e, i), this.logs.push("", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="), this.logs.push(s), e && this.logs.push(e), i && this.logs.push(i)
    }

    log(...t) {
      t.length > 0 ? this.logs = [...this.logs, ...t] : console.log(this.logs.join(this.logSeparator))
    }

    logErr(t, s) {
      const e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      e ? $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.message)
    }

    wait(t) {
      return new Promise(s => setTimeout(s, t))
    }

    done(t = null) {
      const s = (new Date).getTime(), e = (s - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, s)
}
