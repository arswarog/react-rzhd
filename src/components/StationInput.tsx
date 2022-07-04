import { SyntheticEvent, useState } from 'react';

export enum StationInputType {
    from = 'from',
    to = 'to',
}

interface IProps {
    type: StationInputType;
    onChange: (value: string) => void;
}

export function StationInput(props: IProps) {
    const [value, setValue] = useState('');

    function onChange(event: SyntheticEvent) {
        const newValue = (event.target as HTMLInputElement).value;

        setValue(newValue);
        props.onChange(newValue);
    }

    function onClear() {
        setValue('');
    }

    console.log('render with ' + value);

    return (
        <div>
            <input
                id={'station-input-' + props.type}
                value={value}
                onChange={onChange}
            />
            {value}
            <button onClick={onClear}>clear</button>
        </div>
    );
}
