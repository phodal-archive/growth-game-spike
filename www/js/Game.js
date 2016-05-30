Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    this.game.stage.backgroundColor = "#fff";
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.add.image(0, 0, 'background');
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
