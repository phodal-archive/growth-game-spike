Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    var background = this.game.add.image(0, 0, 'background');
    background.height = this.game.height;
    background.width = this.game.width;
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
