# WP Bookmarks #

WP Bookmarks is a single-page web app interface which provides simple and fast UI to search and display bookmark collection from JSON feed. The JSON feed format is designed to work with [REST API](http://developer.wordpress.com/docs/api/) plugin for WordPress but can be used with any API server which can provide the feed in the same format.

## Install ##

### Prepare JSON feed ###

* If you already have a JSON API server running, simply create another feed which mimics the format the program is looking for. You can find sample JSON file in */sample/sample.json*

* If you don't have an API server and wish to use WordPress as a back-end platform to generate JSON feed, install [Advanced Custom Fields](http://wordpress.org/plugins/advanced-custom-fields/) and [JSON API](http://wordpress.org/plugins/json-api/) plugin.

* Include */wordpress/register-custom-post-type.php* in your child-theme template, and import */wordpress/advanced-custom-field-export.xml* via [WordPress Importer](http://wordpress.org/plugins/wordpress-importer/).

* Now create some bookmarks in WP Bookmarks custom posts section, and visit */api/get_posts/?post_type=wp_bookmarks* relative to your domain to see if the feed is working as expected.

### Include WP Bookmarks script ###

* Download the latest release.
* Copy the files from /dist/ folder to a new folder /wp-bookmarks/ inside your WordPress child theme (recommended)
* Include JavaScript and CSS files from /dist/ in your child theme with [wp_enqueue_scripts](http://codex.wordpress.org/Plugin_API/Action_Reference/wp_enqueue_scripts)

### Dependencies ###

WP Bookmarks depends on following:

* A custom post type for bookmarks (or use */wordpress/register-custom-post-type.php*)
* Custom fields for the bookmarks via Advanced Custom Fields plugin (import */wordpress/advanced-custom-field-export.xml*)
* jQuery
* [Underscore.js](http://underscorejs.org/)
* [Bootstrap 3](http://getbootstrap.com/)
