import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
console.clear();
console.log("start!!!");
// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
        //localStorage.setItem("myData", JSON.stringify(this.myData));
        //JSON.parse(localStorage.getItem("myData"));
        if(localStorage.myData == undefined){
            localStorage.setItem("myData", "[]");
        }
        this.myData = JSON.parse(localStorage.getItem("myData"));
        //this.myData = [{id:1, text:"111"}];
        if(this.myData.length){
            this.id = this.myData[this.myData.length-1].id;
        } else {
            this.id = 0;
        }
        console.log(this.id);
    }
    // Lifecycle method
    componentDidMount(){

        this.setState({data:this.myData});
        console.log(this.state.data);
    }
    // Add todo handler
    addTodo(val){
        // Assemble data
        const todo = {text: val, id: ++this.id};
        this.myData.push(todo);
        this.setState({data: this.myData});
        //update localStorage
        localStorage.setItem("myData", JSON.stringify(this.myData));
    }
    // Handle remove
    handleRemove(id){
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        this.myData = remainder;
        this.setState({data: this.myData});
        localStorage.setItem("myData", JSON.stringify(this.myData));
    }

    render(){
        // Render JSX
        return (
            <div>
                <Title todoCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }

}
ReactDOM.render(<TodoApp />, document.getElementById('container'));
