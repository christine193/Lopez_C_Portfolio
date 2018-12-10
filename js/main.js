//portfolio glitch
(function(){

    const vm = new Vue ({
   el : "#app",

   created : function (){

       const url = "includes/test.php";
       fetch(url)
       .then(res=>res.json())
       .then(data=> {
            document.querySelector('.glitchImg1').src = `images/${data[0].glitch_thumb}`;
            document.querySelector('.glitchImg2').src = `images/${data[1].glitch_thumb}`;
            document.querySelector('.glitchImg3').src = `images/${data[2].glitch_thumb}`;
            document.querySelector('.glitchImg4').src = `images/${data[3].glitch_thumb}`;

            
            document.querySelector('.glitchImg5').src = `images/${data[4].glitch_thumb}`;
            document.querySelector('.glitchImg6').src = `images/${data[5].glitch_thumb}`;
            document.querySelector('.glitchImg7').src = `images/${data[6].glitch_thumb}`;
            document.querySelector('.glitchImg8').src = `images/${data[7].glitch_thumb}`;

            
            document.querySelector('.glitchImg9').src = `images/${data[8].glitch_thumb}`;
            document.querySelector('.glitchImg10').src = `images/${data[9].glitch_thumb}`;
            document.querySelector('.glitchImg11').src = `images/${data[10].glitch_thumb}`;
            document.querySelector('.glitchImg12').src = `images/${data[11].glitch_thumb}`;
         });
        },

        methods : {

            setHref : function (i) {
                console.log(i);

                const url = "includes/test.php?pic=1";
                fetch(url)
                .then(res=>res.json())
                .then(data=> {
                    console.log(data[0].glitch_image);
                   //document.querySelector('.largeImage').href=`images/${data[i].glitch_image}`;

                });

            }



        }



    });

//instagram feed
var loadMoreButton = document.getElementById("loadMoreButton");

var feed = new Instafeed({
    get:"user",
    limit:8,
    userId: "8699890662",
    accessToken:'8699890662.1677ed0.988f17324a344ad8935e86aea0f10a0a',
    resolution:"low_resolution",
    template: '<a href="{{link}}"><img src="{{image}}"/><div class="rollover"><div class="caption">{{caption}}</div></div></a>',
 
    onSuccess: function() {
        if(!this.hasNext()) loadMoreButton.disabled = true;
    }
});
    loadMoreButton.addEventListener("click", function() {
    feed.next();
});
feed.run();

}) ();


