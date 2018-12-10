(() => {  
  // get a ref to the lottie container
  const blob = document.querySelector('.blob');

  let blobAnim = bodymovin.loadAnimation ({
    wrapper:animationArea,
   // animType : 'svg', 
    loop: true,
    autoplay: true,
    path : './data/data.json',

    

  });


})();