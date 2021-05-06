import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = (props) => {

  const list = props.list;
  const setItem = props.setItem ;
  const setList = props.setList ;
  const setAlert = props.setAlert ;
  const handleEdit =  props.handleEdit ;
  const setIsEdit =  props.setIsEdit ;
  const setEditId =  props.setEditId ;

  const handleRemove = (id) => {
    const newItems = list.filter((i) => i.id !== id);
    setList(newItems);
    setAlert({
      isAlert: true,
      msg: "Task removed Successfully",
      msgClass: "alert-danger",
    });
  }

  const removeAll = () => {
    setAlert({
      isAlert: true,
      msg: "All Tasks removed Successfully",
      msgClass: "alert-danger",
    });
    setList([]);
  };

  return (
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map((l) => {
              return (
                <article className="grocery-item" key={l.id}>
                  <p className="title">{l.item}</p>
                  <div className="btn-container">
                    <button
                      className="edit-btn"
                      onClick={() => { setItem(l.item); setIsEdit(true); setEditId(l.id) }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(l.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {list.length !== 0 && (
            <button className="clear-btn" onClick={removeAll}>
              Clear All
            </button>
          )}
        </div>
  );
}

export default List
