import React, { useState } from "react";

function App() {
  //as array listInput
  const [listInput, setListInput] = useState();
  //as array list
  const [lists, setLists] = useState([]);

  // handle change on input and store data temporary
  function handleChange(event) {
    //capture input value
    const newList = event.target.value;

    //update listInput
    setListInput(newList);
  }

  // handle button and store data permanently
  function handleBtn(lists) {
    //update list
    setLists((prevValue) => {
      return [
        //add prevValue in array
        ...prevValue,
        //add listInput in array
        listInput
      ];
    });
  }

  //create li based on item in array list
  function createlist(list) {
    return <li>{list}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listInput} />
        <button onClick={handleBtn}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* map = for each item will apply the function */}
          {lists.map(createlist)}
        </ul>
      </div>
    </div>
  );
}

export default App;
