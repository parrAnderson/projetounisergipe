import React from 'react'

import LoginScreen from './modules/login/pages/LoginScreen'
import App from './App'
import Enquete from './modules/enquente/pages/Enquete';
import UserComment from './modules/comments/pages/UserComment'  
import { Route, Switch, HashRouter} from 'react-router-dom'

 
function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/login" component={LoginScreen} />
                <Route path='/enqueteOld' component={App} />
                <Route path='/enquete' component={Enquete} />
                <Route path='/seecomment' component={UserComment} />
                
            </Switch>
        </HashRouter>

    )
}

export default Rotas