import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            userList: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log(result);
            const result_JSON = await result.json();
            this.setState({ userList: result_JSON })

            console.log(this.state.userList);
        } catch (error) {
            console.log(error);
        }

    }
    onUserNameChange = (e) => {
        this.setState({ userName: e.target.value })

    }

    onPassWordChange = (e) => {
        this.setState({ passWord: e.target.value })
    }


    handleClick = () => {
        const { userList } = this.state
        for (let index = 0; index < userList.length; index++) {
            const element = userList[index]
            console.log(element.username, this.state.userName)
            console.log(element.address.city, this.state.passWord)
            if (element.username === this.state.userName && element.address.city === this.state.passWord) {
                this.props.setUser({ username: this.state.userName })
                this.props.history.push("/userList")

                console.log('yeahh!!')
                return;
            }
        };

        console.log('Username/password incorrect')
    }


    render() {

        return (
            <div className="row">
                <div className="col">
                    <input onChange={this.onUserNameChange} value={this.state.userName} type="text" className="form-control border-dark " placeholder=" userName" aria-label="First name" />
                </div>
                <div className="col">
                    <input onChange={this.onPassWordChange} value={this.state.passWord} type="text" className="form-control border-dark" placeholder="PassWord" aria-label="Last name" />
                </div>
                <button onClick={this.handleClick}>Valider</button>
            </div>

        )
    }
}

export default Login