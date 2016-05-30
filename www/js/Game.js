Growth.Game = function (game) {


};

Growth.Game.prototype = {

    create: function () {
        this.game.stage.backgroundColor = "#fff";
    },

    gameOver: function () {

    },

    quitGame: function () {
        this.state.start('MainMenu');
    }

};
