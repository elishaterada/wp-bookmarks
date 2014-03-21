<?php

// Initialize wp_bookmarks
add_action('init', 'wp_bookmarks_posts_init');

function wp_bookmarks_posts_init() {

    // Register wp_bookmakrs custom post type

    $labels = array(
        'name'               => 'Bookmarks',
        'singular_name'      => 'Bookmark',
        'menu_name'          => 'WP Bookmarks'
    );

    $args = array(
        'labels'             => $labels,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'rewrite'            => array( 'slug' => 'bookmarks' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'excerpt' )
    );

    register_post_type('wp_bookmarks', $args);

    // Register custom taxonomy for wp_bookmakrs custom post

    $labels = array(
        'name'               => 'Categories',
        'singular_name'      => 'Category',
        'menu_name'          => 'Categories'
    );

    $args = array(
        'labels'             => $labels,
        'rewrite'            => array( 'slug' => 'restaurant-category' ),
        'hierarchical'       => true,
    );

    register_taxonomy( 'categories', 'wp_bookmarks', $args );

    $labels = array(
        'name'               => 'City',
        'singular_name'      => 'City',
        'menu_name'          => 'City'
    );

    $args = array(
        'labels'             => $labels,
        'rewrite'            => array( 'slug' => 'restaurant-city' ),
        'hierarchical'       => true,
    );

    register_taxonomy( 'city', 'wp_bookmarks', $args );

}
