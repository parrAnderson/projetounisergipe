import React, {Component} from 'react';

import LoginScreen from './modules/login/pages/LoginScreen'

import UserComment from './modules/comments/pages/UserComment'  
import { Route, Switch} from 'react-router-dom'

// import Home from './modules/home/pages/Home';

import Enquete from './modules/enquente/pages/Enquete';

 
export class Routes extends Component {
    render(){
        return(
            <main className="container">
                <Switch>
                    <Route exact path="/" component={LoginScreen}/>
                    <Route path="/login" component={LoginScreen} />                  
                    <Route path='/seecomment' component={UserComment} />        
                    <Route path='/enquete' component={Enquete} />              
                </Switch>
          </main>
    
        )
    }
    
}

export default Routes;