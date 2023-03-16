import Rectangle from "./Parts/Rectangle";
import styled from "styled-components";
import Input from "./Parts/Input";
import {Link} from "react-router-dom";
import Text from "./Parts/Text";
import Container from "./Parts/Container";
import FormCard from "./Parts/FormCard";
import SmRectangle from "./Parts/SmRectangle";
import BgRectangle from "./Parts/BgRectangle";
import Button from "./Parts/Button";
import {useState} from "react";

const StyledComponentss = styled.div`
  position: absolute;
  margin-left: 230px;
  margin-top: -40px;
`


const Inspect = () => {

    let userData = {
        avatarUrl: '1',
        bio: '2',
        username: '3',
        name: '4',
        location: '5',
        titles: '6',
        favLanguages: '7',
        totalStars: '8',
        highestStarCount: '9',
        publicRepos: '10',
        perfectRepos: '11',
        followers: '12',
        following: '13'
    }

    const retrieveData = async function (username) {
        console.log('In retrieveData() function');
        // await response of fetch call
        let response = await fetch(`http://localhost:3000/api/user/${username}`)
            .catch(error => {
                console.error(error);
            });
        // only proceed once promise is resolved
        let data = await response.json()
        /*.catch(error => {
            console.error(error);
        });*/
        console.log(data);
        // only proceed once second promise is resolved
        userData.avatarUrl = data["avatar_url"];
        userData.bio = data["bio"];
        userData.username = data["username"];
        userData.name = data["name"];
        userData.location = data["location"];
        userData.titles = data["titles"];
        userData.favLanguages = data["favorite-language"];
        userData.totalStars = data["total-stars"];
        userData.highestStarCount = data["highest-starred"];
        userData.publicRepos = data["public-repos"];
        userData.perfectRepos = data["perfect-repos"];
        userData.followers = data["followers"];
        userData.following = data["following"];
    }


    const [username, updateUsername] = useState({
        username: {
            value: ""
        }
    })

    return (
        <StyledComponentss>
            <Rectangle>
                <Input placeholder="username" type="text" value={username.username.value}
                       onChange={(e) => updateUsername({...username, username: {...username.username, value:e.target.value}})}></Input>
            </Rectangle>
            <Button onClick={() => retrieveData(username.username.value)} type='button' lf="585px" tp="300px">
                <Text lf="588px">Inspect</Text>
            </Button>
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
                </BgRectangle>
                <BgRectangle lf="390px" tp="65px">
                    {userData.username}
                </BgRectangle>
                <BgRectangle lf="390px" tp="105px">
                    {userData.location}
                </BgRectangle>
                <BgRectangle lf="390px" tp="145px">
                    {userData.titles}
                </BgRectangle>
                <BgRectangle lf="390px" tp="185px">
                    {userData.favLanguages}
                </BgRectangle>
                <BgRectangle lf="390px" tp="225px">
                    {userData.totalStars}
                </BgRectangle>
                <BgRectangle lf="390px" tp="265px">
                    {userData.highestStarCount}
                </BgRectangle>
                <BgRectangle lf="390px" tp="305px">
                    {userData.publicRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="345px">
                    {userData.perfectRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="385px">
                    {userData.followers}
                </BgRectangle>
                <BgRectangle lf="390px" tp="425px">
                    {userData.following}
                </BgRectangle>


            </FormCard>


        </StyledComponentss>
    )


}

export default Inspect