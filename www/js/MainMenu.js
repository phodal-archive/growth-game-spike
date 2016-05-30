var button, deceleon;
Growth.MainMenu = function (game) {
  this.music = null;
};

Growth.MainMenu.prototype = {
  create: function () {
    this.game.stage.backgroundColor = "#5F6369";

    button = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button', this.startGame, this, 1, 0, 2);
    button.anchor.setTo(0.5, 0.5);

    deceleon = this.game.add.button(this.game.world.width, this.game.world.centerY, 'deceleon', this.startGame, this, 1, 0, 3);
    deceleon.anchor.setTo(1, 0.5);

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

  update: function () {

  },

  startGame: function () {
    this.state.start('Game');
  }

};
