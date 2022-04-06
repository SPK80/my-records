import { useState } from 'react';
import Button from './records/Button.jsx';

export function Login(params) {

	function tryLogin() {
	}

	function onUserNameChanged(value) {
	}

	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	return (
		<div>
			<input
				onChange={event => onUserNameChanged(event.target.value)}
				value={userName}
			>
			</input>

			<Button
				caption='Login'
				click={tryLogin} />

		</div>
	);
}
