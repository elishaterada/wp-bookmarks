/*! wp-bookmarks - v0.1.0 - 2014-03-17
 * 
 * Copyright (c) 2014; * Licensed GPLv2+ */
function createTemplate(templatePath, bookmarksData) {
    var templateString = window.JST[templatePath](bookmarksData);
    return templateString;
}

function getBookmarksData() {
    var bookmarksData = '';
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

$(function() {

    var bookmarksData = getBookmarksData();
    var templatePath = 'tmpls/bookmark.html';
    var bookmarks = createTemplate(templatePath, bookmarksData);

    $('#wp-bookmarks').html(bookmarks);

});
