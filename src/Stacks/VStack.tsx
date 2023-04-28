import { CSSProperties, ReactNode } from "react"
import styles from '../global.module.scss'
import classNames from "classnames"
export const VStack = ({
    hAlign='center',
    vAlign='center',
    children,
    className,
    style
}: {
    hAlign: 'left' | 'center' | 'right' | 'distribute',
    vAlign: 'top' | 'center' | 'bottom' | 'distribute',
    children: ReactNode
    className?: string
    style?: CSSProperties
}) => (
    <div className={classNames(styles[`v-stack-${hAlign}-${vAlign}`], className)} style={{...style}}>
        {children}
    </div>
)