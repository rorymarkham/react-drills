import React, {Component} from 'react'

class Login extends Component {
    constructor(){
    super()
    
     this.state = {
        username: '',
        password: ''
    }
}
    handleUsernameChange(name) {
    this.setState({username: name})
    }
    handlePasswordChange(pass){
        this.setState({password: pass})
    }




    render(){
        return
    }
}

export default Login