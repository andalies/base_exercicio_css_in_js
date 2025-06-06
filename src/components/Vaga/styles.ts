import styled from 'styled-components'
import { Colors } from '../../GlobalStyles'

const VagaCard = styled.div`
  border: 1px solid ${Colors.corPrincipal};
  background-color: ${Colors.corSecundaria};
  color: ${Colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${Colors.corPrincipal};
    color: ${Colors.corSecundaria};

    a {
      border-color: ${Colors.corPrincipal};
      background-color: ${Colors.corSecundaria};
      color: ${Colors.corPrincipal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${Colors.corSecundaria};
  background-color: ${Colors.corPrincipal};
  color: ${Colors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
export default VagaCard
