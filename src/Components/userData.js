import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//collection ref
const colRef = collection(db, "users");

// let usersdata = [];
// //get collections
// getDocs(colRef)
//   .then((snapshot) => {
//     usersdata = [];

//     snapshot.docs.forEach((doc) => {
//       usersdata.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(usersdata);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// export default usersdata;

//get collections

let usersdata = [];

getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      usersdata.push({ ...doc.data(), id: doc.id });
    });

    return usersdata;
  })
  .catch((err) => {
    console.log(err);
  });

export default usersdata;
