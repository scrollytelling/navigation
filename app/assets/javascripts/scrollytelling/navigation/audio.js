$.widget('scrollytelling.audioControl', {
  showState: function() {
    var icon = $('#scrollytelling-audio', this.element);

    if(pageflow.settings.get('volume') > 0) {
      icon.removeClass('audio-muted').addClass('audio-playing');
    } else {
      icon.removeClass('audio-playing').addClass('audio-muted');
    }
  },

  _create: function() {
    this.showState();
    $('#scrollytelling-audio', this.element).on('click', this.toggleAudio.bind(this));
  },

  toggleAudio: function(event) {
    if(pageflow.settings.get('volume') > 0) {
      pageflow.settings.set('volume', 0);
    } else {
      pageflow.settings.set('volume', 1);
    }

    event.preventDefault();
    this.showState();
  }
});
