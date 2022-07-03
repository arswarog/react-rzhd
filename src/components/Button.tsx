import { ReactNode } from "react"

export enum ButtonType {
    text = 'text',
    contained = 'contained',
    outlined = 'outlined',
}

interface IButton {
    type?: ButtonType
    onClick?: () => any
    disabled?: boolean
    children?: ReactNode
}

export function Button(props: IButton) {
    const { type = ButtonType.contained, onClick = () => { }, disabled = false, children } = props
    return (
        <button className={`Button-${type}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}
