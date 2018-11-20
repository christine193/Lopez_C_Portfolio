//instagram feed
var loadMoreButton = document.getElementById("loadMoreButton");

var feed = new Instafeed({
    get:"user",
    limit:6,
    userId: "8699890662",
    accessToken:'8699890662.1677ed0.988f17324a344ad8935e86aea0f10a0a',
    resolution:"low_resolution",
    template: '<a href="{{link}}"><img class="instaImage" src="{{image}}"></a>',
 
    onSuccess: function() {
        if(!this.hasNext()) loadMoreButton.disabled = true;
    }
});
    loadMoreButton.addEventListener("click", function() {
    feed.next();
});
feed.run();

