window.addEventListener('message', function(event) {
    if (event.origin.includes('good-loop.com')) {
        console.log('Origin:' + event.origin + ', message:' + event.data)
        let safariLogin = "myemail@good-loop.com@email";
        window.frames[0].postMessage(safariLogin, "*");
    }
})
