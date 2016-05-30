Growth.Preloader = function (game) {
  this.preloadBar = null;
  this.ready = false;
};

Growth.Preloader.prototype = {
  preload: function () {
    this.preloadBar = this.add.sprite(0, this.game.height - 100, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('logo', 'images/logo.png');
    this.load.image('background', 'images/trok.jpg');
    this.load.image('start-button', 'images/start-button.png');
    this.load.spritesheet('deceleon', 'images/deceleon.png', 256, 256);
  },
  create: function () {
    var self = this;

    this.preloadBar.cropEnabled = false;

    var logo = self.game.add.sprite(self.game.world.centerX, self.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
    logo.alpha = 0;

    this.preloadBar.alpha = 0;

    var tween = self.game.add.tween(logo).to({alpha: 1}, 2000, "Linear", true);
    tween.onComplete.add(function () {
      self.game.time.events.add(800, function () {
        self.state.start('MainMenu');
      }, self);
    }, self);
    tween.start();
  },
  update: function () {

  }
};
