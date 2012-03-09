// ==UserScript==
// @name          Instapaper Vollkorn
// @namespace     http://www.philippcomans.de/userscripts
// @description   Changes Georgia to Vollkorn on Instapaper
// @match         http://www.instapaper.com/read/*
// @match         https://www.instapaper.com/read/*
// @match         http://www.instapaper.com/text?*
// @match         https://www.instapaper.com/text?*
// ==/UserScript==

(function() {
  var head = document.getElementsByTagName('head')[0];
  var wf = document.createElement('link');
  wf.href = 'http://fonts.googleapis.com/css?family=Vollkorn:400italic,700italic,400,700';
  wf.rel = 'stylesheet';
  wf.type = 'text/css';
  head.appendChild(wf);
  var divCollection = document.getElementsByTagName("div");
  for (var i=0; i<divCollection.length; i++) {
    if(divCollection[i].getAttribute("class") == "button georgiamodebutton") {
        var button = divCollection[i].children[0];
        button.textContent = 'Vollkorn';
        button.style = 'font-family: Vollkorn; font-size: 14px; vertical-align: 2px;';
    }
  }
  
})();

GM_addStyle("body.georgiamode #titlebar h1, body.georgiamode #story, body.georgiamode .popover { font-family: Vollkorn, Times, serif; !important }");