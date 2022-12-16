import React, {Component} from 'react'
import './Authority.css'

export default class Authority extends Component {

    constructor() {
        super();
        this.state = {
            inputName:  <input type='email' id="name" className="input-style" name="name"
                               onChange={event => this.onChangeLoginHandler(event)}
            />,
            inputPassword: <input type='password' className="input-style"  name="password"
                                  onChange={event => this.onChangePassHandler(event)}
            />,
            logCorrect: false,
            passCorrect: false,
        };
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        console.log('Відправлено');
        if(this.state.logCorrect && this.state.passCorrect){
            window.location.assign('http://localhost:3000/dashboard');
        }

    }

    onChangeLoginHandler = (event) => {
        const logPass = "yana.buga129@gmail.com";
        if(event.target.value != logPass){
            this.setState( {inputName:  <input type='email' id="name" className="input-error" name="name"
                                               onChange={event => this.onChangeLoginHandler(event)}
                />,
                logCorrect: false,});
        }else{
            this.setState( {inputName:  <input type='email' id="name" className="input-style" name="name"
                                               onChange={event => this.onChangeLoginHandler(event)}
                />,
                logCorrect: true,});
        }
    }

    onChangePassHandler = (event) => {
        const logPass = "Yana12";
        if(event.target.value != logPass){
            this.setState( {inputPassword: <input type='password' className="input-error"  name="password"
                                                  onChange={event => this.onChangePassHandler(event)}
                />,
                passCorrect: false,});
        }else{
            this.setState( {inputPassword: <input type='password' className="input-style"  name="password"
                                                  onChange={event => this.onChangePassHandler(event)}
                />,
                passCorrect: true,});
        }
    }

    render() {
        return(
            <div className='Authority'>
                <div>
                    <h1>Log to Web App</h1>
                    <form className='AuthorityForm' onSubmit={this.handleSubmit}>
                        <label htmlFor="name">E-mail</label>
                        {this.state.inputName}

                        <label htmlFor="password">Password</label>
                        {this.state.inputPassword}

                        <button type='submit' >Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
