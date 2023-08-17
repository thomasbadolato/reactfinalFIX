import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Spinner } from 'reactstrap'



function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Items');
    setLoader(true);
    if (categoryId) {
      const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        .finally(() => setLoader(false));
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        .finally(() => setLoader(false));
    }
  }, [categoryId])

  if (loader) {
    return <Spinner />
  }

  return (
    <div>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer