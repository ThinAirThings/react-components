import { CSSProperties } from 'react'
import styles from './LoadingSpinner.module.scss'
import classNames from 'classnames'

export const LoadingSpinner = ({
    className,
    style
}: {
    className?: string
    style?: CSSProperties
}) => {
    return(
        <div 
            className={classNames(styles.spinner, className)} style={{...style}}
        />
    )
}