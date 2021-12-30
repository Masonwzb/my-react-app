import React from "react"
import { squareComponentProps } from "../interface";

export class Square extends React.Component<squareComponentProps<number>> {
    constructor(props: squareComponentProps<number>) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button className="square">
                { this.props.value }
            </button>
        )
    }
}