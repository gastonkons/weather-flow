import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 10px 20px;
  background-color: #f5f5f5;
  width: fit-content;
  border-radius: 20px;

  @media (max-width: 1180px) {
    margin: 10px auto;
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormInput = styled.input`
  border: none;
  padding: 5px;
  outline: none;
  min-width: 250px;
  font-size: 0.9em;
  background-color: transparent;
  &:focus {
    border-bottom: 1px solid #ccc;
  }
`

export const FormButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #57DFB7;
  padding: 5px;
  margin: 0px 5px;
  outline: none;  
  background-color: transparent;
  height: fit-content;
  cursor: pointer;
  & > svg {
    fill: #57DFB7;
    height: 20px;
    width: 20px;
  }
`

export const FormErrors = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`
