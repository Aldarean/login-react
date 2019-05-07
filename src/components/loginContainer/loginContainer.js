import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class LoginContainer extends React.Component {
	render() {
		return (
			<div className="loginContainer">
				<header>
					<h1>Login Form</h1>
				</header>

				<section className="login-form__body">
					<div>
						<InputGroup>
							<Input placeholder="username" />
						</InputGroup>

						<InputGroup>
							<Input placeholder="password" type="password" />
						</InputGroup>

						<Button color="primary" size="lg" block>
							Block level button
						</Button>
					</div>
				</section>
			</div>
		);
	}
}

export default LoginContainer;
