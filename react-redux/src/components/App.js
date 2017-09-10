import React, { Component } from 'react';
import logo from '~/assets/images/logo.svg';
import { data } from '~/api/user_repos'
import DevTools from '~/containers/DevTools'

export default class App extends Component {
  renderData = (item, i) => {
    return (
      <div className="__gh-repo" key={i}>
        <div>
          <a href={item.url}>
            {item.name}
          </a>
          <ul>
            <li>{item.watchers_count} watchers</li>
            <li>{item.startgazers_count} startgazers</li>
          </ul>
        </div>
      </div>
    )
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        { data.map(this.renderData) }
      </div>
    );
  }
}
