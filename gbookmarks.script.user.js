// ==UserScript==
// @name Google Bookmarks Improvements
// @namespace http://example.com/
// @description Makes google bookmarks bookmarklet popup highlight current selection and makes enter key submit
// @match https://www.google.com/bookmarks/mark*
// @version 1.0
// ==/UserScript==

// Emulate Greasemonkey's unsafeWindow in Chrome
window.unsafeWindow = window.unsafeWindow || (function() {
    var el = document.createElement('p');
    el.setAttribute('onclick', 'return window');
    return el.onclick();
})();

// Inject JavaScript onto the page
function exec(fn) {
    var script = document.createElement('script');
    script.textContent = '(' + fn + ')();';
    document.head.appendChild(script);
}

// Include external JS/CSS file onto the page
function include(url, type) {
    type = (type || url.split('.').pop()).toLowerCase();

    if (type === 'css') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    } else if (type === 'js') {
        var script = document.createElement('script');
        script.src = url;
        script.async = false;
        document.head.appendChild(script);
    } else {
        throw new Error('Failed to include ' + url + ' due to unknown file type.');
    }
}

// Executes function asynchronously
function async(fn) {
    setTimeout(fn, 0);
}

if (typeof jQuery == 'undefined') {
  include('https://code.jquery.com/jquery-2.1.3.min.js', 'js');
}
include('https://raw.githubusercontent.com/mikedfunk/gbookmarks-userscript/master/gbookmarks.js', 'js');
include('https://raw.githubusercontent.com/mikedfunk/gbookmarks-userscript/master/gbookmarks.css', 'css');
