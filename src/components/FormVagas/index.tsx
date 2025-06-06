import { FormEvent, useState } from 'react'
import FormSearch, { SearchButton, InputField } from './styles'
import { Container } from '../../GlobalStyles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormSearch onSubmit={aoEnviarForm}>
      <InputField
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </FormSearch>
  )
}
export default FormVagas
