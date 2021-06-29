function build(document, tag, id) {
    const api = window?.twttr || {};
    if (document.getElementById(id)) return api;
    const scriptElement = document.createElement(tag);
    scriptElement.id = id;
    scriptElement.src = "https://platform.twitter.com/widgets.js";
    const firstScriptElement = document.getElementsByTagName(tag)[0];
    firstScriptElement.parentNode.insertBefore(scriptElement, firstScriptElement);

    api._e = [];
    api.ready = function(f) {
        api._e.push(f);
    };

    return api;
}

export default async function loadTwttr() {
    const api = build(document, "script", "twitter-wjs");
    return new Promise(resolve => {
        api.ready(resolve.bind(null, api));
    })
}