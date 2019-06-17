import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ActiveFriends from './ActiveFriends';
import InactiveFriends from './InactiveFriends';

import './style.css';



/* render(<App />, document.getElementById('App'));*/
 
    
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          friends: [
            {
              name: 'Jordyn',
              active: true,
            },
            {
              name: 'Mikenzi',
              active: true,
            },
            {
              name: 'Jake',
              active: false
            }
          ],
          input: '',
        }
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
        this.handleToggleFriend = this.handleToggleFriend.bind(this)
      }
      handleAddFriend() {
        this.setState((currentState) => {
          return {
            friends: currentState.friends.concat([{
              name: this.state.input,
              active: true
            }]),
            input: ''
          }
        })
      }
      handleRemoveFriend(name) {
        this.setState((currentState) => {
          return {
            friends: currentState.friends.filter((friend) => friend.name !== name)
          }
        })
      }
      handleToggleFriend(name) {
        this.setState((currentState) => {
          const friend = currentState.friends.find((friend) => friend.name === name)
          return {
            friends: currentState.friends.filter((friend) => friend.name !== name)
              .concat([{
                name,
                active: !friend.active
              }])
          }
        })
      }
      updateInput(e) {
        const value = e.target.value
        this.setState({
          input: value
        })
      }
      render() {
        return (
          <div>
            <input
              type='text'
              placeholder='new friend'
              value={this.state.input}
              onChange={this.updateInput}
            />
            <button onClick={this.handleAddFriend}>
              Submit
            </button>
            <div>
              <button onClick={() => this.setState({
                friends: []
              })}>Clear All</button>
            </div>
            <ActiveFriends
              list={this.state.friends.filter((friend) => friend.active === true)}
              onRemoveFriend={this.handleRemoveFriend}
              onToggleFriend={this.handleToggleFriend}
            />
            <InactiveFriends
              list={this.state.friends.filter((friend) => friend.active === false)}
              onToggleFriend={this.handleToggleFriend}
            />
          </div>
        )
      }
    }
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
