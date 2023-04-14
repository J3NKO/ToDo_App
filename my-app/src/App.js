import './App.css';
import {React, useState} from 'react';
import List from './Components/List';
import Input from './Components/Input';

function App() {
  
  const [listOfTodos, setlistOfTodos] = useState([]); 

  const [userInput, setuserInput] = useState('');

  const handleInputChange = (event) => {
    setuserInput(event.target.value);
  };

  const [updatedUserInput, setupdatedUserInput] = useState(userInput);

  const handleButtonClick = (event) => {
    setlistOfTodos((prevList) => [...prevList, userInput]);
  };

  function removeElement(index) {
    setlistOfTodos((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList; 
    });
  };
  

  
  return (
    <div className="App">
      <Input buttonClick={handleButtonClick} inputFunction={handleInputChange} ></Input>
      <List todoList={listOfTodos} input={userInput} removeFunction={removeElement}></List>
    </div>
  );
}

export default App;
