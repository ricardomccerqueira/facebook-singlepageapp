//jQuery plugins to replace existing jQuery animation fade functions
//notes: 
// - the easing function in TweenLite is not passed in as a string
//   but as a function
// - TweenLite uses seconds instead of milliseconds so .4 instead of 400
//   as your time value
$.fn.fadeIn = function(duration, easing, completeFunction) {
  var tweenObj;
  if (easing == null) {
    easing = Power1.easeOut;
  }
  if (completeFunction == null) {
    completeFunction = null;
  }
  TweenLite.to($(this), 0, {
    css: {
      autoAlpha: 0
    }
  });
  $(this).css("display", "block");
  tweenObj = {
    css: {
      autoAlpha: 1
    },
    ease: easing
  };
  if (completeFunction !== null) {
    tweenObj.onComplete = completeFunction;
  }
  return TweenLite.to($(this), duration, tweenObj);
};
  
$.fn.fadeTo = function(toAlpha, duration, easing, completeFunction) {
  var $el, tweenObj, _onFadeOutComplete;
  if (easing == null) {
    easing = Power1.easeOut;
  }
  if (completeFunction == null) {
    completeFunction = null;
  }
  $el = $(this);
  _onFadeOutComplete = function() {
    $el.css("display", "none");
    if (completeFunction !== null) {
      return completeFunction.call(this);
    }
  };
  if ($(this).css("display") === "none") {
    TweenLite.to($(this), 0, {
      css: {
        autoAlpha: 0
      }
    });
    $(this).css("display", "block");
  }
  tweenObj = {
    css: {
      autoAlpha: toAlpha
    },
    ease: easing
  };
  if (toAlpha === 0) {
    tweenObj.onComplete = _onFadeOutComplete;
  } else {
    if (completeFunction !== null) {
      tweenObj.onComplete = completeFunction;
    }
  }
  return TweenLite.to($(this), duration, tweenObj);
};
  
$.fn.fadeOut = function(duration, easing) {
  var $el, _onFadeOutComplete;
  if (easing == null) {
    easing = Power1.easeOut;
  }
  $el = $(this);
  _onFadeOutComplete = function() {
    return $el.css("display", "none");
  };
  return TweenLite.to($el, duration, {
    css: {
      autoAlpha: 1
    },
    ease: easing,
    onComplete: _onFadeOutComplete
  });
};