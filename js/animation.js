(() => {  
    // get a ref to the lottie container
    const animation = document.querySelector('.aboutAnimate');

      let aboutAnim = bodymovin.loadAnimation ({
      wrapper:about1,
      animType : 'svg', 
      loop: true,
      autoplay: true,
      path : './data/hand.json',

      

    });
})();