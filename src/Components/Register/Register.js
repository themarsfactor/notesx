import React from "react"

class Register extends React.Component{

    constructor(props){
        super(props)
        this.props = props
    }

    loadPage = (page) => {
        
        this.props.loadPage(page)


    }


    render(){

        return (
            <div>
                <h4>Register Now</h4>
                <input />
                <button className="btn btn-primary" onClick={() => this.props.reg()}>Register</button>
                <p>Already registered? <strong onClick={() => this.loadPage('login')}>Log in</strong> instead</p>
            </div>
        )

    }


}


export default Register