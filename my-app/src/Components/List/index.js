import React from 'react';

export default function List(prop) {

    return  (
    <div>
        <h1>To Do's List:</h1>
         {prop.todoList.map((item, index) => (
        <div index={index}>
        <ul>
          <li>{item}</li>
        </ul>
        <button onClick={() => prop.removeFunction(index)}>Delete</button>
        </div>
        ))}
    </div>
    );
}
