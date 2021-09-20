import styled from 'styled-components'

const StyledRecap = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-left: 107px;
  margin-top: 41px;
`

export default function Recap() {
  return (
    <StyledRecap>
      Félicitation ! Vous avez explosé vos objectifs hier 👏
    </StyledRecap>
  )
}
