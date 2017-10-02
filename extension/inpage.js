
// TODO
// turn annoying verts into opt-in GL verts

var SDLOGTAG = "sodash-plugin";
// NB: twitter.com disables console!
console.log(SDLOGTAG, "Chrome script: "+window.location);

function dealWithVerts() {
	console.log(SDLOGTAG, "...dealWithVerts...");
	//not for Twitter itself or Sodash
	let spans = $('span:contains(Suggested Post)');
	if ( ! spans.length) return;
	console.log(SDLOGTAG, "spans", spans);
	let articles = spans.closest('div[role=article]');
	console.log(SDLOGTAG, "articles", articles);
	articles.hide();
	// articles.css({"background-color": "red", "border": "3px solid green"});
};

const here = ""+window.location;
if (here.match(/facebook\.com/)) {
	setInterval(dealWithVerts, 1000);
}

