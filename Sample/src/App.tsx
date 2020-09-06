import React, { FC } from 'react';

export interface AppProps {
	text: string;
}

export const App: FC<AppProps> = ({ text }) => {
	return (
		<>
			{text}
		</>
	);
}

export default App;
