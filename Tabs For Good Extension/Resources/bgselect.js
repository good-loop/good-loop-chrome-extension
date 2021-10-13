var bgImgs = 9;
var bg = "/images/bg" + (Math.round(Math.random() * bgImgs) + 1) + ".jpg";
document.getElementById("bg").style.background = "url(" + bg + ")";
// Was overriden when putting in statically for some reason
document.getElementById("bg").style.backgroundSize = "cover";
