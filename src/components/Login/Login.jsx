import { useState } from 'react';
import Button from '../records/Button.jsx';
import './Login.css';

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
		<div className='Login_Holder'>
			<form onSubmit={onSubmit}>
				<div>
					<span className='Login_Label'>User</span>
					<input
						type="text"
						value={userName}
						onChange={event => setUserName(event.target.value)}
					/>
				</div>
				<div>
					<span className='Login_Label'>Password</span>
					<input
						type={showPassword ? "text" : "password"}
						value={userPassword}
						onChange={event => setUserPassword(event.target.value)}
					/>
					<input
						type="checkbox"
						checked={showPassword}
						onChange={(event) => setShowPassword(event.target.checked)}
					/>
					<span>show</span>
				</div>
				<div>
					<Button
						caption='Login'
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</div>
	);
}
