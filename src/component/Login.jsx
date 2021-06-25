import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            PassWord: '',
            userList: [],
        }
    }
    async componentDidMount() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');            
            console.log(result);
            const result_JSON = await result.json();
            this.setState({userList:result_JSON})
            this.setState({userName:result_JSON}) 
            this.setState({Password:result_JSON})         

               console.log(this.state.userList);
        } catch (error) {
            console.log(error);
        }   
         
    }
    handleClick = () => {     
        
        if (this.state.userName !== this.state.userList) {
          console.log('Username incorrect')
        } else if (this.state.PassWord!== this.userList.adress.city){
            console.log('PassWord incorrect')
        }else{
            {this.props.history.push('/userList')}
        }
      } 


    render() {

        return (
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control border-dark " placeholder=" userName" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control border-dark" placeholder="PassWord" aria-label="Last name" />
                </div>
                <button onClick={this.handleClick}>Valider</button>
            </div>

        )
    }
}

export default Login