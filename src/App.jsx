import React, { useState } from 'react';
import { ToDoList  } from './ToDoList.jsx';
const App = ()=>{
    const [item,setitem] = useState();
    const AddItem = (event)=>{
        setitem(event.target.value)
    };
    const [items1,setitems] = useState([]);
    const items = ()=>{
        setitems((prevalue)=>{
            return [...prevalue,item];
        })
        setitem("");
    };
    const deleteItem = (id)=>{
        setitems((prevalue)=>{
            return prevalue.filter((currelement,index)=>{
                return index !== id;
            })
        });
    };
    return (
        <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List</h1>
                <br />
                <input type='text' placeholder='Add a Item' onChange={AddItem} value={item}/>
                <button onClick={items}>+</button>
                <ol>
                    {items1.map((val,index)=>{
                        return <ToDoList 
                        text={val}
                        key = {index}
                        id = {index}
                        onSelect = {deleteItem}
                        />
                    })}
                </ol>
            </div>
        </div>
        </>
    )
};
export {App};
