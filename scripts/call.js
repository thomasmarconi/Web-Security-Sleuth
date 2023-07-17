chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentURL = tabs[0].url;
    currentURL = currentURL.replace(/^https?:\/\//i, ''); //gets rid of protocol
    currentURL = currentURL.replace(/\/$/, ''); //gets rid of trailing slash
    callApi(currentURL);
});

function callApi(url){
    const WEBSITE_URL = 'https://http-observatory.security.mozilla.org/api/v1/analyze?host='+url;

    fetch(WEBSITE_URL, {
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
}
