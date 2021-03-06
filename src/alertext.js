(function(window) {
  'use strict';

  function defineAlertext() {
    var alertext = {};
    alertext.container = document.querySelector('.alertext-container');
    alertext.init = function() {
      var els = document.querySelectorAll('[alertext]');
      var els_total = els.length;
      for (var i = 0; i < els_total; i++)(function(i) {
        els[i].onclick = function() {
          var k = els[i].getAttribute('alertext');
          var l = els[i].getAttribute('alertext-type');
          var j = JSON.parse(els[i].getAttribute('alertext-options'));
          var m = els[i].getAttribute('alertext-delay');

          if (l === null) {
            l = "primary";
          }
          if (m === null || m == "") {
            m = 1000;
          }
          alertext.alert(k, l, j, m);
        };
      })(i);
    };
    alertext.alert = function(message, type="primary", options, delay="3000") {
      var el = document.createElement("div");
      el.className += "alertext";
      el.className += " alertext-"+type;

      el.innerHTML = message + "<a class='alertext-close' onClick='this.parentNode.parentNode.removeChild(this.parentNode);'>&nbsp;&nbsp;&nbsp;&times;</a>";
      var styles = options;
      for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
          el.style[style] = styles[style];
        }
      }
      if (typeof(alertext.container) != 'undefined' && alertext.container != null) {
        alertext.container.appendChild(el);
      } else {
        var el_c = document.createElement("div");
        el_c.className += "alertext-container";
        document.body.appendChild(el_c);
        alertext.container = document.querySelector('.alertext-container');
        alertext.container.append(el);
      }
      setTimeout(function(){
        alertext.container.removeChild(el);
      }, delay);
      console.log(el);
    };
    return alertext;
  }
  if (typeof(alertext) === 'undefined') {
    window.alertext = defineAlertext();
  }
})(window);
