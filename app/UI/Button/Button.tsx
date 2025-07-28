import './Button.css'

export interface ButtonProps{
    label: string;
    mode?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;

}

export default function Button({...props}: ButtonProps) {

    const {label, mode, className, size, ...rest} = props

    const buttonMode = mode === 'primary' ? `custom-button--primary` : `custom-button--secondary`;
    const buttonSize = size === 'small' ? 'custom-button--small' : size === 'large' ? 'custom-button--large' : 'custom-button--medium'
    const buttonClass = className


    return(
        <button
            type='button'
            className={[`custom-button`, buttonMode, buttonSize, buttonClass].join(' ')}
        >
            {label}
        </button>
    )
}
