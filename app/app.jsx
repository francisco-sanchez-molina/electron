import React from "react";
import ReactDom from 'react-dom'
import {Window, Content, PaneGroup, Pane} from "react-photonkit";
import {Router, Route, Link, hashHistory} from 'react-router'
import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Home from "./components/home.jsx"
import Sidebar from "./components/sidebar.jsx"
import Component from "./components/component.jsx"

import AppActions from "./actions/AppActions";
import ServiceActions from "./actions/ServiceActions";


require('../index.scss');

AppActions.addSidebarEntry( {name:'Home', link: '#/home'})
AppActions.addSidebarEntry( {name:'Pane 1', link: '#/component/pane1'})
AppActions.addSidebarEntry( {name:'Pane 2', link: '#/component/pane2'})

class App extends React.Component {
  render() {
    return (
      <Window>
        <Header/>
          <Content>
            <PaneGroup>
							<Sidebar/>
							<Pane className="padded-more">
								{this.props.children}
				      </Pane>
					</PaneGroup>
					</Content>
					<Footer/>
			</Window>
	  )
	}
}

var routes = (
				<Route component={App} path="/">
                <Route component={Home} path="/home"></Route>
								<Route component={Component} path="/component/:id"></Route>
								<Route component={Component} path="/*"></Route>
				</Route>
)

ReactDom.render( <Router history={hashHistory}>{routes}</Router>, document.getElementById("main"))

function autoRefresh(counter) {
    counter = counter || 3;
    ServiceActions.add({name: 'Service ' + counter});
    ServiceActions.shift();
    setTimeout(function(){
      autoRefresh(counter + 1);
    }, 3000);
}

autoRefresh();
