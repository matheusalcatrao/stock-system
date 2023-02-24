import React from 'react'
import { Row } from 'react-flexbox-grid'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Item, Name, Description, Price, Container } from './styles'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/Product'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../firebaseConfig'
import { Button } from '@chakra-ui/react'

export const ItemComponent: React.FC<{ product: ProductType }> = ({
  product,
}) => {
  const { name, description, price, id } = product

  const removeProduct = async () => {
    try {
      const db = getFirestore(firebaseApp)
      await deleteDoc(doc(db, 'products', id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Item>
      <Container>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Container>
      <Container>
        <Price>R${price.toString().replace('.', ',')}</Price>
        <Row>
          <Button onClick={removeProduct}>
            <DeleteIcon color="red.500" />
          </Button>
          <Link to="/product">
            <EditIcon />
          </Link>
        </Row>
      </Container>
    </Item>
  )
}
