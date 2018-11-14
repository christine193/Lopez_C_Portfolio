//instagram feed
var feed = new Instafeed({
    get:"user",
    userId: "8699890662",
    accessToken:'8699890662.1677ed0.988f17324a344ad8935e86aea0f10a0a',
    resolution:"low_resolution",
    template: '<a href="{{link}}"><img class="instaImage" src="{{image}}" /></a>',
 
});
feed.run();

