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

            result_JSON.map(user =>
                this.setState({
                    userList: [...this.state.userList, { username: user.username, password: user.address.city }]

                }))
            console.log(this.state.userList);
        } catch (error) {
            console.log(error);
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
            </div>

        )
    }
}

export default Login