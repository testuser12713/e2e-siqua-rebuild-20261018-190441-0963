(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  var reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function prefersReducedMotion() {
    return reduceMotionQuery.matches;
  }

  function setupNavigation() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.getElementById("site-nav");
    var scrim = document.querySelector("[data-menu-scrim]");
    var mobileQuery = window.matchMedia("(max-width: 920px)");
    var background = [document.getElementById("main"), document.querySelector(".site-footer")];

    if (!toggle || !nav) {
      return;
    }

    function isOpen() {
      return document.body.classList.contains("menu-open");
    }

    function setBackgroundInert(inert) {
      background.forEach(function (element) {
        if (!element) {
          return;
        }
        if (inert) {
          element.setAttribute("inert", "");
        } else {
          element.removeAttribute("inert");
        }
      });
    }

    function closeMenu(returnFocus) {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      setBackgroundInert(false);
      if (returnFocus) {
        toggle.focus();
      }
    }

    function openMenu() {
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
      setBackgroundInert(true);
      var firstLink = nav.querySelector("a");
      if (firstLink) {
        var focusFirstLink = function (event) {
          if (event && event.target !== nav) {
            return;
          }
          nav.removeEventListener("transitionend", focusFirstLink);
          if (isOpen()) {
            firstLink.focus({ preventScroll: true });
          }
        };
        nav.addEventListener("transitionend", focusFirstLink);
        window.setTimeout(focusFirstLink, 400);
      }
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) {
        closeMenu(true);
      } else {
        openMenu();
      }
    });

    if (scrim) {
      scrim.addEventListener("click", function () {
        closeMenu(true);
      });
    }

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeMenu(true);
      }
    });

    function handleViewportChange(event) {
      if (!event.matches) {
        closeMenu(false);
      }
    }

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleViewportChange);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(handleViewportChange);
    }
  }

  function setupReveals() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

    if (!items.length || prefersReducedMotion()) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    items.forEach(function (item) {
      var delay = item.getAttribute("data-reveal-delay");
      if (delay) {
        item.style.setProperty("--reveal-delay", delay + "ms");
      }
      item.classList.add("reveal--armed");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function setupPageTransitions() {
    document.addEventListener("click", function (event) {
      if (event.defaultPrevented || prefersReducedMotion()) {
        return;
      }

      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      var link = event.target.closest("a[href]");
      if (!link) {
        return;
      }

      if (
        link.target ||
        link.hasAttribute("download") ||
        link.hasAttribute("data-no-transition") ||
        link.getAttribute("href").indexOf("#") === 0
      ) {
        return;
      }

      var url;
      try {
        url = new URL(link.href, window.location.href);
      } catch (error) {
        return;
      }

      if (url.origin !== window.location.origin) {
        return;
      }

      if (!/\.html?$/i.test(url.pathname)) {
        return;
      }

      if (url.href === window.location.href) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("is-leaving");
      window.setTimeout(function () {
        window.location.href = url.href;
      }, 180);
    });

    window.addEventListener("pageshow", function () {
      document.body.classList.remove("is-leaving");
    });
  }

  function init() {
    setupNavigation();
    setupReveals();
    setupPageTransitions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
