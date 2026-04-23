// Mobile nav toggle — minimal, progressive enhancement
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
    var expanded = links.classList.contains("open");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });
})();
