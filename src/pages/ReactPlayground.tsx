import React, { useCallback, useDebugValue, useEffect, useMemo, useReducer, useRef, useState } from 'react';

export const ReactPlayground = () => {
    const [isShown, toggleShown] = useReducer((val) => !val, true);
    const [value, setValue] = useState(0);
    const [innerValue, increment] = useReducer((value) => value + 1, 0);

    useEffect(() => {
        // console.log('effect');
    }, []);

    const handleChange = useCallback(() => {
        console.log('мы что-то делаем', innerValue);
        localStorage.setItem('value', innerValue);
        increment();
    }, [innerValue]);

    const handleClick = () => setValue(value + 1);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '100px',
            }}
        >
            <div>
                <button onClick={handleClick}>{value}</button>
                <button onClick={increment}>{innerValue}</button>
                <button onClick={toggleShown}>{isShown ? 'hide' : 'show'}</button>
            </div>
            <div>
                {isShown && (
                    <Content
                        additionalValue={innerValue}
                        onClick={handleChange}
                    />
                )}
            </div>
        </div>
    );
};

interface IContentProps {
    additionalValue: number;
    onClick?: () => void;
}

const Content = React.memo((props: IContentProps) => {
    const { additionalValue } = props;
    const [value, setValue] = useState(0);

    const ref = useRef(1);
    const ref2 = useRef(2);
    const ref3 = useRef(4);

    console.log('content', ref.current++);

    useEffect(() => {
        console.log('content mount');

        return () => console.log('content unmount');
    });

    function handleClick() {
        setValue(value + 1);
    }

    const result = useMemo(() => heavyComputing(value, additionalValue), [value, additionalValue]);

    return (
        <div>
            <div
                style={{ padding: '20px', userSelect: 'none' }}
                onClick={handleClick}
            >
                {value} ** {additionalValue} = {result}
            </div>
            <button onClick={props.onClick}>onClick</button>
        </div>
    );
});

Content.displayName = 'Content';

function heavyComputing(a: number, b: number): number {
    console.log('heavyComputing');

    return a ** b;
}
