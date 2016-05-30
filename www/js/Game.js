Growth.Game = function (game) {


};

Growth.Game.prototype = {

    create: function () {
        console.log("Start Game!");
    },

    gameOver: function () {

    },

    quitGame: function () {
        this.state.start('MainMenu');
    }

};
