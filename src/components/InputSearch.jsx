import React, { useEffect, useState } from 'react'
import { FormButton, FormContainer, FormControl, FormInput } from './styles/StyledForm'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'

const InputSearch = ({ handleError, error, setCity }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length > 0 && error.error) {
      handleError(() => ({ error: false, msg: '' }))
      setCity('')
    }
  }, [search, handleError, error, setCity])

  const onSubmit = (e) => {
    e.preventDefault()
    if (search === '') {
      handleError({ error: true, msg: 'Ciudad no puede estar en blanco' })
      setCity('')
      return false
    }
    setCity(search)
    setSearch('')
  }

  return (
    <div>
      <FormContainer onSubmit={onSubmit}>
        <FormControl>
          <FormInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar ciudad..' />
        </FormControl>
        <FormButton type='submit'>
          <SearchIcon />
        </FormButton>
      </FormContainer>
    </div>
  )
}

export default InputSearch
