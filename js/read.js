require(["lib/marked"], function(marked) {
    (function() {

        function markAllTheDowns(callback) {
            var request = new XMLHttpRequest();
            request.open('GET', 'md/stuff.md', true);

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == "200") {
                    callback(request.responseText);
                }
            };
            request.send(null);
        }

        markAllTheDowns(function(stuff) {
            document.write(marked(stuff));
        })
    })();
});