import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/posts/app';
import PostsNew from './components/posts/posts_new';
import Ads from './components/ads';
import Play from './components/anim/play';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>	
    		<Route path="/play" component={Play} />
    		<Route path="/ads" component={Ads} />

        <Route exact path="/" component={App} />
        <Route path="/posts/new" component={PostsNew} />
    		
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
