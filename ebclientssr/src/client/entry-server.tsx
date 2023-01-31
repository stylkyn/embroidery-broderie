import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/space-before-function-paren
export function render(url: string) {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</React.StrictMode>,
	);
}
