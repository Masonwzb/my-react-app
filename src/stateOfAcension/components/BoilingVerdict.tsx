interface celsiusType {
    celsius: number
}

export function BoilingVerdict(props: celsiusType) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}