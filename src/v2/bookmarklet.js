javascript:(function(w,d,a,s){s=d.createElement("script");s.type="text/javascript";s.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";s.onload=s.onreadystatechange=function(){let note = prompt("Add a note","");console.log(note);if ( ! note) return;note += " "+window.location;let u = "https://calstat.good-loop.com/task/n"+Math.floor(Math.random()*1000000)+".json";$.ajax({url:u, dataType:"jsonp",method:"POST",data:{action:"publish",item:JSON.stringify({text:window.location+"\n\n"+note})}, success:function(n){n=$("<div style=\"position:fixed;top:0;left:0;right:0;margin:auto;color:white;background:rgb(64,64,64);background:rgba(64,64,64,0.7);font-size:16pt;\">Note \""+note+"\"added in Tasks :)</div>"); $("body").append(n);n.slideDown().delay(1000).fadeOut("slow");},error:function(e){console.log(e); alert("Error making note. Are you logged in?");}});};d.getElementsByTagName("head")[0].appendChild(s);})(window,document,this);