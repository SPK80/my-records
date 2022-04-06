import { useState } from 'react';
import Button from '../records/Button.jsx';

export default function Login({ onLoged }) {

	function onSubmit(event) {
		event.preventDefault();
		console.log('onSubmit:', event);
		// onLoged(userId);
	}

	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label>
					<span>User</span>
					<input
						type="text"
						value={userName}
						onChange={event => setUserName(event.target.value)}
					/>
				</label>
			</div>

			<div>
				<label>
					<span>Password</span>
					<input
						type={showPassword ? "text" : "password"}
						value={userPassword}
						onChange={event => setUserPassword(event.target.value)}
					/>
				</label>
				<label>
					<input
						type="checkbox"
						checked={showPassword}
						onChange={(event) => setShowPassword(event.target.checked)}
					/>
					<span>show</span>
				</label>
			</div>
			<div>
				<Button
					caption='Login'
					type="submit"
					value="Submit"
				/>
			</div>
		</form>
	);
}
