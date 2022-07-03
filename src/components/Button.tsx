import './Button.css';

export enum ButtonType {
    text = 'text',
    contained = 'contained',
    outlined = 'outlined',
}

interface IButton {
    type?: ButtonType
    onClick?: () => any
    disabled?: boolean
    children?: string
}

export function Button(props: IButton) {
    const { type = ButtonType.contained, onClick, disabled, children = 'Button' } = props
    return (
        <button className={`Button Button-${type}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}
