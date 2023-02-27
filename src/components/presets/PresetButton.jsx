import React, { useEffect, useContext, useState } from "react";
import {
  addDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import UserContext from "../../context/userContext";

const PresetButton = ({ sequence, setSequence, setPlaying }) => {
  const [selectOptions, setSelectOpitons] = useState([]);
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const { loginUser } = useContext(UserContext);
  const importHandler = async () => {
    await getDocs(collection(db, `${loginUser}`)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSelectOpitons(newData);
    });
  };

  useEffect(() => {
    importHandler();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      const ref = collection(db, `${loginUser}`); // Firebase creates this automatically
      let data = {
        testData: {
          sequence0: sequence[0],
          sequence1: sequence[1],
          sequence2: sequence[2],
          sequence3: sequence[3],
        },
        name: name,
      };
      try {
        addDoc(ref, data);
        setName("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSelect = (e) => {
    setPlaying(false);
    const newOption = selectOptions.filter((option) => {
      return option.id === e.target.value;
    });
    const newSequence = [
      newOption[0].testData.sequence0,
      newOption[0].testData.sequence1,
      newOption[0].testData.sequence2,
      newOption[0].testData.sequence3,
    ];
    setSequence(newSequence);
  };

  const handleSelectDelete = (e) => {
    setDeleteId(e.target.value);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleDelete = () => {
    deleteDoc(doc(db, `${loginUser}`, deleteId));
  };

  return (
    <>
      {selectOptions.length !== 0 && (
        <>
          <select className="options" onChange={handleSelect}>
            <option selected disabled>
              Import Loops
            </option>
            {selectOptions.map((loop) => (
              <option key={loop.id} value={loop.id}>
                {loop.name}
              </option>
            ))}
          </select>
        </>
      )}
      <form onSubmit={submitHandler}>
        <input
          value={name}
          placeholder="Name Loop"
          type="text"
          name="name"
          onChange={handleInputChange}
          style={{ display: "inline" }}
        ></input>
        <button>Save</button>
      </form>
      {selectOptions.length !== 0 && (
        <>
          <select
            className="options"
            onChange={handleSelectDelete}
            style={{ display: "inline" }}
          >
            <option selected disabled>
              Delete loop
            </option>
            {selectOptions.map((loop) => (
              <option key={loop.id} value={loop.id}>
                {loop.name}
              </option>
            ))}
          </select>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default PresetButton;
