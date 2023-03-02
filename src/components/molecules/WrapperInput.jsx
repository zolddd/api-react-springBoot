import Input from '../atoms/Input'
import Label from '../atoms/Label'
import styled from 'styled-components';
const StyledDiv = styled.div`
gap: 20px;
display: flex;
flex-direction: column;
`;
function WrapperInput({type, placeholder, msn, onChange, name}) {
  

  return (
    <StyledDiv>
        <Label msn={msn} />
        <Input type={type} onChange={onChange} placeholder={placeholder} name={name}/>
    </StyledDiv>
  )
}

export default WrapperInput;