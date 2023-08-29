// import "./App.css";
import React from "react";
import { useState } from "react";
// import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import '../Styles/Todo.css';


function Todo() {
  const [complete, setComplete] = useState(false);
  const [allTodos, setallTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [count, setCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [completedTodo, setCompletedTodos] = useState([]);

  function GetCount() {
    setCount(allTodos.length);
  }                                             //these to display the count
  function GetcompleteCount() {
    setCompleteCount(completedTodo.length);
  }
  const handleAddTodo = () => {
    let newTodo = {
      title: newTitle, //to store new title
    };
    let updatedTodo = [...allTodos]; //copying the previous array using spread operator
    updatedTodo.push(newTodo); // pushing new todo item itll updated with previous val as well as new val
    setallTodos(updatedTodo);
    setNewTitle('')
  };
  const handleDelete = index => {         //for handling the delete click
    let delTodo = [...allTodos];            //making another copy of previous state
    delTodo.splice(index);                  //splice will remove at a specific index (so passed index)  from copied array
    setallTodos(delTodo);                      //assigning the updated, which is not having the item removed
  };

  const handleComplete = (index) => {       //getting the index 
    let filterTodo = {                      
      ...allTodos[index],                   //item from all todo  finding that element for which completed was triggered
    };
    let updatedCompletedList = [...completedTodo, filterTodo];  //pushing the new completed ones
    setCompletedTodos(updatedCompletedList);
    handleDelete(index);
  };

  useEffect(() => {   //this will run when we refrash a page that is why useeffect
    GetCount();
    GetcompleteCount();
  });

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>

      <div className="main-todo">
        <div className="input-todo">
          <div className="input-item">
            <label htmlFor="" style={{ marginBottom: "1rem" }}>
              <h3>Title</h3>
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="what do you want to do"
              maxLength={20}
            />
          </div>

          <div className="input-item">
            <button onClick={handleAddTodo} type="button" className="addBtn">
              <b>ADD</b>
            </button>
          </div>
        </div>

        <div className="done-btns">
          <button
            className={`btn2 ${complete === false && "active"}`}
            onClick={() => setComplete(false)}
          >
            <b>
              <span>{count}</span> TO-DO{" "}
            </b>
          </button>
          <button
            className={`btn2 ${complete === true && "active"}`}
            onClick={() => setComplete(true)}
            style={{ position: "absolute", right: "0" }}
          >
            <span>{completeCount} </span>
            <b> COMPLETED</b>
          </button>
        </div>
        <div className="all-todo">
          {complete === false &&
            allTodos.map((item, index) => (
                <div className="todo-item" key={index}>
                  <h3>{item.title}</h3>
                  <div className="icon">
                    <i 
                      style={{ color: "#ff1a1a" }}
                      class="bi bi-trash3-fill"
                      onClick={() => handleDelete (index)}
                    ></i>
                    <i 
                      style={{ color: "#66b366" }}
                      class="bi bi-check-lg"
                      onClick={() => handleComplete (index)} 
                    ></i>   
                  </div>
                </div>
             
            ))}
          {complete === true &&
            completedTodo.map((item, index) => {
              return (
                <div className="todo-item" key={index}>
                  <h3>{item.title}</h3>
                </div>
                
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
