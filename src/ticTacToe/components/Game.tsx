import React from "react"
import { Board } from "./Board"
import "../index.css"
import {ChessStates} from "../interface"


function calculateWinner(squares: Array<string | null>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (const line of lines) {
        const [a, b, c] = line
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}

export class Game extends React.Component {
    state: ChessStates

    constructor(props: any) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            XisNext: true
        }
    }

    handleClick(i: number) {
        console.log('length --- ', this.state.history.length)
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calculateWinner(squares) || squares[i]) return

        squares[i] = this.state.XisNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares
            }]),
            stepNumber: history.length,
            XisNext: !this.state.XisNext
        })

        setTimeout(() => {
            console.log('the current state -history- ', this.state.history)
        }, 500)
    }

    jumpTo(move: number) {
        console.log(`移动到第 ${move} 步` )
        this.setState({
            stepNumber: move,
            XisNext: (move % 2) === 0
        })
    }

    render() {
        console.log('重新渲染 --- ')
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)

        const moves = history.map((step, move) => {
            const desc = move ?
               `Go to move # ${move}` :
                'Go to Game start'
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{ desc }</button>
                </li>
            )
        })

        let status

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = `Next player: ${this.state.XisNext ? 'X' : 'O'}`
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={ current.squares }
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        )
    }
}