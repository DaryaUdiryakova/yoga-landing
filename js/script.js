"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Swiper
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  roundLengths: true,
  loopAdditionalSlides: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var swiperPrev = document.getElementById('swiperPrev');
var swiperNext = document.getElementById('swiperNext');
swiperPrev.addEventListener('click', function () {
  swiper.slidePrev();
});
swiperNext.addEventListener('click', function () {
  swiper.slideNext();
}); // close menu

function closeMenu(context) {
  context.classList.remove('is-active');
  document.querySelector('.header__nav').classList.remove('nav-active');
  setTimeout(function () {
    return document.querySelector('.header__nav').style.transition = '';
  }, 1000);
  document.body.classList.remove('wrap-active');
} // menu


document.querySelector('.button-menu').addEventListener('click', function (e) {
  e.preventDefault();

  if (this.classList.contains('is-active')) {
    closeMenu(this);
  } else {
    this.classList.add('is-active');
    document.querySelector('.header__nav').classList.add('nav-active');
    document.querySelector('.header__nav').style.transition = 'all ease 1s';
    document.body.classList.add('wrap-active');
  }
}); // js accordion

var btnToogle = document.getElementById('btn-toogle');
var container = document.getElementById('toogle-instructors-item');

function toogleFunc(hasclass, newClass, maxHeight) {
  if (hasclass.classList.contains(newClass)) {
    hasclass.classList.remove(newClass);
    hasclass.style.maxHeight = maxHeight;
  } else {
    hasclass.classList.add(newClass);
    hasclass.style.maxHeight = hasclass.scrollHeight + 'px';
  }
}

btnToogle.addEventListener('click', function () {
  toogleFunc(container, 'active-instructors-item', 0);
  this.innerHTML === 'more ...' ? this.innerHTML = 'hide' : this.innerHTML = 'more ...';
});
var itemFooter = document.querySelectorAll('.footer-mobile');

var _iterator = _createForOfIteratorHelper(itemFooter),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    item.addEventListener('click', function () {
      toogleFunc(this, 'item-active', 50 + 'px');
    });
  } // animation scroll

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var smoothLinks = document.querySelectorAll('.header__item, .header__btn');

var _iterator2 = _createForOfIteratorHelper(smoothLinks),
    _step2;

try {
  var _loop = function _loop() {
    var link = _step2.value;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var id = link.getAttribute('href');
      closeMenu(document.querySelector('.button-menu'));
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

;