function module() {
    return {
        id: "smug",
        name: "Smug Module",
        desc: "Provides the !smug command, which posts a random anime smug face."
    };
}

function configure() {
    return [
        {
            name: "userlevel.smug",
            value: "all",
            desc: "The minimum user level requires to run the !smug command."
        }
    ];
}

function commands() {
    return [
        {
            name: "smug",
            usage: "",
            func: smug
        }
    ];
}

var m_smugFaces = [
    "http://blay09.net/bot/smug/0U90HMC.jpg",
    "http://blay09.net/bot/smug/aTxqXSR.png",
    "http://blay09.net/bot/smug/Gq3Pr8M.gif",
    "http://blay09.net/bot/smug/lfZA8Ss.jpg",
    "http://blay09.net/bot/smug/QhqCi3Q.png",
    "http://blay09.net/bot/smug/VeSFthX.jpg",
    "http://blay09.net/bot/smug/13QQjfd.png",
    "http://blay09.net/bot/smug/aYk5Zcl.png",
    "http://blay09.net/bot/smug/H0hO45V.jpg",
    "http://blay09.net/bot/smug/Ljip3Cu.gif",
    "http://blay09.net/bot/smug/QhZJwqz.jpg",
    "http://blay09.net/bot/smug/vjVHwES.jpg",
    "http://blay09.net/bot/smug/1DwWBhd.gif",
    "http://blay09.net/bot/smug/B12ygAI.gif",
    "http://blay09.net/bot/smug/hkAsD7z.gif",
    "http://blay09.net/bot/smug/lkHoDZz.jpg",
    "http://blay09.net/bot/smug/QNpVZ51.jpg",
    "http://blay09.net/bot/smug/vpyC7sS.png",
    "http://blay09.net/bot/smug/1FdFymA.png",
    "http://blay09.net/bot/smug/B7iytc2.png",
    "http://blay09.net/bot/smug/HmHMM0A.jpg",
    "http://blay09.net/bot/smug/LLLheuc.jpg",
    "http://blay09.net/bot/smug/QpnpxDA.png",
    "http://blay09.net/bot/smug/vW2gFWC.png",
    "http://blay09.net/bot/smug/1NwOrae.jpg",
    "http://blay09.net/bot/smug/B8cG7to.jpg",
    "http://blay09.net/bot/smug/HMnK3mo.png",
    "http://blay09.net/bot/smug/lmgficj.jpg",
    "http://blay09.net/bot/smug/Qqt304z.png",
    "http://blay09.net/bot/smug/WcJU0aG.png",
    "http://blay09.net/bot/smug/24L2y87.jpg",
    "http://blay09.net/bot/smug/bEz7DjN.jpg",
    "http://blay09.net/bot/smug/hmpwHhJ.png",
    "http://blay09.net/bot/smug/LOSmtGy.jpg",
    "http://blay09.net/bot/smug/QZmbOoz.png",
    "http://blay09.net/bot/smug/wkcJiu9.png",
    "http://blay09.net/bot/smug/2dMpJRX.jpg",
    "http://blay09.net/bot/smug/BGu13lY.png",
    "http://blay09.net/bot/smug/Hr8oGSp.jpg",
    "http://blay09.net/bot/smug/lU09gJI.jpg",
    "http://blay09.net/bot/smug/RaJzOhD.png",
    "http://blay09.net/bot/smug/wOkvZyD.jpg",
    "http://blay09.net/bot/smug/3b34TRP.jpg",
    "http://blay09.net/bot/smug/Bk7ZBf3.jpg",
    "http://blay09.net/bot/smug/hRfzpew.png",
    "http://blay09.net/bot/smug/m92Y7cb.jpg",
    "http://blay09.net/bot/smug/RH1bCe5.jpg",
    "http://blay09.net/bot/smug/wYRpVKH.png",
    "http://blay09.net/bot/smug/3h7JfoQ.jpg",
    "http://blay09.net/bot/smug/Bp64bAy.jpg",
    "http://blay09.net/bot/smug/htJQ5Qp.jpg",
    "http://blay09.net/bot/smug/McqjsjO.png",
    "http://blay09.net/bot/smug/rTSv8pA.jpg",
    "http://blay09.net/bot/smug/x1W3LdH.jpg",
    "http://blay09.net/bot/smug/3KLKdrS.png",
    "http://blay09.net/bot/smug/cabdrcX.jpg",
    "http://blay09.net/bot/smug/hXwryHD.jpg",
    "http://blay09.net/bot/smug/MKLaCvJ.png",
    "http://blay09.net/bot/smug/rvTn0WK.jpg",
    "http://blay09.net/bot/smug/X3dZmnJ.png",
    "http://blay09.net/bot/smug/3QS5nfl.jpg",
    "http://blay09.net/bot/smug/CE1Y3Ls.png",
    "http://blay09.net/bot/smug/I27FBcK.jpg",
    "http://blay09.net/bot/smug/MlkWOE1.jpg",
    "http://blay09.net/bot/smug/RwHIxxx.jpg",
    "http://blay09.net/bot/smug/X5ALdid.jpg",
    "http://blay09.net/bot/smug/3wsioNP.png",
    "http://blay09.net/bot/smug/CeCdGki.png",
    "http://blay09.net/bot/smug/I2AvoRa.png",
    "http://blay09.net/bot/smug/mNawysV.jpg",
    "http://blay09.net/bot/smug/RZWJJzS.jpg",
    "http://blay09.net/bot/smug/X7h7mmD.jpg",
    "http://blay09.net/bot/smug/47F0oEV.png",
    "http://blay09.net/bot/smug/CfqHYKa.jpg",
    "http://blay09.net/bot/smug/IF3l3m6.jpg",
    "http://blay09.net/bot/smug/mNSfzz5.jpg",
    "http://blay09.net/bot/smug/sa708sN.jpg",
    "http://blay09.net/bot/smug/XbuetkB.png",
    "http://blay09.net/bot/smug/4SilaeD.png",
    "http://blay09.net/bot/smug/CLhXSY9.png",
    "http://blay09.net/bot/smug/IHu7ngj.png",
    "http://blay09.net/bot/smug/MOOSO5t.gif",
    "http://blay09.net/bot/smug/sfLmg8U.jpg",
    "http://blay09.net/bot/smug/XcySO0I.gif",
    "http://blay09.net/bot/smug/4uLi2Ll.jpg",
    "http://blay09.net/bot/smug/D2wqtCY.jpg",
    "http://blay09.net/bot/smug/IICYxmo.jpg",
    "http://blay09.net/bot/smug/MwnUYDV.png",
    "http://blay09.net/bot/smug/SVW04G8.jpg",
    "http://blay09.net/bot/smug/XhNsoQM.png",
    "http://blay09.net/bot/smug/5fBniuf.jpg",
    "http://blay09.net/bot/smug/DcpLXcM.png",
    "http://blay09.net/bot/smug/iJJAPyI.png",
    "http://blay09.net/bot/smug/MZB4UKd.jpg",
    "http://blay09.net/bot/smug/Sz4YAKz.png",
    "http://blay09.net/bot/smug/XmlzHQ9.png",
    "http://blay09.net/bot/smug/5kaLQB4.png",
    "http://blay09.net/bot/smug/dslFV1l.png",
    "http://blay09.net/bot/smug/ImFBrbQ.jpg",
    "http://blay09.net/bot/smug/mZkrUyf.png",
    "http://blay09.net/bot/smug/TBP5VIZ.jpg",
    "http://blay09.net/bot/smug/XNGhEn1.jpg",
    "http://blay09.net/bot/smug/61iLHcw.jpg",
    "http://blay09.net/bot/smug/egYSqHC.jpg",
    "http://blay09.net/bot/smug/ioZRrMb.jpg",
    "http://blay09.net/bot/smug/N6goo1B.jpg",
    "http://blay09.net/bot/smug/tffVgKx.jpg",
    "http://blay09.net/bot/smug/Y0dawg6.png",
    "http://blay09.net/bot/smug/6gi3Joz.png",
    "http://blay09.net/bot/smug/ehJ4JRq.jpg",
    "http://blay09.net/bot/smug/irJGN1p.jpg",
    "http://blay09.net/bot/smug/NhHR3qA.png",
    "http://blay09.net/bot/smug/TFPfXEg.png",
    "http://blay09.net/bot/smug/y5kCUm0.jpg",
    "http://blay09.net/bot/smug/6s0NLjM.gif",
    "http://blay09.net/bot/smug/eJJbOTx.png",
    "http://blay09.net/bot/smug/isF7gaO.png",
    "http://blay09.net/bot/smug/NhqdMwV.jpg",
    "http://blay09.net/bot/smug/TfWC51R.jpg",
    "http://blay09.net/bot/smug/Y9Pi9Gk.jpg",
    "http://blay09.net/bot/smug/6trN3KJ.jpg",
    "http://blay09.net/bot/smug/ejYBSuz.jpg",
    "http://blay09.net/bot/smug/iYOxmlB.jpg",
    "http://blay09.net/bot/smug/NJE9LGO.jpg",
    "http://blay09.net/bot/smug/tLUGYoZ.jpg",
    "http://blay09.net/bot/smug/YbxLRN8.png",
    "http://blay09.net/bot/smug/7do458A.gif",
    "http://blay09.net/bot/smug/EKWhTq8.jpg",
    "http://blay09.net/bot/smug/iZv0piE.png",
    "http://blay09.net/bot/smug/npiDczL.png",
    "http://blay09.net/bot/smug/TmWBzKM.jpg",
    "http://blay09.net/bot/smug/YeeWlov.png",
    "http://blay09.net/bot/smug/7fJPszh.jpg",
    "http://blay09.net/bot/smug/ENd9d4X.jpg",
    "http://blay09.net/bot/smug/j1Q6cNh.jpg",
    "http://blay09.net/bot/smug/NRBW1t8.jpg",
    "http://blay09.net/bot/smug/Toi6Fnq.jpg",
    "http://blay09.net/bot/smug/yGIr5Wr.jpg",
    "http://blay09.net/bot/smug/7Y1Vohu.png",
    "http://blay09.net/bot/smug/EXyiszm.jpg",
    "http://blay09.net/bot/smug/Jayz3iP.jpg",
    "http://blay09.net/bot/smug/nRUq6fu.jpg",
    "http://blay09.net/bot/smug/tpE7bwH.png",
    "http://blay09.net/bot/smug/YM5RSMc.png",
    "http://blay09.net/bot/smug/8hU4A9d.jpg",
    "http://blay09.net/bot/smug/F7nlTSM.jpg",
    "http://blay09.net/bot/smug/JCaB4WJ.png",
    "http://blay09.net/bot/smug/nUuyrb8.png",
    "http://blay09.net/bot/smug/ty6ZXVn.png",
    "http://blay09.net/bot/smug/ypWbF9K.png",
    "http://blay09.net/bot/smug/8mQdUMW.jpg",
    "http://blay09.net/bot/smug/Fj9F29x.png",
    "http://blay09.net/bot/smug/JIH29iL.png",
    "http://blay09.net/bot/smug/Nv5QWEy.jpg",
    "http://blay09.net/bot/smug/u2LfaGI.jpg",
    "http://blay09.net/bot/smug/yspEAI9.gif",
    "http://blay09.net/bot/smug/8P6W6Qm.jpg",
    "http://blay09.net/bot/smug/fJCCvff.png",
    "http://blay09.net/bot/smug/jzbcgzr.jpg",
    "http://blay09.net/bot/smug/oAaCv1A.png",
    "http://blay09.net/bot/smug/UabOGp9.png",
    "http://blay09.net/bot/smug/ytL5W9v.jpg",
    "http://blay09.net/bot/smug/8qscmwY.jpg",
    "http://blay09.net/bot/smug/fjEUhrK.jpg",
    "http://blay09.net/bot/smug/kEuvF6k.png",
    "http://blay09.net/bot/smug/oAeGHIy.jpg",
    "http://blay09.net/bot/smug/uAhFCnr.png",
    "http://blay09.net/bot/smug/YZM9PuO.jpg",
    "http://blay09.net/bot/smug/90rkFx4.jpg",
    "http://blay09.net/bot/smug/FQlfY1j.jpg",
    "http://blay09.net/bot/smug/KFeQqoi.jpg",
    "http://blay09.net/bot/smug/OcilrVf.jpg",
    "http://blay09.net/bot/smug/uARKmqG.jpg",
    "http://blay09.net/bot/smug/Z1U8fP6.jpg",
    "http://blay09.net/bot/smug/9rEt6Z9.jpg",
    "http://blay09.net/bot/smug/frbIyRs.jpg",
    "http://blay09.net/bot/smug/KJz2FNO.jpg",
    "http://blay09.net/bot/smug/OTpUW9E.gif",
    "http://blay09.net/bot/smug/UC3bXpC.png",
    "http://blay09.net/bot/smug/z6nSDtj.jpg",
    "http://blay09.net/bot/smug/A3t0b0N.jpg",
    "http://blay09.net/bot/smug/frVcDVw.jpg",
    "http://blay09.net/bot/smug/kKomXDd.png",
    "http://blay09.net/bot/smug/owNlFap.png",
    "http://blay09.net/bot/smug/uekSFxN.png",
    "http://blay09.net/bot/smug/z7u4gJc.jpg",
    "http://blay09.net/bot/smug/a9h13LU.jpg",
    "http://blay09.net/bot/smug/FumTF3e.jpg",
    "http://blay09.net/bot/smug/Kpkt8og.jpg",
    "http://blay09.net/bot/smug/oXqxz1E.jpg",
    "http://blay09.net/bot/smug/UGaPaEl.jpg",
    "http://blay09.net/bot/smug/z9b28zI.jpg",
    "http://blay09.net/bot/smug/aCwFSAW.png",
    "http://blay09.net/bot/smug/FWXzoWp.jpg",
    "http://blay09.net/bot/smug/ks5Sx85.png",
    "http://blay09.net/bot/smug/PAWj8tL.jpg",
    "http://blay09.net/bot/smug/ULkpcCy.png",
    "http://blay09.net/bot/smug/ZadImIr.jpg",
    "http://blay09.net/bot/smug/aFhY37H.jpg",
    "http://blay09.net/bot/smug/G4a4yLS.png",
    "http://blay09.net/bot/smug/l0wjGUE.jpg",
    "http://blay09.net/bot/smug/pDHMOoE.jpg",
    "http://blay09.net/bot/smug/upsiKcd.png",
    "http://blay09.net/bot/smug/zb8b2YA.png",
    "http://blay09.net/bot/smug/AHCiVvj.png",
    "http://blay09.net/bot/smug/G9tEoeH.jpg",
    "http://blay09.net/bot/smug/l7ShF6A.png",
    "http://blay09.net/bot/smug/pKdX4tf.jpg",
    "http://blay09.net/bot/smug/UQLPkFh.jpg",
    "http://blay09.net/bot/smug/Zp1w9hb.jpg",
    "http://blay09.net/bot/smug/ALtfa7O.gif",
    "http://blay09.net/bot/smug/Le4T3Qk.png",
    "http://blay09.net/bot/smug/pMpllNS.jpg",
    "http://blay09.net/bot/smug/uVedGYt.jpg",
    "http://blay09.net/bot/smug/zS01A2U.png",
    "http://blay09.net/bot/smug/ardP97K.jpg",
    "http://blay09.net/bot/smug/gho0F2Y.gif",
    "http://blay09.net/bot/smug/Le9T40z.png",
    "http://blay09.net/bot/smug/qg0ihjY.jpg",
    "http://blay09.net/bot/smug/V5g7Wxh.gif",
    "http://blay09.net/bot/smug/ZUUb6sv.jpg"
];

/**
 * @param channel : JChannel
 * @param user : JUser
 * @param args : [string]
 * @returns {string}
 */
function smug(channel, user, args) {
    return m_smugFaces[Math.floor(Math.random() * m_smugFaces.length)];
}