import React, {Component} from 'react';
import { Link } from 'react-router-dom'

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
      <div className="row mt-5">
        <div className="col">
          <form className="text-center">

            <div className="form-group">
              <div className="logo_img"></div>
            </div>

            <div className="form-group">
              <span className="login_text">FAZER LOGIN COM SIGAA</span>
            </div>

            <div className="form-group">
              <input type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                id="exampleInputEmail1"
                className="form-control1"
                placeholder="Usuário">
              </input>
            </div>

            <div className="form-group">
              <input type="password"
                value={this.state.senhal}
                onChange={e => this.setState({ senha: e.target.value })}
                id="exampleInputPassword1"
                className="form-control1"
                placeholder="Senha">
              </input>
            </div>

            <div className="form-group">
              <Link key={'/enquete'} to={'/enquete'} className="btn btn-primary">Login</Link>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default LoginScreen;