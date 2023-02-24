import React from 'react'
import { Sidebar } from '../../components/Sidebar'

import { Content } from './styles'
import { ItemComponent } from '../../components/Item'
import { firebaseApp } from '../../firebaseConfig'
import { collection, getFirestore, getDocs } from 'firebase/firestore'
import { ProductType } from '../../types/Product'
import { Spinner } from '@chakra-ui/react'

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState<Array<ProductType>>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  const loadProducts = async () => {
    try {
      if (loading) return
      setLoading(true)
      const db = getFirestore(firebaseApp)
      const querySnapshot = await getDocs(collection(db, 'products'))
      querySnapshot.forEach((doc) => {
        if (!doc) return
        const product: any = { id: doc.id, ...doc.data() }
        setProducts((old) => [...old, product])
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadProducts()
  }, [])

  return (
    <Sidebar>
      <Content>
        {loading && <Spinner />}
        {products.map((product) => (
          <ItemComponent key={product.id} product={product} />
        ))}
      </Content>
    </Sidebar>
  )
}
