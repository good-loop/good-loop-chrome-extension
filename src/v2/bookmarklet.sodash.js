javascript:(function(w,d,a,s){s=d.createElement("script");s.type="text/javascript";s.src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js";s.onload=s.onreadystatechange=function(){var note = prompt("Add a note","");console.log(note);if ( ! note) return;note += " "+window.location;var u = "https://issues.soda.sh/msg-msg.json?inReplyTo="+escape(window.location+"@web")+"&text="+escape(note)+"&action=post&service=InternalMail&ui=bookmarklet&as=daniel%40winterwellassociates.com%40soda.sh";$.ajax({url:u, dataType:"jsonp",success:function(n){n=$("<div style=\"position:fixed;top:0;left:0;right:0;margin:auto;color:white;background:rgb(64,64,64);background:rgba(64,64,64,0.7);font-size:16pt;\">Note \""+note+"\"added in SoDash :)</div>"); $("body").append(n);n.slideDown().delay(1000).fadeOut("slow");},error:function(e){console.log(e); alert("Error making note. Are you logged in?");}});};d.getElementsByTagName("head")[0].appendChild(s);})(window,document,this);