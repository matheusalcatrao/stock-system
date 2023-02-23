import React from 'react'
import { Row } from 'react-flexbox-grid'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Item, Name, Description, Price, Container } from './styles'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/Product'

export const ItemComponent: React.FC<{ product: ProductType }> = ({
  product,
}) => {
  const { name, description, price } = product
  return (
    <Item>
      <Container>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Container>
      <Container>
        <Price>R${price.toString().replace('.', ',')}</Price>
        <Row>
          <DeleteIcon color="red.500" />
          <Link to="/updateProduct">
            <EditIcon />
          </Link>
        </Row>
      </Container>
    </Item>
  )
}
