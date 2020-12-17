import { StrictMode } from 'react'
import { render } from 'react-dom'

const App = () => <div>Yo yo yo!</div>

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
