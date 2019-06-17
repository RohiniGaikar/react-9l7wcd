import React, { Component } from 'react';
import { render } from 'react-dom';
//import Hello from './Hello';
import './style.css';

function ActiveFriends (props) {
      return (
        <div>
          <h2>Active Friends</h2>
          <ul>
            {props.list.map((friend) => (
              <li key={friend.name}>
                <span>{friend.name}</span>
                <button onClick={() => props.onRemoveFriend(friend.name)}>Remove</button>
                <button onClick={() => props.onToggleFriend(friend.name)}>Deactivate</button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    export default ActiveFriends;