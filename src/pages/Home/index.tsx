import React from 'react'
import { Sidebar } from '../../components/Sidebar'

import { Content } from './styles'
import { ItemComponent } from '../../components/Item'
import { firebaseApp } from '../../firebaseConfig'
import { collection, getFirestore, getDocs } from 'firebase/firestore'
import { ProductType } from '../../types/Product'

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<Array<ProductType>>([])

  const loadProducts = async () => {
    const db = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(db, 'products'))
    querySnapshot.forEach((doc) => {
      if (!doc) return
      const product: any = { id: doc.id, ...doc.data() }
      setProducts([product])
    })
  }

  React.useEffect(() => {
    loadProducts()
  }, [])

  return (
    <Sidebar>
      <Content>
        {products.map((product) => (
          <ItemComponent key={product.id} product={product} />
        ))}
      </Content>
    </Sidebar>
  )
}
