/*global window, $:false, console:false, window:false, List:false; */

function createTemplate(templatePath, bookmarksData) {
    var templateString = window.JST[templatePath](bookmarksData);
    return templateString;
}

function getBookmarksData() {
    var bookmarksData = '';
    // For WordPress JSON API plugin, add this at the end of URL for better JSON output
    // var optionQueryParam = '&count=1000&exclude=status,type,author,title_plain,date,modified,categories,tags,comments,attachments,comment_count,comment_status';
    $.ajax({
        url: '/sample/sample.json',
        dataType: 'json',
        type: 'GET',
        async: false,
        cache: false
        }).done(function(data) {
            bookmarksData = data;
    });
    return bookmarksData;
}

function searchBookmarksData(bookmarksID) {
    var options = {
        valueNames: ['title', 'tags']
    };
    var bookmarkList = new List(bookmarksID, options);
}

$(function() {

    var bookmarksID = 'wp-bookmarks';

    // Query bookmark data and display
    var bookmarksData = getBookmarksData();
    var templatePath = 'tmpls/bookmark.html';
    var bookmarks = createTemplate(templatePath, bookmarksData);
    $('#' + bookmarksID + ' .list').html(bookmarks);

    // Bind list.js search to the bookmark data
    searchBookmarksData(bookmarksID);

});
