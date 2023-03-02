import styled from 'styled-components';

function Input({ type,name ,value, handleChange, placeholder }) {
  const StyleInput = styled.input`
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    padding-left: 20px;
    width: 385px;
    height: 66px;
    margin-top: 5px;
    border: 2.5px solid hsl(244deg 4% 36%);
    font-size: 15px;
    font-weight: bold;
`;
  
  return(
        <StyleInput type={type} placeholder={placeholder} onChange = {handleChange} name ={name}  value={value}/>
    )
}

export default Input;
