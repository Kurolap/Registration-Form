import React from 'react';

export default class Page2 extends React.Component {

    state = {
        fname: localStorage.getItem('fname'),
        lname: localStorage.getItem('lname'),
        age: localStorage.getItem('age'),
        addInfo: localStorage.getItem('addInfo')
    }

    handleFnameChange = (e) => {
        const value = e.target.value;
        this.setState({fname: value});
    }

    handleLnameChange = (e) => {
        const value = e.target.value;
        this.setState({lname: value});
    }

    handleAgeChange = (e) => {
        const value = e.target.value;
        this.setState({age: value});
    }

    handleAddInfoChange = (e) => {
        const value = e.target.value;
        this.setState({addInfo: value});
    }

    validateAge = () => {
        const regex = /^[0-9]+$/;
        return regex.test(String(this.state.age).toLowerCase()) && this.state.age > 0 && this.state.age < 100;
    }

    gotoPage3 = () => {
        localStorage.setItem('fname', this.state.fname);
        localStorage.setItem('lname', this.state.lname);
        localStorage.setItem('age', this.state.age);
        localStorage.setItem('addInfo', this.state.addInfo);
        this.props.history.push('/Page3');
    }

    gotoPage1 = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Personal data</h3>
                    <form>
                        <div>
                            <p id="fname_p">First name</p>
                            <input id="fname" className="inputs" placeholder="Enter first name" value={this.state.fname} onChange={this.handleFnameChange} />
                            {!this.state.fname && <span className='error-message-required'>First name is required</span>}
                        </div>
                        <div>
                            <p id="lname_p">Last name</p>
                            <input id="lname" className="inputs" placeholder="Enter last name" value={this.state.lname} onChange={this.handleLnameChange} />
                            {!this.state.lname && <span className='error-message-required'>Last name is required</span>}
                        </div>
                        <div>
                            <p id="age_p">Age</p>
                            <input id="age" className="inputs" placeholder="Enter age" value={this.state.age} onBlur={this.validateAge} onChange={this.handleAgeChange} />
                            {!this.state.age && <span className='error-message-required'>Age is required</span>}
                        </div>
                        <div>
                            <p id="addInfo_p">Additional Information</p>
                            <input id="addInfo" className="inputs" placeholder="Enter an additional info" value={this.state.addInfo} onChange={this.handleAddInfoChange} />
                        </div>
                    </form>
                <div>
                        {!this.validateAge() && <div className='error-message-invalid'>Invalid age</div>}
                    </div>
                <input id='page2_cont_btn' type='submit' value='continue' onClick={this.gotoPage3} disabled={!this.state.fname || !this.state.lname || !this.state.age || !this.state.addInfo} />
                <input id='page2_back_btn' type='submit' value='back' onClick={this.gotoPage1}/>
            </div>
        )
    }
}