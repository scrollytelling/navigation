$.widget('scrollytelling.scrollytellingNavigationCounter', {
  setActive: function(page) {
    $('nav a', this.element).removeClass('active');
    $('nav a[href="#' + page.attr('id') + '"]', this.element).addClass('active');
  },

  updateActive: function(page) {
    this.setActive(page.element);
  },

  _create: function() {
    // Init active dot
    this.setActive(pageflow.slides.currentPage());

    // Listen to page changes
    pageflow.events.on('page:change', this.updateActive.bind(this));

    // Set click handler
    $('nav a', this.element).on('click', this.onClick);
  },

  onClick: function(event) {
    event.preventDefault();

    var page_id = $(this).attr('data-page-id');

    pageflow.slides.goToById(page_id);
  }
});
