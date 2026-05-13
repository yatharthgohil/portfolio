(function () {
  "use strict";

  function formatLongDate(d) {
    if (!(d instanceof Date) || isNaN(d.getTime())) return "";
    var months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  }

  var endEl = document.getElementById("copyright-end");
  if (endEl) endEl.textContent = String(new Date().getFullYear());

  var lm = document.getElementById("last-modified");
  if (lm) {
    var parsed = new Date(document.lastModified);
    lm.dateTime = parsed.toISOString().slice(0, 10);
    lm.textContent = formatLongDate(parsed);
  }
})();
