import React from 'react';

export default class Page3 extends React.Component {

    state = {
        login: localStorage.getItem('login'),
        email: localStorage.getItem('email'),
        pwd: localStorage.getItem('pwd'),
        pwd_conf: localStorage.getItem('pwd_conf'),
        fname: localStorage.getItem('fname'),
        lname: localStorage.getItem('lname'),
        age: localStorage.getItem('age'),
        addInfo: localStorage.getItem('addInfo')
    }

    gotoPage2 = () => {
        this.props.history.push('/Page2');
    }

    resetData = () => {
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <h3>Sending data</h3>
                <form className="inputs3">
                    <div>
                        <p id="login_p3"> Login</p>
                        <input id="login3" value={this.state.login} />
                    </div>
                    <div>
                        <p id="email_p3">Email</p>
                        <input id="email3" value={this.state.email} />
                    </div>
                    <div>
                        <p id="pwd_p3">Password</p>
                        <input id="pwd3" type="password" value={this.state.pwd} />
                    </div>
                    <div>
                        <p id="pwd_conf_p3">Confirm password</p>
                        <input id="pwd_conf3" type="password" value={this.state.pwd_conf} />
                    </div>
                    <div>
                        <p id="fname_p3">First name</p>
                        <input id="fname3" value={this.state.fname} />
                    </div>
                    <div>
                        <p id="lname_p3">Last name</p>
                        <input id="lname3" value={this.state.lname} />
                    </div>
                    <div>
                        <p id="age_p3">Age</p>
                        <input id="age3" value={this.state.age} />
                    </div>
                    <div>
                        <p id="addInfo_p3">Additional Information</p>
                        <input id="addInfo3" value={this.state.addInfo} />
                    </div>
                </form>
                <input id='page3_back_btn' type='submit' value='back' onClick={this.gotoPage2}/>
                <input id='reset_btn' type='submit' value='remove data' onClick={this.resetData}/>
            </div>
        )
    }
}