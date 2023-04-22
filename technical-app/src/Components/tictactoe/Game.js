import React, { useReducer, useState } from 'react';
import Board from './Board';
import './GameStyle.css'
import { calculateWinner } from '../../helpers';


const initialState = {
    board: Array(9).fill(null), 
    xIsNext: true
}

//imutable: không thể chỉnh sửa

//deep Copy 
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            // Clone state 
            const {board, xIsNext } = state;
            const {index, winner} = action.pageload;

            if(winner != null || board[index]) return state;

            const nextState = JSON.parse(JSON.stringify(state));

            nextState.board[index] = xIsNext? 'X': 'O';
            nextState.xIsNext = !xIsNext;

            return nextState
        }

        case 'RESET':
        {
                const nextState = JSON.parse(JSON.stringify(state));
                nextState.board = Array(9).fill(null);
                nextState.xIsNext = true;
                
                return nextState;
        }
            

        default:
            break;
    }
    return state;
}

// UseState : Khi làm những state đơn giản
// useReducer: Sử dụng cho những state phức tạp

const Game = () => {
    const  [state , dispatch] = useReducer(gameReducer,initialState);

    const winner = calculateWinner(state.board); 

    const handleClick = (index) => {
        // const boardCopy = [...state.board];

        // Nếu có người đã chiến thắng 
        // if(winner != null || boardCopy[index]) return;

        dispatch({
            type: 'CLICK',
            // pageload: {index: index, winner: winner}
            pageload: {index, winner}
        })

        // // Nếu tieps theo là X thì -> X : O
        // boardCopy[index] = xIsNext? 'X': 'O';
        // setBoard(boardCopy);
        // setXIsNext(xIsNext => !xIsNext);
    }   

    const handleResetGame = () => {
        dispatch({
            type: 'RESET',
        })
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
    }

    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>

            {winner  && 
                <div className="game-winner">
                   Winner is {winner}
                </div>
            }
            <button className="game-reset" onClick={handleResetGame}> Reset game </button>  
        </div>

    );
};

export default Game;