import React from 'react';

interface TemperatureInputType {
    temperature: string,
    scale: 'c' | 'f',
    onTemperatureChange: (val: string) => void
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export class TemperatureInput extends React.Component<TemperatureInputType> {
    constructor(props: TemperatureInputType) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}