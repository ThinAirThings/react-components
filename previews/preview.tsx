import ReactDOM from 'react-dom/client'
import {Button} from '../../src/Button/Button'
import { ComponentGrid } from './ComponentGrid'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <ComponentGrid>
        <Button secondary>Test</Button>
   </ComponentGrid> 
)