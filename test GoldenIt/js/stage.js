var stage = acgraph.create('container');


var bounds = stage.getBounds();


var CHIP_WIDTH = bounds.width / 7;
var CHIP_HEIGHT = bounds.height / 7;


var FILL = {
        keys: [
        
        '0 #www',
        '0 #999'
    ]
};

/**
 *
 * @param {Array} board 
 * @param {number} position 
 * @constructor
 */
function Chip(board, position) {
    this.board = board;
    // chip shape
    this.rect = stage.rect().stroke('red').fill(FILL);
    var textStyle = {
        fontSize: 40,
        hAlign: 'center',
        vAlign: 'middle',
        color: 'white',
        width: CHIP_WIDTH,
        height: CHIP_HEIGHT
    };
    // chip text
    this.text = stage.text(0, 0, board[position], textStyle);
    this.text.disablePointerEvents(true);

    this.setPosition(position);
    this.rect.listen('click', this.handleClick, false, this);
}


/**
 
 * @param {number} newPosition 
 */
Chip.prototype.setPosition = function (newPosition) {
    var rowColumn, newBounds;
    this.position = newPosition;
    rowColumn = getRowColumnByIndex(newPosition);
    newBounds = getBoundsByRowColumn.apply(null, rowColumn);
    this.rect.setBounds(newBounds);
    this.text.x(newBounds.left).y(newBounds.top);
};



Chip.prototype.handleClick = function () {
    this.moveUp() || this.moveRight() || this.moveDown() || this.moveLeft();
};


/**
 *
 * @return {boolean}
 */
Chip.prototype.moveUp = function () {
    var newPosition = this.position - 7;
    if (this.board[newPosition] == 0) {
        this.board[this.position] = 0;
        this.setPosition(newPosition);
        this.board[newPosition] = this;
        if (this.checkBoard())
            alert('Congrats! You have won the game!');
        return true;
    }
    return false;
};


/**
 * 
 * @return {boolean} 
 */
Chip.prototype.moveDown = function () {
    var newPosition = this.position + 7;
    if (this.board[newPosition] == 0) {
        this.board[this.position] = 0;
        this.setPosition(newPosition);
        this.board[newPosition] = this;
        if (this.checkBoard())
            alert('Congrats! You have won the game!');
        return true;
    }
    return false;
};


/**
 *
 * @return {boolean} 
 */
Chip.prototype.moveLeft = function () {
    var newPosition = this.position - 1;
    if (this.position % 7 > 0 && this.board[newPosition] == 0) {
        this.board[this.position] = 0;
        this.setPosition(newPosition);
        this.board[newPosition] = this;
        if (this.checkBoard())
            alert('Congrats! You have won the game!');
        return true;
    }
    return false;
};


/**

 * @return {boolean} 
 */
Chip.prototype.moveRight = function () {
    var newPosition = this.position + 1;
    if (this.position % 7 < 6 && this.board[newPosition] == 0) {
        this.board[this.position] = 0;
        this.setPosition(newPosition);
        this.board[newPosition] = this;
        if (this.checkBoard())
            alert('Congrats! You have won the game!');
        return true;
    }
    return false;
};


/**
 
 * @return {boolean}
 */
Chip.prototype.checkBoard = function () {
    
    if (this.board[49] !== 0) return false;
    var win = true;
    for (var i = 0; i < 47; i++) {
        win = win && (+this.board[i].text.text() == (i + 1));
        if (!win) return false;
    }
    return win;
};



/**
 
 * @param {Array} arr
 */

/**
 * 
 */
function newGame() {
    
    for (var i = 0; i < 49; i++) {
        var boardItem = board[i];
        if (boardItem) {
            if (boardItem instanceof Chip)
                boardItem.setPosition(i);
            else
                board[i] = new Chip(board, i);
        }
    }
}


/**
 * 
 * @param {number} row 
 * @param {number} column 
 * @returns {graphics.math.Rect} 
 */
function getBoundsByRowColumn(row, column) {
    var left = column * CHIP_WIDTH;
    var top = row * CHIP_HEIGHT;
    var wShift = column == 6 ? 1 : 0;
    var hShift = row == 6 ? 1 : 0;
    return new acgraph.math.Rect(left + 0.5, top + 0.5, CHIP_WIDTH - wShift, CHIP_HEIGHT - hShift);
}


/**
 
 * @param {number} index
 * @return {Array.<number, number>}
 */
function getRowColumnByIndex(index) {
    var column = index % 7;
    var row = (index - column) / 7;
    return [row, column]
}


var board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];


newGame();


function findZero() {
    return board.indexOf(0);
}


document.onkeyup = function (e) {
    //l37 u38 r39 d40
    if (e.keyCode > 36 && e.keyCode < 41) {
        var index = findZero();
        switch (e.keyCode) {
            case 37:
                if ((index % 4 > 0) && board[index - 1])
                    board[index - 1].moveRight();
                break;
            case 38:
                if (board[index - 4])
                    board[index - 4].moveDown();
                break;
            case 39:
                if ((index % 4 < 3) && board[index + 1])
                    board[index + 1].moveLeft();
                break;
            case 40:
                if (board[index + 4])
                    board[index + 4].moveUp();
                break;


        }
    }
};