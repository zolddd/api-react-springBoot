import styled from 'styled-components';
function Label({ msn }) {
  const StyleLabel = styled.label`
  color: white;
  position: relative;
  display: flex;
  color: var(--title-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-semi-bold);
  font-family: var(--body-font);
  top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

  return(
      <StyleLabel>{msn}</StyleLabel>
  )
}

export default Label;
