/** 
 * jquery.viewFullScreen 1.0.0
 * https://github.com/ryanfiorini/FullScreen
 * Copyright (C) 2012 Ryan Fiorini
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 (function ($) {

     $.fn.extend({

         //pass the options variable to the function
         viewFullScreen: function (options) {
             //Set the default values, use comma to separate the settings, example:
             var defaults = {
                 wholePage: false
             }

             var options = $.extend(defaults, options);

             return this.each(function () {
                 var o = options;

                 $(this).click(function () {
                     var docElm = document.documentElement;
                     if (docElm.requestFullscreen) {
                         if (options.wholePage)
                             docElm.requestFullscreen();
                         else
                             this.requestFullscreen();
                     }
                     else if (docElm.mozRequestFullScreen) {
                         if (options.wholePage)
                             docElm.mozRequestFullScreen();
                         else
                             this.mozRequestFullScreen();
                     }
                     else if (docElm.webkitRequestFullScreen) {
                         if (options.wholePage)
                             docElm.webkitRequestFullScreen();
                         else
                             this.webkitRequestFullScreen();
                     }
                 });

                 /*var cancelFullScreen = document.getElementById("cancel-fullscreen");
                 if (cancelFullScreen) {
                 cancelFullScreen.addEventListener("click", function () {
                 if (document.exitFullscreen) {
                 document.exitFullscreen();
                 }
                 else if (document.mozCancelFullScreen) {
                 document.mozCancelFullScreen();
                 }
                 else if (document.webkitCancelFullScreen) {
                 document.webkitCancelFullScreen();
                 }
                 }, false);
                 }*/

                 document.addEventListener("fullscreenchange", function () {
                     //debugger;
                     //fullscreenState.innerHTML = (document.fullscreenElement) ? "" : "not ";
                 }, false);

                 document.addEventListener("mozfullscreenchange", function () {
                     //debugger;
                     //fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
                 }, false);

                 document.addEventListener("webkitfullscreenchange", function () {
                     //debugger;
                     //fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
                 }, false);

             });
         }
     });
 })(jQuery);