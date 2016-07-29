pageflow.widgetTypes.register('scrollytelling_pageflow_navigation', {
  enhance: function(element) {
    element.scrollytellingNavigationCounter();
    element.scrollytellingNavigationInvert();
    element.facebookSharing();
    element.twitterSharing();
    element.audioControl();

    // hacky: if the entry URL matches 'onsite', push onsite class on the navigation.
    // this allows us to hide the sharing widgets for onsite productions.
    if($('head link[href*="onsite"]')) {
      element.addClass('onsite');
    }
  }
});
