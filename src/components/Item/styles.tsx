import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Item = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #1fe0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: -12px 10px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 15px;
`

export const Name = styled.h1`
  color: #333;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`
export const Description = styled.h2`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
`

export const Price = styled.text`
  color: #333;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`
