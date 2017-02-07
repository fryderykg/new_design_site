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
