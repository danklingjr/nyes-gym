/**
 * THEME JAVASCRIPT
 */

/**
 * Imports
 *
 * place all require statements here using relative links
 * or npm module names. jQuery is an example below. both
 * styles of naming conventions are used just in case
 */


$(document).ready(function() {
  $(".fancybox").fancybox({
    autoCenter: true,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
});
