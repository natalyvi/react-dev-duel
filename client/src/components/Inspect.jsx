import Rectangle from "./Parts/Rectangle";
import styled from "styled-components";
import Input from "./Parts/Input";
import {Link} from "react-router-dom";
import Text from "./Parts/Text";
import Container from "./Parts/Container";
import FormCard from "./Parts/FormCard";
import SmRectangle from "./Parts/SmRectangle";
import BgRectangle from "./Parts/BgRectangle";

const StyledComponentss = styled.div`
  position: absolute;
  margin-left: 230px;
  margin-top: -40px;
`

const Inspect = () => {
    return (
        <StyledComponentss>
            <Rectangle>
                <Input placeholder="username" type="text"></Input>
            </Rectangle>
            <Container lf="585px" tp="300px">
                <Text lf="588px">Inspect</Text>
            </Container>
            <FormCard>
                <SmRectangle lf="270px" tp="30px">
                    username
                </SmRectangle>
                <SmRectangle lf="270px" tp="70px">
                    name
                </SmRectangle>
                <SmRectangle lf="270px" tp="110px">
                    location
                </SmRectangle>
                <SmRectangle lf="270px" tp="150px">
                    titles
                </SmRectangle>
                <SmRectangle lf="270px" tp="190px">
                    fav language
                </SmRectangle>
                <SmRectangle lf="270px" tp="230px">
                    total stars
                </SmRectangle>
                <SmRectangle lf="270px" tp="270px">
                    highest star count
                </SmRectangle>
                <SmRectangle lf="270px" tp="310px">
                    public repos
                </SmRectangle>
                <SmRectangle lf="270px" tp="350px">
                    perfect repos
                </SmRectangle>
                <SmRectangle lf="270px" tp="390px">
                    followers
                </SmRectangle>
                <SmRectangle lf="270px" tp="430px">
                    following
                </SmRectangle>
                <BgRectangle lf="390px" tp="25px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="65px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="105px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="145px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="185px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="225px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="265px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="305px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="345px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="385px">
                    zalupa
                </BgRectangle>
                <BgRectangle lf="390px" tp="425px">
                    zalupa
                </BgRectangle>


            </FormCard>


        </StyledComponentss>
    )


}

export default Inspect