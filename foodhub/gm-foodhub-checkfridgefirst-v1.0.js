// ==UserScript==
// @name         gm-fooodhub-checkfridgefirst-banner
// @namespace    https://foodhub.co.uk/
// @version      1.0
// @description  Remember to go and check the fridge before ordering food!
// @author       richard.forth@gmail.com
// @match        https://foodhub.co.uk/*
// @grant        none
// ==/UserScript==

var banner = document.createElement("div");
banner.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
    'border-bottom: 1px solid #ff0000; margin-bottom: 5px; ' +
    'font-size: small; background-color: lightyellow; ' +
    'color: #000000; text-align: center;"><p style="margin: 2px 0 1px 0;"> ' +
    'A message brought to you by Greasemonkey:<br /><strong>Remember to go and check the fridge before ordering food!</strong>' +
    '</p></div>';
document.body.insertBefore(banner, document.body.firstChild);
