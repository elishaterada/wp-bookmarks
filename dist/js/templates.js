this["JST"] = this["JST"] || {};

this["JST"]["tmpls/bookmark.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="bookmarks">\n    ';
 _.each(posts, function(p) { ;
__p += '\n    <li class="bookmark">\n        <a class="bookmark-link" href="' +
((__t = ( p.custom_fields.link )) == null ? '' : __t) +
'" title="' +
((__t = ( p.title )) == null ? '' : __t) +
'" target="_blank"></a>\n        <div class="thumb"></div>\n        <div class="details">\n            <strong>' +
((__t = ( p.title )) == null ? '' : __t) +
'</strong>\n            <div class="tag-links">\n                ';
 _.each(p.taxonomy_wp_bookmarks_categories, function(t) { ;
__p += '\n                <span class="tag">\n                    <a class="' +
((__t = ( t.slug )) == null ? '' : __t) +
'">' +
((__t = ( t.title )) == null ? '' : __t) +
'</a>\n                </span>\n                ';
 }); ;
__p += '\n            </div>\n        </div>\n    </li>\n    ';
 }); ;
__p += '\n</ul>\n';

}
return __p
};