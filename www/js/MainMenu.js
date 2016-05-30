var button, deceleon;
Growth.MainMenu = function (game) {
  this.music = null;
};

Growth.MainMenu.prototype = {
  create: function () {
    button = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'start-button', this.startGame, this, 1, 0, 2);
    button.anchor.setTo(0.5, 0.5);

    deceleon = this.game.add.button(this.game.world.width, this.game.world.centerY, 'deceleon', this.startGame, this, 1, 0, 3);
    deceleon.anchor.setTo(1, 0.5);

    var style = {
      font: "20px '微软雅黑'",
      fill: "#ddd",
      wordWrap: true,
      wordWrapWidth: this.game.width,
      align: "center"
    };

    this.welcomeText = this.game.add.text(this.game.width / 2, this.game.height - 40, "欢迎来到 Dream Coastline \n 一个游戏中的游戏", style);
    this.welcomeText.anchor.set(0.5);
    this.welcomeText.alpha = 1;
  },

  update: function () {

  },

  startGame: function () {
    this.state.start('Game');
  }

};
