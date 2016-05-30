Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    var background = this.game.add.image(0, 0, 'background');
    background.height = this.game.height;
    background.width = this.game.width;

    var style = {
      font: "32px '微软雅黑'",
      fill: "#ddd",
      wordWrap: true,
      wordWrapWidth: this.game.width,
      align: "center",
      alpha: 0.5,
      opacity: 0.5
    };

    var text = this.game.add.text(this.game.height, this.game.width / 2, "欢迎来到Dream Coastline", style);
    text.anchor.set(0.5);
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
