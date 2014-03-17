<?php

// Initialize wp_bookmarks
add_action('init', 'wp_bookmarks_posts_init');

function wp_bookmarks_posts_init() {

    // Register wp_bookmakrs custom post type

    $labels = array(
        'name'               => 'Bookmarks',
        'singular_name'      => 'Bookmark',
        'add_new'            => 'Add New Bookmark',
        'add_new_item'       => 'Add New Bookmark',
        'edit_item'          => 'Edit Bookmark',
        'new_item'           => 'New Bookmark',
        'all_items'          => 'All Bookmarks',
        'view_item'          => 'View Bookmark',
        'search_items'       => 'Search Bookmarks',
        'not_found'          => 'No Bookmarks found',
        'not_found_in_trash' => 'No Bookmarks found in Trash',
        'parent_item_colon'  => '',
        'menu_name'          => 'WP Bookmarks'
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'bookmarks' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'excerpt' )
    );

    register_post_type('wp_bookmarks', $args);

    // Register custom taxonomy for wp_bookmakrs custom post

    $labels = array(
        'name'               => 'Bookmark Categories',
        'singular_name'      => 'Bookmark Category',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Bookmark Category',
        'edit_item'          => 'Edit Bookmark Category',
        'new_item'           => 'New Bookmark Category',
        'all_items'          => 'All Bookmark Categories',
        'view_item'          => 'View Bookmark Category',
        'search_items'       => 'Search Bookmark Categories',
        'not_found'          => 'No Bookmark Categories found',
        'not_found_in_trash' => 'No Bookmark Categories found in Trash',
        'parent_item_colon'  => '',
        'menu_name'          => 'Bookmark Categories'
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'wp-bookmark-category' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => true,
        'menu_position'      => null,
        'supports'           => array()
    );

    register_taxonomy( 'wp_bookmarks_categories', 'wp_bookmarks', $args );

}
