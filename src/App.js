import React from 'react';
import Todos from './Todos'
import AddFor from './AddForm'
import AddForm from './AddForm';


class App extends React.Component {
  state = {
    todos:[
      {id:1, content: 'Buy some groceries'},
      {id:2, content: 'Play Fifa'},
      {id:2, content: 'Take your girlfriend out'}
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos:todos
    })
  }
  addForm = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })

  }
  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">What should I do</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
       <AddForm addForm ={this.addForm} />
    </div>
  );
}
}

export default App;
