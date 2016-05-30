Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    var background = this.game.add.image(0, 0, 'background');
    background.height = this.game.height;
    background.width = this.game.width;

    var style = {
      font: "32px '微软雅黑'",
      fill: "#1d1500",
      wordWrap: true,
      wordWrapWidth: this.game.width,
      align: "center"
    };

    this.welcomeText = this.game.add.text(this.game.height, this.game.width / 2, "欢迎来到Dream Coastline", style);
    this.welcomeText.anchor.set(0.5);
    this.welcomeText.alpha = 1;

    this.game.add.tween(this.welcomeText).to({alpha: 0}, 4000, Phaser.Easing.Linear.None, true)
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
