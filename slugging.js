function slug (text) {
    var separator = /[^a-z0-9]+/ig;
    var drop = /^-|-$/g;
    return text
        .replace(separator, '-')
        .replace(drop, '')
        .toLowerCase();
}

function stamp(date){
	return slug(date.toDateString());
}

var post = {
	title: 'Dodgers are awesome',
	date: new Date()
};

var _slug = slug(post.title);
var time = stamp(post.date);
var url = '/' + time + '/' + _slug;

console.log(url);