import styled from "styled-components";

const FormCard = styled.div`

  box-sizing: border-box;

  position: absolute;
  width: 649px;
  height: 468px;
  left: ${({lf}) => lf};
  top: ${({tp}) => tp};

  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  display: ${props => props.visibility? 'block': 'none'}
`;

export default FormCard