import { CSSProperties } from 'react'
import styles from './LoadingSpinner.module.scss?inline'

export const LoadingSpinner = ({
    className,
    style
}: {
    className?: string
    style?: CSSProperties
}) => {
    return(
        <div className={`${styles.spinner} ${className??''} `} style={{...style}}/>
    )
}