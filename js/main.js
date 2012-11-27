var browserscopeURL = "http://www.browserscope.org/user/tests/table/agt1YS1wcm9maWxlcnINCxIEVGVzdBjE1cARDA?o=json&v=";
var currentBrowserChoice = "browsers-major";
var browserscopeV = browserScopeVersionTranslate(currentBrowserChoice);
var bscope_results;

var exclusions_browserscopeURL = "http://www.browserscope.org/user/tests/table/agt1YS1wcm9maWxlcnINCxIEVGVzdBi95eUSDA?o=json&v=";

Reveal.addEventListener('cssregions-result-slide', function() {
    getData(browserscopeV);
});

Reveal.addEventListener('cssexclusions-result-slide', function() {
    getExclusionData(browserscopeV);
});

function getData(version) {
    $.ajax({
        url: browserscopeURL + version, 
        cache: false,
        crossDomain: true,
        dataType: "jsonp"}
    ).done(getDataHandler);
}

/* Being lazy, need to wrap this into one function */

function getExclusionData(version) {
    $.ajax({
        url: exclusions_browserscopeURL + version, 
        cache: false,
        crossDomain: true,
        dataType: "jsonp"}
    ).done(getExclusionDataHandler);
}


function getDataHandler(result) {
    console.log(result);
    bscope_results = massageTestResults(result);
    drawTable(bscope_results);
}


function getExclusionDataHandler(result) {
    console.log(result);
    bscope_results = massageTestResults(result);
    drawExclusionsTable(bscope_results);
}