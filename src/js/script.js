/**
 * Created by frycek on 02.02.17.
 */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a.menu').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash === "#top") {
      $('html, body').animate({
        scrollTop: 0
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
    else if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    closeNav();
  });

  // NAVBAR FUNCTIONS
  function openNav() {
    $('#mySidenav').css('width', '100%');
  }

  function closeNav() {
    $('#mySidenav').css('width', '0');
  }
  // Event Listeners
  $('#openBtn').on('click', openNav);
  $('#closeBtn').on('click', closeNav);

  // ANIMATION OF SCROLL
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100
  });
});

