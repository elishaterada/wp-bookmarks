this["JST"] = this["JST"] || {};

this["JST"]["tmpls/bookmark.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul>\n';
 _.each(posts, function(p) { ;
__p += '\n\n<li>' +
((__t = ( p.title )) == null ? '' : __t) +
'</li>\n\n';
 }); ;
__p += '\n</ul>\n';

}
return __p
};