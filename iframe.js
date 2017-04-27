(function(){
    var iframe = document.getElementById('iframe');

    // form
    var frmIframe = document.getElementById('frmIframe');
    var frmWidth = document.getElementById('iframe_width');
    var frmHeight = document.getElementById('iframe_height');
    var frmSrc = document.getElementById('iframe_src');
    // read query params
    var queryParams = parseQuery();

    // default values
    var src = queryParams['src'] || 'https://maps.google.com/maps?output=embed';
    var width = queryParams['width'] || 500;
    var height = queryParams['height'] || 500;

    // set initial iframe state
    setIframe(src, width, height);

    // change iframe on form submit
    frmIframe.addEventListener('submit', function(e){
        e.preventDefault();
        setIframe(frmSrc.value, frmWidth.value, frmHeight.value);
        return false;
    });

    // sets iframe and updates form fields
    function setIframe(src, width, height){
        iframe.src = frmSrc.value = src;
        iframe.width = width + 'px';
        frmWidth.value = width;
        iframe.height =  height + 'px';
        frmHeight.value = height;
    }

    // parses query parameters
    function parseQuery(){
        var params = {};
        var query = window.location.search;
        if(query.length > 0){
            var pairs = query.substr(1).split('&');
            var index, pair, key, value;
            for(index = 0; index < pairs.length; index++){
                pair = pairs[index];
                var indexOfEquals = pair.indexOf('=');
                key = pair.substr(0, indexOfEquals);
                value = pair.substr(indexOfEquals + 1);
                params[key] = value;
            }
        }
        return params;
    }
})();
