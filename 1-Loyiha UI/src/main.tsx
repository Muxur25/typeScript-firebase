import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ThemeProvider } from './components/providers/theme-provider'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='dark'>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
