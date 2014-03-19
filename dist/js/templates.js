this["JST"] = this["JST"] || {};

this["JST"]["tmpls/bookmark.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="bookmarks">\n    ';
 _.each(posts, function(p) { ;
__p += '\n    <li class="bookmark">\n        <a class="bookmark-link" href="" title="' +
((__t = ( p.title )) == null ? '' : __t) +
'"></a>\n        <div class="thumb"></div>\n        <div class="details">\n            <strong>' +
((__t = ( p.title )) == null ? '' : __t) +
'</strong>\n        </div>\n    </li>\n    ';
 }); ;
__p += '\n</ul>\n';

}
return __p
};