import React from "react"
import { SquareComponentProps, ChessType } from "../interface"

export class Square extends React.Component<SquareComponentProps<number>> {
    state:ChessType

    constructor(props: SquareComponentProps<number>) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                { this.state.value }
            </button>
        )
    }
}