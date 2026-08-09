// ==UserScript==
// @name        namu.wiki adblock img
// @namespace   https://github.com/cmanixli/namuAdblock
// @homepageURL  https://github.com/cmanixli/namuAdblock
// @updateURL    https://cdn.jsdelivr.net/gh/cmanixli/namuAdblock/imgblock.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/cmanixli/namuAdblock/imgblock.user.js
// @icon        https://namu.wiki/favicon.svg
// @version     0.1.0
//
// @match       https://namu.wiki/*
// @grant       none
//
// @author      Cmalu Nixli
// @description  광고 이미지를 사용한 차단
// ==/UserScript==

(function () {
  const targetSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+';

  function removeMatchingTables() {
    document.querySelectorAll(`img[src="${CSS.escape(targetSrc)}"]`).forEach(img => {
      const table = img.closest('table');
      if (table) table.parentElement.remove();
    });
  }

  removeMatchingTables();

  new MutationObserver(removeMatchingTables).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
