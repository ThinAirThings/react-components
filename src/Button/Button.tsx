import styles from './Button.module.scss';
import { Icon } from 'react-feather'
import { HStack } from '../Stacks/HStack';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { CSSProperties } from 'react';
export const Button = ({
    Icon,
    onClick,
    isLoading,
    secondary,
    children,
    className,
    style
}: {
    Icon?: Icon
    onClick?: () => void
    isLoading?: boolean
    secondary?: boolean
    children: string 
    className?: string
    style?: CSSProperties
}) => {
    return(
        <button className={`${styles.button} ${secondary?styles.secondary:''} ${className??''}`}
            style={{...style}}
            onClick={onClick}
        >
            {isLoading&&<LoadingSpinner className={styles.spinner}/>}
            <HStack style={{
                visibility: isLoading? 'hidden' : 'visible'
            }}>
                {Icon&&<Icon className={styles.icon}/>}
                <span className={styles.text}>{children}</span>
            </HStack>
        </button>
    )
}