import styled from "styled-components";

const BgRectangle = styled.div`
     box-sizing: border-box;

     position: absolute;
     width: 107px;
     height: 26px;
     left: ${({lf}) =>lf};
     top: ${({tp}) =>tp};

     background: white;
     border: white;
     border-radius: 5px;
      font-size: 24px`

export default BgRectangle