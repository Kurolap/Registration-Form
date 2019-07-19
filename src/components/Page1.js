import React from 'react';

export default class Page1 extends React.Component {

    state = {
        login: localStorage.getItem('login'),
        email: localStorage.getItem('email'),
        pwd: localStorage.getItem('pwd'),
        pwd_conf: localStorage.getItem('pwd_conf')
    }

    handleLoginChange = (e) => {
        const value = e.target.value;
        this.setState({login: value});
    }

    validateEmail = () => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(this.state.email).toLowerCase());
    }

    handleEmailChange = (e) => {
        const value = e.target.value;
        this.setState({email: value});
    }

    handlePwdChange = (e) => {
        const value = e.target.value;
        this.setState({pwd: value});
    }

    handlePwdConfChange = (e) => {
        const value = e.target.value;
        this.setState({pwd_conf: value});
    }

    checkPassword = () => {
        return (this.state.pwd !== this.state.pwd_conf);
    }

    gotoPage2 = () => {
        localStorage.setItem('login', document.getElementById('login').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('pwd', document.getElementById('pwd').value);
        localStorage.setItem('pwd_conf', document.getElementById('pwd_conf').value);
        this.props.history.push('/Page2');
    }

    render() {
        return (
            <div>
                <h3>Authentification</h3>
                    <form>
                        <div>
                            <p id="login_p"> Login</p>
                            <input id="login" className="inputs" placeholder="Enter login" onBlur={this.onChange1} value={this.state.login} onChange={this.handleLoginChange} />
                            {!this.state.login && <span className='error-message-required'>Login is required</span>}
                        </div>
                        <div>
                            <p id="email_p">Email</p>
                            <input id="email" className="inputs" placeholder="Enter Email" value={this.state.email} onBlur={this.validateEmail} onChange={this.handleEmailChange} />
                            {!this.state.email && <span className='error-message-required'>Email is required</span>}
                        </div>
                        <div>
                            <p id="pwd_p">Password</p>
                            <input id="pwd" className="inputs" type="password" placeholder="Enter password" value={this.state.pwd} onChange={this.handlePwdChange} />
                            {!this.state.pwd && <span className='error-message-required'>Password is required</span>}
                        </div>
                        <div>
                            <p id="pwd_conf_p">Confirm password</p>
                            <input id="pwd_conf" className="inputs" type="password" placeholder="Enter password again" value={this.state.pwd_conf} onChange={this.handlePwdConfChange} onBlur={this.checkPassword}/>
                            {!this.state.pwd_conf && <span className='error-message-required'>Password confirmation is required</span>}
                        </div>
                    </form>
                          {!this.validateEmail() && <div id='inv_email' className='error-message-invalid'>Invalid email</div>}
                          {this.checkPassword() && <div id='inv_pwd' className='error-message-password'>Your password and confirmation password do not match!</div>}
                    <input id='page1_cont_btn' type='submit' value='continue' onClick={this.gotoPage2} disabled={!this.state.login || !this.state.email || !this.state.pwd || !this.state.pwd_conf}/>
            </div>
        )
    }
}