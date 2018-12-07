(() => {  
    // get a ref to the lottie container
    const animation = document.querySelector('.blob');

    let blobAnim = bodymovin.loadAnimation ({
      wrapper:animationArea,
      //animType : 'svg', 
      loop: true,
      autoplay: true,
      path : './data/blob.json',

      

    });
})();