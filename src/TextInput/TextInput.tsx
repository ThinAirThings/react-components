import { CSSProperties } from 'react';
import styles from './TextInput.module.scss?inline';

export const TextInput = ({
    label,
    placeholder,
    onChange,
    value,
    className,
    style
}: {
    label: string
    value?: string
    placeholder?: string
    onChange?: (value: string) => void
    className?: string
    style?: CSSProperties
}) => {
    return (
        <div className={`${styles.container} ${className??''}`} style={{...style}}>
            <span className={styles.label}>{label}</span>
            <input className={styles.textInput} type="text" placeholder={placeholder? placeholder : ''}
                onChange={e => onChange && onChange(e.target.value)}
                value={value}
            />
        </div>
    )
}