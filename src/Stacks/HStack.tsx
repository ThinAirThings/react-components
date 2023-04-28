import { CSSProperties, ReactNode } from "react"
import styles from '../global.module.scss'

export const HStack = ({
    hAlign='center',
    vAlign='center',
    children,
    className,
    style
}: {
    hAlign?: 'left' | 'center' | 'right' | 'distribute',
    vAlign?: 'top' | 'center' | 'bottom' | 'distribute',
    children: ReactNode
    className?: string
    style?: CSSProperties
}) => (
    <div className={`${styles[`h-stack-${hAlign}-${vAlign}`]} ${className??''}`} style={{...style}}>
        {children}
    </div>
)
