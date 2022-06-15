import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from './Components/Register/Register'
import Login from "./Components/Login/Login"

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      is_user_registered: false
    }
  }

  registerUser = () => {
    
    //change the state of app to user is registered
    this.setState({
      is_user_registered: true
    })

  }

  goToPage = (page) => {

    switch(page){
      case "login":
        this.setState({
          is_user_registered: true
        })
        break
      
      case "register":
        this.setState({
          is_user_registered: false
        })
        break

    }
   

  }

  render(){

    let showCurrentUserStatus;
    if(this.state.is_user_registered == false){
      showCurrentUserStatus =  <Register loadPage={this.goToPage} reg={this.registerUser}/>
    }else{
      showCurrentUserStatus =  <Login loadPage={this.goToPage}/>
    }



    return (
      <div className="App">
        <header className="App-header">
          {showCurrentUserStatus}
        </header>
      </div>
    );

  }

}

export default App