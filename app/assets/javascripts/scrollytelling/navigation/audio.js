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
    var showState = this.showState;
    showState();
    $('#scrollytelling-audio', this.element).on('click', this.toggleAudio.bind(this));

    pageflow.events.on('media:userGestureRequired', function(player) {
      console.log("userGestureRequired");

      var icon = $('#scrollytelling-audio', this.element);

      icon.addClass('audio-needs-user-gesture');

      var clickHandler = $('#scrollytelling-audio', this.element).on('click', function (playerObject, event) {
         $( this ).unbind( event, clickHandler );

         if(icon.hasClass('audio-needs-user-gesture')) {
           icon.removeClass('audio-needs-user-gesture');
           playerObject.originalPlay.apply(playerObject.player, playerObject.arguments);
           pageflow.settings.set('volume', 1);
           showState();
         }
       }.bind(this, player));
    });

    // pageflow.events.on('page:change', function() {
    //    console.log("page change");
    //    var icon = $('#scrollytelling-audio', this.element);
    //    icon.removeClass('audio-needs-user-gesture');
    // });
  },

  // userGestureRequired(player) {
  //   icon.addClass('audio-needs-user-gesture');
  //
  //    $('#scrollytelling-audio', this.element).on('click', function (player) {
  //      icon.removeClass('audio-needs-user-gesture');
  //      player.play();
  //    }.bind(this, player));
  // }

  toggleAudio: function(event) {
    event.preventDefault();

    var icon = $('#scrollytelling-audio', this.element);

    if(!icon.hasClass('audio-needs-user-gesture')) {

      if(pageflow.settings.get('volume') > 0) {
        pageflow.settings.set('volume', 0);
      } else {
        pageflow.settings.set('volume', 1);
      }

      this.showState();

    }

  }
});
