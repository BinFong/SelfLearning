import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    };
  }

  render() {
    return (
      <div className="home">
        <aside className="leftNav">
          <ul>
            <li>
              <NavLink to="/home/todo">todo</NavLink>
            </li>
            <li>
              <NavLink to="/form">login</NavLink>
            </li>
          </ul>
        </aside>
        <div className="right">
          {this.props.children}
        </div>
      </div>
    );
  }
}
