import Input from "../atoms/Input";
import Label from "../atoms/Label";
import styled from "styled-components";

function WrapperInput({msn, type, name, value, handleChange }) {
  const StyledDiv = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledDiv>
      <Label msn={msn} />
      <Input type={type} name={name} value={value} onChange={handleChange} />
    </StyledDiv>
  );
}

export default WrapperInput;
