import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({theme}) => theme.colors}
`

function CSSJS() {
    return <Title style={{color: 'red'}} >Styled Compnent</Title>
}

export default CSSJS;
