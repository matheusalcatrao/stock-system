import React from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { Form, Formik, Field } from 'formik'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../firebaseConfig'

// import { Container } from './styles';

export const Products: React.FC = () => {
  const handleSubmit = async (values: any) => {
    try {
      const db = getFirestore(firebaseApp)
      const docRef = await addDoc(collection(db, 'products'), {
        ...values,
        created_at: new Date(),
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <Sidebar>
      <Formik
        initialValues={{ name: '', description: '', price: 0 }}
        onSubmit={handleSubmit}
      >
        <FormControl
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Form>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl
                  mt={10}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel>Nome *</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }: any) => (
                <FormControl
                  mt={10}
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    {...field}
                    placeholder="Digite a descrição do produto"
                  />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="price">
              {({ field, form }: any) => (
                <FormControl
                  mt={10}
                  isInvalid={form.errors.price && form.touched.price}
                >
                  <FormLabel>Preço *</FormLabel>
                  <NumberInput
                    max={50}
                    min={10}
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button mt={10} colorScheme="teal" size="lg" type="submit">
              Cadastrar
            </Button>
          </Form>
        </FormControl>
      </Formik>
    </Sidebar>
  )
}
