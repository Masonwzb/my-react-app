export interface SquareComponentProps<T> {
    value: T | null,
    onClick: () => void
}

export interface ChessType {
    value: string
}

export interface ChessStates {
    squares: Array<string | null>
}