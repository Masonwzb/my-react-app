import React from "react"
import { SquareComponentProps } from "../interface"

export class Square extends React.Component<SquareComponentProps<string>> {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                { this.props.value }
            </button>
        )
    }
}