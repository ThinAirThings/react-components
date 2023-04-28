import { ReactNode } from "react"


export const ComponentGrid = ({children}:{children: ReactNode}) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem'}}>
            {children}
        </div>
    )
}