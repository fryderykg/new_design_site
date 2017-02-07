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
});

// SENDING MAIL
$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/**
 * Created by frycek on 06.02.17.
 */
$(document).ready(function() {
  // COLORS
  var colorHeader = '#FFC63B',
    colorProjects = '#F04E59',
    colorAboutMe = '#77C383',
    colorTechnologies = '#40C2D2',
    colorContactMe = '#FFC63B',
    siteWrapper = $('.site-wrapper'),
    hamburger = $('#hamburgerIcon');


  // WAYPOINTS
  var hamburgerWaypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function (direction) {
      if (direction === 'down') {
        hamburger.css('color', '#000')
      } else {
        hamburger.css('color', '#FFF')
      }
    },
    offset: '50px'
  }),
    projectsWaypoint = new Waypoint({
      element: document.getElementById('projects'),
      handler: function (direction) {
        if (direction === 'down') {
          siteWrapper.css('background', colorProjects);
        } else {
          siteWrapper.css('background', colorHeader);
        }
      },
      offset: '50%'
    }),
    aboutMeWaypoint = new Waypoint({
      element: document.getElementById('aboutMe'),
      handler: function (direction) {
        if (direction === 'down') {
          siteWrapper.css('background', colorAboutMe);
        } else {
          siteWrapper.css('background', colorProjects);
        }
      },
      offset: '50%'
    }),
    technologiesWaypoint = new Waypoint({
      element: document.getElementById('technologies'),
      handler: function (direction) {
        if (direction === 'down') {
          siteWrapper.css('background', colorTechnologies);
        } else {
          siteWrapper.css('background', colorAboutMe);
        }
      },
      offset: '50%'
    }),
    contactMeWaypoint = new Waypoint({
      element: document.getElementById('contact'),
      handler: function (direction) {
        if (direction === 'down') {
          siteWrapper.css('background', colorContactMe);
        } else {
          siteWrapper.css('background', colorTechnologies);
        }
      },
      offset: '50%'
    });
});
