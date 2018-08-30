import React, { Component } from 'react';
import './index.css';
export default class atas extends Component {
  render() {
    return (
      <div>
        <div class="top-bar">
          <div class="container">
            <div class="float-left">
              <p>
                <i class="fa fa-phone" />
                Any Questions? Call Us: 031-3535094
              </p>{' '}
            </div>
            <div class="top-right">
              <ul>
                {' '}
                <li>
                  <a
                    title="Login"
                    href="http://eazyholidaytour.com/wp-login.php?redirect_to=http%3A%2F%2Feazyholidaytour.com%2F">
                    <span class="fa fa-sign-in" />
                    Login{' '}
                  </a>
                </li>
                <li>
                  <a
                    title="Register Now"
                    href="http://eazyholidaytour.com/register/">
                    <span class="fa fa-user" /> Register Now{' '}
                  </a>
                </li>{' '}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
