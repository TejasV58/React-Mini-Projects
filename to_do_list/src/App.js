import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState({ isAlert: false, msg: "", msgClass: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const alertData = { isAlert: false, msg: "", msgClass: "" };
      setAlert(alertData);
    }, 5000)
    return () => {
      clearTimeout(timer);
    }
  },[alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const listItem = { id: new Date().getTime().toString(), item };
      setList([...list, listItem]);
      console.log(list);
      setAlert({ isAlert: true, msg: "Task Added Successfully", msgClass: "alert-success" });
      setItem("");
    }
    if (!item) {
      setAlert({
        isAlert: true,
        msg: "Please Enter a Task!",
        msgClass: "alert-danger",
      });
    }
  };

  const handleEdit = () => {
    if (item) {
      const newItems = list.filter((i) => editId !== i.id);
      setList([...newItems, { id: editId, item: item }]);
      setAlert({
        isAlert: true,
        msg: "Task Edited Successfully",
        msgClass: "alert-success",
      });
      setItem("");
    }
    else {
      setAlert({
        isAlert: true,
        msg: "Value can't be Empty",
        msgClass: "alert-danger",
      });
    }
    setIsEdit(false);
  };

  return (
    <>
      <section className="section-center">
        {alert.isAlert && <Alert msgClass={alert.msgClass} msg={alert.msg} />}
        <form className="grocery-form">
          <h3>To Do List</h3>

          <div className="form-control">
            <input
              className="grocery"
              type="text"
              placeholder="eg. Water the plants"
              value={item}
              id="inputTask"
              onChange={(e) => setItem(e.target.value)}
            />
            {!isEdit && (
              <button
                className="submit-btn"
                onClick={handleSubmit}
                id="submit-btn"
              >
                Submit
              </button>
            )}

            {isEdit && (
              <button
                className="submit-btn"
                onClick={handleEdit}
                id="submit-btn"
              >
                Edit
              </button>
            )}
          </div>
        </form>

        <List
          list={list}
          setItem={setItem}
          setList={setList}
          setAlert={setAlert}
          handleEdit={handleEdit}
          setIsEdit={setIsEdit}
          setEditId={setEditId}
        />
      </section>
    </>
  );
}

export default App;
