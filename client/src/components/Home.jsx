
import Text from "./Parts/Text";
import Container from "./Parts/Container";
import Title from "./Parts/Title"
import Line from "./Parts/Line";
import styled from "styled-components";
import Paragraf from "./Parts/Paragraf";
import {Link} from "react-router-dom";

const StyledComponents = styled.div`
 position: absolute;
  margin-left: 230px;
  margin-top: -110px;
`


const Home = () => {
    return (
        <StyledComponents >

            <Container lf="388px" tp="474px">
                <Link to="/inspect">
                    <Text lf="188px">Inspect</Text>
                    </Link>
            </Container>
            <Container lf="788px" tp="474px">
                <Link to="/duel">
                    <Text lf="588px">Duel</Text>
                </Link>
            </Container>
            <Title>Welcome to Dev-Duel</Title>
            <Line></Line>
            <Paragraf lf="420px">Look up a fellow dev's Github info</Paragraf>
            <Paragraf lf="821px">Pick two devs to go head to head</Paragraf>
        </StyledComponents>
    )
}

export default Home
