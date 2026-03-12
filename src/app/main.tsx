import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

import { Providers } from './providers'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('No root element found')
}

const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<Providers />
	</StrictMode>
)
