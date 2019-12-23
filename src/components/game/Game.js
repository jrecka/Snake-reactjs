import React, {Component} from 'react';
import Cells from '../cells/Cells';
import {START, BODY, FOOD, KEYS, COLS, ROWS} from '../const';
import '../../style/style.css';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            snake: [],
            direction: null,
            gameOver: false
        };
        this.start = this.start.bind(this);
        this.frame = this.frame.bind(this);
    }
    componentDidMount() {
        this.start();
    }
    start () {
        const board = [];
        const snake = [START];

        board[START] = BODY;


        this.setState({
            board,
            snake,
            direction: KEYS.right
        }, () => this.frame());
    }
    frame() {
        this.getNextIndex(44, KEYS.up)
    }
    getNextIndex(head, direction) {
        let x  = head % COLS;
        let y = Math.floor( head / COLS );
        console.log(x, y);
        switch (direction) {
            case KEYS.up: y = y <= 0 ? 
            ROWS -1 : y -1; break;
            case KEYS.down: y = y >= ROWS ? 
            0 : y + 1; break;
            case KEYS.left: x = x <= 0 ?
            COLS - 1 : x - 1; break;
            case KEYS.right: x = x >= COLS ?
            0 : x + 1; break;
            default: return;
        }
        console.log(x, y);

    }
    render() {
        return( <Cells/>)
    }
}

export default Game;