/*! wp-bookmarks - v0.1.0 - 2014-03-17
 * 
 * Copyright (c) 2014; * Licensed GPLv2+ */
$(function() {
    var options = {
        bookmarks_source: './sample.json',
        tmpl_path: 'tmpls/',
        tmpl_cache: true,
    };

    // var wp_bookmarks = $('#wp-bookmarks').wp_bookmarks(options);
});

$(function() {

    var defaults = {
        // Source of bookmarks data.
        bookmarks_source: '/api/get_posts/?post_type=wp_bookmarks',
        // Path to templates (relative or absolute), end with slash at the end
        tmpl_path: 'tmpls/',
        tmpl_cache: true,
    };

});
