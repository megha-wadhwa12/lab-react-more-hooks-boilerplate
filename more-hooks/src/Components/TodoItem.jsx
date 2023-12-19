import React from 'react'

const TodoItem = ({item: {data,isHidden} ,index,dispatch}) => {
    console.log("isHidden: ", isHidden);
  return (
    <div style={{
        backgroundColor: "purple",
        width: "90vw",
        padding: "5px",
        margin: "20px",
        filter: `${isHidden?"blur(2px)":"blur(0px)"}`
    }}>
        <h3>{isHidden ? "This Content is Hidden": data}</h3>
        <button onClick={()=>{
            dispatch({type: "CHANGE_ISHIDDEN" , payload: index})
        }}>Toggle</button>
    </div>
  )
}

export default TodoItem