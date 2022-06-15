import React from "react"

class Login extends React.Component{

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
                <h4>Log in</h4>
                <input />
                <button className="btn btn-primary">Log in</button>
                <p>Not registered? <strong onClick={() => this.loadPage('register')}>Register</strong> now</p>
            </div>
        )

    }


}

export default Login