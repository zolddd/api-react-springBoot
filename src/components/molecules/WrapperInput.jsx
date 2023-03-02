import Input from '../atoms/Input'
import Label from '../atoms/Label'
import styled from 'styled-components';

function WrapperInput({type, placeholder, msn, handleChange, value, name}) {
    const StyledDiv = styled.div`
        gap: 20px;
        display: flex;
        flex-direction: column;
    `;


  return (
    <StyledDiv>
        <Label msn={msn} />
        <Input type={type} handleChange = {handleChange} placeholder={placeholder} value={value} name={name}/>
    </StyledDiv>
  )
}

export default WrapperInput;