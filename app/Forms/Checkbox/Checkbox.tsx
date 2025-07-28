export interface CheckboxProps {
    label: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean
}

export default function Checkbox({...props}: CheckboxProps) {

    const { label, onChange, isChecked } = props

    return(
        <div>
        <label htmlFor='custom-checkbox'>{label}</label>
            <input 
                type='checkbox'
                id='custom-checkbox'
                name='custom-checkbox'
                value='custom-checkbox'
                onChange={onChange}
                checked={isChecked}
            />
        </div>
    )
}