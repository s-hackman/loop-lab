import React, { useEffect } from "react";
import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../firebase_setup/firebase";

const PresetButton = ({ sequence, setSequence }) => {
  const importHandler = async () => {
    await getDocs(collection(db, "sequence")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      const newSequence = [
        newData[newData.length - 1].testData.sequence0,
        newData[newData.length - 1].testData.sequence1,
        newData[newData.length - 1].testData.sequence2,
        newData[newData.length - 1].testData.sequence3,
      ];

      setSequence(newSequence);
      console.log(newData.length - 1);
    });
  };

  useEffect(() => {
    importHandler();
  }, []);

  const submitHandler = () => {
    const ref = collection(db, "sequence"); // Firebase creates this automatically
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

  return (
    <>
      <button onClick={submitHandler}>Save</button>
      <button onClick={importHandler}>Import Loop</button>
    </>
  );
};

export default PresetButton;
