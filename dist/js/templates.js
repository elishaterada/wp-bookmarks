this["JST"] = this["JST"] || {};

this["JST"]["tmpls/bookmark.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(posts, function(p) { ;
__p += '\n<li class="bookmark">\n    <a class="bookmark-link" href="' +
((__t = ( p.custom_fields.link )) == null ? '' : __t) +
'" title="' +
((__t = ( p.title )) == null ? '' : __t) +
'" target="_blank"></a>\n    <div class="thumb" style="background-image: url(\'http://api.page2images.com/directlink?p2i_url=' +
((__t = ( p.custom_fields.link )) == null ? '' : __t) +
'&p2i_device=6&p2i_screen=1200x900&p2i_size=200x150&p2i_imageformat=jpg&p2i_key=474e8a190fd33912\');"> </div>\n    <div class="details">\n        <strong class="title">' +
((__t = ( p.title )) == null ? '' : __t) +
'</strong>\n        <div class="tags">\n            ';
 _.each(p.taxonomy_categories, function(t) { ;
__p += '\n            <span class="tag">\n                <a class="' +
((__t = ( t.slug )) == null ? '' : __t) +
'">#' +
((__t = ( t.title )) == null ? '' : __t) +
'</a>\n            </span>\n            ';
 }); ;
__p += '\n            ';
 _.each(p.taxonomy_city, function(t) { ;
__p += '\n            <span class="tag">\n                <a class="' +
((__t = ( t.slug )) == null ? '' : __t) +
'">#' +
((__t = ( t.title )) == null ? '' : __t) +
'</a>\n            </span>\n            ';
 }); ;
__p += '\n        </div>\n    </div>\n</li>\n';
 }); ;
__p += '\n';

}
return __p
};