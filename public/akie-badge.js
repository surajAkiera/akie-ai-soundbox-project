/* Built with Akie - https://akie.ai
 * This file renders the small 'Built with Akie' badge and sends ONE
 * anonymous aliveness ping (project id + host only; no cookies, no
 * user data; Do-Not-Track honored). It is your code: removing this
 * file and its script tag removes both. */
(function () {
  'use strict';
  if (window.__akieBadge) return; window.__akieBadge = 1;
  var PID = 'proj_2d399b95';
  var HOME = 'https://akie.ai/?utm_source=badge&utm_medium=site&utm_campaign=made-with';
  var BEACON = 'https://api.akie.ai/beacon';
  var s = document.currentScript;
  if (s && s.getAttribute('data-akie-endpoint')) BEACON = s.getAttribute('data-akie-endpoint');
  function mount() {
    try {
      var m = document.createElement('meta');
      m.name = 'generator'; m.content = 'Akie';
      document.head.appendChild(m);
      var a = document.createElement('a');
      a.href = HOME; a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('aria-label', 'Built with Akie');
      a.style.cssText = 'position:fixed;bottom:14px;right:14px;z-index:2147483000;display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;background:#06141C;color:#F6F5F0;font:500 11px/1 system-ui,sans-serif;text-decoration:none;box-shadow:0 2px 12px rgba(0,0,0,.25);opacity:.92';
      a.onmouseenter = function () { a.style.opacity = '1'; };
      a.onmouseleave = function () { a.style.opacity = '.92'; };
      var dot = document.createElement('span');
      dot.style.cssText = 'width:7px;height:7px;border-radius:50%;background:#15C58B;display:inline-block';
      a.appendChild(dot);
      a.appendChild(document.createTextNode('Built with Akie'));
      document.body.appendChild(a);
    } catch (e) { /* never break the host page */ }
    try {
      if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
      var k = 'akie-beacon-' + PID;
      var last = +(sessionStorage.getItem(k) || 0);
      if (Date.now() - last < 3600000) return;
      sessionStorage.setItem(k, String(Date.now()));
      var img = new Image(1, 1);
      img.src = BEACON + '?p=' + encodeURIComponent(PID) +
        '&h=' + encodeURIComponent(location.hostname) +
        '&t=' + Date.now();
    } catch (e) { /* beacon is best-effort, always */ }
  }
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
