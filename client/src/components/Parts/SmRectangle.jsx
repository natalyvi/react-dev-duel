import styled from "styled-components";

const SmRectangle = styled.div`
     box-sizing: border-box;

     position: absolute;
     width: 107px;
     height: 26px;
     left: ${({lf}) =>lf};
     top: ${({tp}) =>tp};

     background: #E1F1FF;
     border: 1px solid rgba(0, 0, 0, 0.75);
     border-radius: 5px;
      text-align: center;
      font-size: 13px`

export default SmRectangle