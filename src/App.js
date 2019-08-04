import React from 'react';
// import logo from './logo.svg';
import './App.css';
const Propfile = ({user}) => <div>name:{user.name}</div>

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }
  componentDidCatch(error, info) {
    // 显示错误的UI
    this.setState({hasError: true})
    // 同时输出错误日志
    console.log(error, info)
  }
  render () {
    if (this.state.hasError) {
      return <h1>Oop, something went wrong.</h1>
    }
    return this.props.children
  }
}
class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      user: {name: 'react'}
    }
  }
  onClick = () => {
    this.setState({user: null})
  }
  render () {
    return (
      <div>
        <ErrorBoundary>
          <Propfile user={this.state.user}></Propfile>
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
  }
}
export default App;
