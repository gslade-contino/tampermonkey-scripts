// ==UserScript==
// @name         Fix Office Navigation
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Fix apps navigation to see all labels
// @author       Gareth Slade
// @match        https://www.office.com/*
// @grant        none
// @downloadURL	 https://github.com/gslade-contino/tampermonkey-scripts/raw/main/fix-office-nav.user.js
// ==/UserScript==

window.onload = function() {
    let allAppsButton = document.querySelector('#O365_MainLink_NavMenu');
    let observer = new MutationObserver(callback);
    let observerOptions = {
        childList: true,
        attributes: true,
        characterData: false,
        subtree: true
    };


    function callback (mutations) {
        const elems = document.querySelectorAll('._1LmT2pyh06k_FxmBeyjKZG');

        for (var i = 0; i < elems.length; i++) {
            elems[i].setAttribute("style", "width: 100% !important");
        };
    }

    observer.observe(allAppsButton, observerOptions);
};
