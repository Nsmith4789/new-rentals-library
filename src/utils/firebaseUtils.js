import { collection, getDocs } from "firebase/firestore";

async function getAllDocuments(db, collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    documents.push({ id: doc.id, ...doc.data() });
  });
  console.log(documents);
}

export { getAllDocuments };
