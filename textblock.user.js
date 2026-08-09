// ==UserScript==
// @name        namu.wiki adblock text
// @namespace   https://github.com/cmanixli/namuAdblock
// @homepageURL  https://github.com/cmanixli/namuAdblock
// @updateURL    https://cdn.jsdelivr.net/gh/cmanixli/namuAdblock/textblock.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/cmanixli/namuAdblock/textblock.user.js
// @icon        https://namu.wiki/favicon.svg
// @version     0.1.0
//
// @match       https://namu.wiki/*
// @grant       none
//
// @author      Cmalu Nixli
// @description  광고 텍스트를 사용한 차단
// ==/UserScript==
(function () {
/*  const targetTexts = [
    'coupang',
    'map.naver.com',
    'www.대출시티.com',
    'www.대출허브.com',
    'smartstore.naver.com',
    'www.edups.co.kr',
    'www.airklass.com',
    'www.iscu.ac.kr',
    'money4u.kr',
    'rent-official.co.kr',
    'bnk.carbay.kr',
    'www.isecconference.org',
    'kr.splashtop.com'.
    'www.namuvpn.com',
  ];*/
  const targetTexts = ['.com', '.net', '.kr', '.org', '.io']; // 광고 테이블이 아닌 일반 테이블 내부에 url 존재할 경우 오류 발생 가능할듯?

  function isAd(table) {
    const text = table.textContent || '';
    return targetTexts.some(t => text.includes(t))
  }

  function removeMatchingTables() {
    const tables = Array.from(document.querySelectorAll('table'));
    for (const table of tables) {
      if (isAd(table)) {
        table.parentElement.remove();
      }
    }
  }

  removeMatchingTables();

  new MutationObserver(removeMatchingTables).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
