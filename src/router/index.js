import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import Main from '../components/main';
import Search from '../components/search';
import Detail from '../components/detail';
import Reader from '../components/reader';
import Demo from '../components/demo';
import Demo2 from '../components/demo2';
const BasicRoute = () => (
  <div>
      <Switch>
         <Route
            path="/"
            render={props => (
                  <Switch>
                     <Route path="/" exact component={Main} />
                     <Route path="/search" exact component={Search} />
                     <Route path="/detail/:id" exact component={Detail} />
                     <Route path="/reader/:id" exact component={Reader} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
            )}
         />
      </Switch>
   </div>
);

export default BasicRoute;