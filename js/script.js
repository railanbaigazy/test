$(document).ready(function () {
   //displaying/removing menu on mobile
   $('.header__burger').click(function () {
      $('.header__burger,.nav').toggleClass('active');
      $('body').toggleClass('hidden');
   });
});

function testWebP(callback) {
    var webP = new Image(); 
    webP.onload = webP.onerror = function () { 
        callback(webP.height == 2); 
    }; 
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";  
}
testWebP(function (support) {
    if (support == true) { 
        document.querySelector('body').classList.add('webp'); 
    } 
    else { 
        document.querySelector('body').classList.add('no-webp'); 
    }
});
    