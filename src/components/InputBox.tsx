import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export function InputBox({ children }: IProps) {
    return (
        <div className="InputSearchBox">
            <div className="InputSearchBox-from"></div>
            <div className="InputSearchBox-to"></div>
            {children}
        </div>
    );
}
