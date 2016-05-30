Growth = {
  score: 0,
  music: null,
  orientated: false
};

Growth.Boot = function (game) {
};

Growth.Boot.prototype = {

  preload: function () {
    this.load.image('preloaderBar', 'images/preload.png');
  },

  create: function () {
    this.state.start('Preloader');
  }

};
