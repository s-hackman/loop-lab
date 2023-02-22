import React, { useEffect, useContext, useState } from "react";
import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../firebase_setup/firebase";
import UserContext from "../../context/userContext";

const PresetButton = ({ sequence, setSequence }) => {
  const [selectOptions, setSelectOpitons] = useState([]);
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
  }, [selectOptions]);

  const submitHandler = () => {
    const ref = collection(db, `${loginUser}`); // Firebase creates this automatically
    let data = {
      testData: {
        sequence0: sequence[0],
        sequence1: sequence[1],
        sequence2: sequence[2],
        sequence3: sequence[3],
      },
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = (e) => {
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

  return (
    <>
      <button onClick={submitHandler}>Save</button>

      {selectOptions.length !== 0 && (
        <>
          <label>Change to your saved loops</label>
          <select onChange={handleSelect}>
            {selectOptions.map((loop) => (
              <option key={loop.id} value={loop.id}>
                {loop.id}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default PresetButton;
