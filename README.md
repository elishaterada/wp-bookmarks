# WP Bookmarks #

WP Bookmarks is a single-page web app interface which provides simple and fast UI to search and display bookmark collection from JSON feed. The JSON feed format is designed to work with [REST API](http://developer.wordpress.com/docs/api/) plugin for WordPress but not limited to any API server which can provide the feed in the same format.

## Install ##

### WP Bookmarks for WordPress ###

* Download the latest release.
* Copy the files from /dist/ folder to a new folder /wp-bookmarks/ inside your WordPress child theme (recommended)
* Include JavaScript file and CSS file in your child theme with (wp_enqueue_scripts](http://codex.wordpress.org/Plugin_API/Action_Reference/wp_enqueue_scripts)

### Dependencies ###

WP Bookmarks depends on following:

* A custom post type for bookmarks (or use /wordpress/bookmark-post-type.php )
* Custom fields for the bookmarks (or use /wordpress/bookmark-custom-fields.php)
* jQuery
* [Underscore.js](http://underscorejs.org/)
* [Bootstrap 3](http://getbootstrap.com/)
