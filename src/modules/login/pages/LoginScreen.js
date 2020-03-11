import React, {Component}  from 'react';
import {  
  Link,
  // withRouter,
  // Route,
  // Redirect,
} from 'react-router-dom'
//import FormGroup from './form-group'


class LoginScreen extends Component {

  state = {
    email: '',
    senha: '',
    mensageErro: null,
    logar: false,
  }

  // handlelogin = () => {
  //    this.setState(() => ({
  //       logar: true
  //     }))
  // }



    

/*  
 entrar = () => {
    axios
      .post('http://localhost:8080/api/usuarios/autenticar', {
        email: this.state.email,
        senha: this.state.senha
      }).then(response => {
        localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
        this.props.history.push('/enquete')
      }).catch(erro => {
        this.setState({ mensageErro: erro.response.data })
      })

  }
  */
    // prepareLogin = () => {
    //   this.props.history.push('/enquete')
    // }

    //arrumar mensagem erro

 

  render() {

   
    return (
      <div>
       
          <div className="container">
          <div className="header">
              <div>
                <span className="logo_img"></span>
                <span className="login_text">FAZER LOGIN COM SIGAA</span>
              </div>
            </div>
         
          <div>
            <span className="smartufs"></span>
          </div>
          <div>
            <span className="dau"></span>
          </div>
          <div>
            <span className="dcomp"></span>
          </div>

         

          

          <div className="form-group">
            <input type="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              className="form-control1" id="exampleInputEmail1"
              placeholder="Usuário">
            </input>
            </div>
            <div className="form-group">
              <input type="password"
                value={this.state.senhal}
                onChange={e => this.setState({ senha: e.target.value })}
                className="form-control2"
                id="exampleInputPassword1"
                placeholder="Senha">
              </input>
            </div>
            <Link key={'/enquete'} to={'/enquete'} className="btn btn-primary">Login</Link>

          </div>
          
         
         
         
         
       
      </div>
    );
  }
}

export default LoginScreen;