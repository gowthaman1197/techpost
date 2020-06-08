import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName: '',
             emailId: '',
             mobileNo: '',
             topic: '',
             subject: '',
        }
    }
    
    //Full Name
    handleFullName = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    //Email Id
    handleEmailId = (event) => {
        this.setState({
            emailId: event.target.value
        })
    }

    //Mobile Number
    handleMobileNo = (event) => {
        this.setState({
            mobileNo: event.target.value
        })
    }

    //Topic 
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    //Subject 
    handleSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    //Submit
    handleSubmit = (event) => {
        alert(`${this.state.fullName} ${this.state.mobileNo} ${this.state.emailId} ${this.state.topic} ${this.state.subject}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 className="text-center mt-4">To become a writer with us</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 offset-4 col-lg-4 offset-4">
                        <form className="mt-4 mb-3" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name" id="name" value={this.state.fullName} onChange={this.handleFullName}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" id="email" value={this.state.emailId} onChange={this.handleEmailId}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile no" id="mobileno" value={this.state.mobileNo} onChange={this.handleMobileNo}/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={this.handleTopic}>
                                    <option value='' hidden>Which topic are you interested to write with us</option>
                                    <option value="Android">Android</option>
                                    <option value="iOS">iOS</option>
                                    <option value="Windows">Window</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>                            
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" style={{resize: 'none'}} placeholder="What do you have in your mind" onChange={this.handleSubject} value={this.state.subject}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;

