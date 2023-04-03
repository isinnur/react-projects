import './App.css';
import { useState } from 'react';
import React from 'react'
import { AiOutlineDelete, AiFillEdit, AiOutlineCheckCircle } from "react-icons/ai";


const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isediting, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  function addItem() {
    if (!newItem) {
      alert('Enter an item')
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(olditems => [...olditems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id != id);
    setItems(newArray);
  }

  function toggleCompleted(id) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    });
    setItems(updatedItems);
  }

  function editItem(id) {
    setEditItemId(id);

  }

  function saveItem(id) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: newItem
        }
      }
      return item;
    });
    setItems(updatedItems);
    setEditItemId(null);
    setNewItem("");
  }


  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='form'>
        < input type='text' placeholder='add an item'
          className='input' value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value)
          }} />

        <button button className='add' onClick={() => addItem()} > Add</button >
      </div >

      <ul className='list'>
        {items.map(item => {
          return (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
              {editItemId === item.id ? (
                <div>
                  <input className='save-input'
                    type='text'
                    value={newItem}
                    onChange={(e) => {
                      setNewItem(e.target.value)
                    }}
                  />
                  <button className='save-btn' onClick={() => saveItem(item.id)}>Save</button>
                </div>
              ) : (
                <div>
                  {item.value}
                </div>
              )}
              <div className='icons'>
                <AiOutlineDelete className='delete' onClick={() => deleteItem(item.id)} />
                {editItemId === item.id ? (
                  null
                ) : (
                  <AiFillEdit className='edit' onClick={() => editItem(item.id)} />
                )}
                <AiOutlineCheckCircle className='tick' onClick={() => toggleCompleted(item.id)} />
              </div>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default App
