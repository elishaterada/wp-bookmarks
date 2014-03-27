this["JST"] = this["JST"] || {};

this["JST"]["tmpls/bookmark.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(posts, function(p) { ;
__p += '\n<li class="bookmark">\n    <a class="bookmark-link" href="//' +
((__t = ( p.custom_fields.link )) == null ? '' : __t) +
'" title="' +
((__t = ( p.title )) == null ? '' : __t) +
'" target="_blank"></a>\n    <div class="thumb" style="background-image: url(\'http://api.snapito.com/free/sc/' +
((__t = ( p.custom_fields.link )) == null ? '' : __t) +
'\');"></div>\n    <div class="details">\n        <div class="title">' +
((__t = ( p.title )) == null ? '' : __t) +
'</div>\n        <div class="tags category">\n            ';
 _.each(p.taxonomy_categories, function(t) {
                print('#' + t.title + ' ')
            }); ;
__p += '\n        </div>\n        <div class="tags location">\n            ';
 _.each(p.taxonomy_city, function(t) {
                print('#' + t.title + ' ')
            }); ;
__p += '\n        </div>\n    </div>\n</li>\n';
 }); ;
__p += '\n';

}
return __p
};