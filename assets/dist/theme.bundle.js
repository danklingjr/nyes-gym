(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
