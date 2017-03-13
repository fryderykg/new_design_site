/**
 * WAYPOINTS CONFIG
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
    element: $('#projects'),
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
      element: $('#projects'),
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
      element: $('#aboutMe'),
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
      element: $('#technologies'),
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
      element: $('#contact'),
      handler: function (direction) {
        if (direction === 'down') {
          siteWrapper.css('background', colorContactMe);
        } else {
          siteWrapper.css('background', colorTechnologies);
        }
      },
      offset: '50%'
    });

  $('.project:nth-of-type(1)').waypoint(function() {
    $('.project:nth-of-type(1)').addClass('fadeInLeft');
  }, { offset: '70%' });

 $('.project:nth-of-type(2)').waypoint(function() {
    $('.project:nth-of-type(2)').addClass('fadeInRight');
  }, { offset: '70%' });

   $('.project:nth-of-type(3)').waypoint(function() {
    $('.project:nth-of-type(3)').addClass('fadeInLeft');
  }, { offset: '70%' });

   $('.project:nth-of-type(4)').waypoint(function() {
    $('.project:nth-of-type(4)').addClass('fadeInRight');
  }, { offset: '70%' });

  $('.project:nth-of-type(5)').waypoint(function() {
    $('.project:nth-of-type(5)').addClass('fadeInLeft');
  }, { offset: '70%' });

 $('.project:nth-of-type(6)').waypoint(function() {
    $('.project:nth-of-type(6)').addClass('fadeInRight');
  }, { offset: '70%' });

   $('.project:nth-of-type(7)').waypoint(function() {
    $('.project:nth-of-type(7)').addClass('fadeInLeft');
  }, { offset: '70%' });

   $('.project:nth-of-type(8)').waypoint(function() {
    $('.project:nth-of-type(8)').addClass('fadeInRight');
  }, { offset: '70%' });

});
