const Gameboard = () => {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const placeMark = (row, column, player) => {
        const availableCells = board
            .flat()
            .filter(cell => cell.getValue() === " ");

        if (!availableCells.length) return false;

        if (board[row][column].getValue() === " ") {
            board[row][column].addMark(player);
            return true;
        }

        return false;
    };

    const printBoard = () => {
        const boardWithCellValues = board
            .map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    return { getBoard, placeMark, printBoard };
};

function Cell() {
    let value = " ";

    const addMark = (player) => {
        if (value !== " ") {
            throw new Error("Cell is already occupied!");
        }
        value = player;
        return true;
    };

    const getValue = () => value;

    const reset = () => {
        value = " ";
    };

    return {
        addMark,
        getValue,
        reset
    };
}

const Player = (name, marker) => ({ name, marker });

const GameController = () => {
    const gameboard = Gameboard();

    const players = [
        Player('Player 1', 'X'),
        Player('Player 2', 'O')
    ];

    let activePlayer = players[0];
    let gameOver = false;

    const setPlayers = (name1, name2) => {
        players[0].name = name1;
        players[1].name = name2;
        activePlayer = players[0];
    }

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }
    const getactivePlayer = () => activePlayer;

    const printNewRound = () => {
        gameboard.printBoard();
        console.log(`${getactivePlayer().name}'s turn.`);
    }

    const resetGame = () => {
        gameboard.getBoard().flat().forEach(cell => cell.reset());  
        activePlayer = players[0]; 
        gameOver = false;
        console.log("Game has been reset!");
        printNewRound(); 
    };

    const checkWinner = () => {
        const board = gameboard.getBoard().flat().map(cell => cell.getValue());;

        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]            // diagonals
        ];

        
        const hasWinner =  winPatterns.some(pattern =>
            pattern.every(index => board[index] === getactivePlayer().marker)
        );

        if (hasWinner) {
            gameOver = true;
            gameboard.printBoard();
            return `${getactivePlayer().name} wins!`
            // return true;
        }

        const isTie = gameboard.getBoard().flat().every(cell => cell.getValue() !== " ");
        
        if (isTie) {
            gameOver = true;
            gameboard.printBoard();
            return "It's a tie!";
            // return true;
        }

        return null;
    };


    const playRound = (row, column) => {
        if (gameOver) return;

        console.log(`Placing ${getactivePlayer().name}'s marker into row ${row} & column ${column}...`);
        const playerMove = gameboard.placeMark(row, column, getactivePlayer().marker);

        if (!playerMove) {
            console.log("Invalid move. Cell is already occupied!");
            return null; // Exit early if the move was invalid
        }

        const result = checkWinner();

        if (result) {
            console.log(result);
            // console.log("Game Over!");
            return result; 
        }

        switchPlayerTurn();
        printNewRound();
        return null;
    };

    printNewRound();

    return {
        playRound,
        getactivePlayer,
        getBoard: gameboard.getBoard,
        resetGame,
        setPlayers
    };
};


const screenController = (() => {
    const game = GameController();
    const status = document.querySelector('.status');
    const boardDiv = document.querySelector('.board');
    const resetButton = document.querySelector('.reset');
    const playerForm = document.querySelector('.form-overlay');
    const player1Input = document.getElementById('player1-name');
    const player2Input = document.getElementById('player2-name');

    const updateScreen = () => {
        boardDiv.textContent = "";

        const board = game.getBoard();
        const activePlayer = game.getactivePlayer();

        status.textContent = `${activePlayer.name}'s turn...`;

        board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.column = colIndex;
                cellButton.textContent = cell.getValue();
                boardDiv.appendChild(cellButton);
            })
        })
    }

    const clickHandlerBoard = (e) => {
        if (game.getBoard().flat().some(cell => cell.getValue() === " ") === false) {
            return; // Game is over
        }

        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;

        if(selectedRow === undefined || selectedColumn === undefined) return;

        const result = game.playRound(parseInt(selectedRow), parseInt(selectedColumn));
        
        updateScreen();

        if(result){
            status.textContent = result;
            return;
        }

        e.target.disabled = true;
    }

    const resetGame = () => {
        game.resetGame();
        status.textContent = "";
        resetButton.disabled = true; 
        playerForm.style.display = "flex"; 
        player1Input.value = ""; 
        player2Input.value = ""; 
        boardDiv.textContent = "";
        updateScreen();
    };

    const startGame = (e) => {
        e.preventDefault();
        const player1Name = player1Input.value.trim() || "Player 1";
        const player2Name = player2Input.value.trim() || "Player 2";

        game.setPlayers(player1Name, player2Name);
        playerForm.style.display = "none";
        resetButton.disabled = false;
        updateScreen();
    };

    boardDiv.addEventListener('click', clickHandlerBoard);
    resetButton.addEventListener('click', resetGame);
    playerForm.addEventListener('submit', startGame);
})();

