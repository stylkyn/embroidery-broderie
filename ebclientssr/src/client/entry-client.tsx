import React, { type FC } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const container = document.getElementById('app');

const FullApp: FC = () => (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

if (import.meta.hot != null || container?.innerText == null) {
	const root = createRoot(container!);

	root.render(<FullApp />);
} else {
	hydrateRoot(container, <FullApp />);
}
