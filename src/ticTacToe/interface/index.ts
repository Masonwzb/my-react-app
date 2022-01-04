export interface SquareComponentProps<T> {
    value: T | null,
    onClick: () => void
}

export interface BoardComponentProps {
    squares: Array<string | null>,
    onClick: (i: number) => void
}

export interface ChessType {
    value: string
}

type SquareType = {
    squares: Array<string | null>
}

export interface ChessStates {
    history: Array<SquareType>,
    XisNext: boolean
}