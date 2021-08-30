class TicTacToe {
    constructor() {
 this.player = 'x';

 this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
this.turns = 0;
    }

    getCurrentPlayerSymbol() {
 return this.player;

    }

    nextTurn(rowIndex, columnIndex) {
 if (!this.gameField[rowIndex][columnIndex]) {
      this.gameField[rowIndex][columnIndex] = this.player;
      this.player = this.player == "x" ? "o" : "x";
      this.turns++;
    }
    }

    isFinished() {
 return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
 if (
      (this.gameField[0][0] === "x" && this.gameField[0][1] === "x" && this.gameField[0][2] === "x") ||
      (this.gameField[1][0] === "x" && this.gameField[1][1] === "x" && this.gameField[1][2] === "x") ||
      (this.gameField[2][0] === "x" && this.gameField[2][1] === "x" && this.gameField[2][2] === "x") ||
      (this.gameField[0][0] === "x" && this.gameField[1][0] === "x" && this.gameField[2][0] === "x") ||
      (this.gameField[0][1] === "x" && this.gameField[1][1] === "x" && this.gameField[2][1] === "x") ||
      (this.gameField[0][2] === "x" && this.gameField[1][2] === "x" && this.gameField[2][2] === "x") ||
      (this.gameField[0][0] === "x" && this.gameField[1][1] === "x" && this.gameField[2][2] === "x") ||
      (this.gameField[0][2] === "x" && this.gameField[1][1] === "x" && this.gameField[2][0] === "x")
    ) {
      return "x";
    } else if (
      (this.gameField[0][0] === "o" && this.gameField[0][1] === "o" && this.gameField[0][2] === "o") ||
      (this.gameField[1][0] === "o" && this.gameField[1][1] === "o" && this.gameField[1][2] === "o") ||
      (this.gameField[2][0] === "o" && this.gameField[2][1] === "o" && this.gameField[2][2] === "o") ||
      (this.gameField[0][0] === "o" && this.gameField[1][0] === "o" && this.gameField[2][0] === "o") ||
      (this.gameField[0][1] === "o" && this.gameField[1][1] === "o" && this.gameField[2][1] === "o") ||
      (this.gameField[0][2] === "o" && this.gameField[1][2] === "o" && this.gameField[2][2] === "o") ||
      (this.gameField[0][0] === "o" && this.gameField[1][1] === "o" && this.gameField[2][2] === "o") ||
      (this.gameField[0][2] === "o" && this.gameField[1][1] === "o" && this.gameField[2][0] === "o")
    ) {
      return "o";
    }
    return null;
    }

    noMoreTurns() {
 if (this.turns == 9) {
      return true;
    } else {
      return false;
    }
  }
    
    isDraw() {
return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
  return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
