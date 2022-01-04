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
            XisNext: true
        }
    }

    handleClick(i: number) {
        const history = this.state.history
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calculateWinner(squares) || squares[i]) return

        squares[i] = this.state.XisNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares
            }]),
            XisNext: !this.state.XisNext
        })
        console.log('the current state -history- ', history)
    }

    render() {
        const history = this.state.history
        const current = history[history.length - 1]

        const winner = calculateWinner(current.squares)
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
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}