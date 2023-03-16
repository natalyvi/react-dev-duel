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
import BioCont from "./Parts/BioCont";
import Picture from "./Parts/Picture";

const StyledComponentss = styled.div`
  position: absolute;
  margin-left: 230px;
  margin-top: -40px;
`


const Inspect = () => {

    const [userData, setUserData] = useState({
        avatarUrl: "",
        bio: "",
        username: "",
        name: "",
        location: "",
        titles: "",
        favLanguages: "",
        totalStars: "",
        highestStarCount: "",
        publicRepos: "",
        perfectRepos: "",
        followers: "",
        following: "",
    })

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
        setUserData({
            avatarUrl: data["avatar_url"],
            bio: data["bio"],
            username: data["username"],
            name: data["name"],
            location: data["location"],
            titles: data["titles"],
            favLanguages: data["favorite-language"],
            totalStars: data["total-stars"],
            highestStarCount: data["highest-starred"],
            publicRepos: data["public-repos"],
            perfectRepos: data["perfect-repos"],
            followers: data["followers"],
            following: data["following"]
        })
    }


    const [username, updateUsername] = useState({
        username: {
            value: ""
        }
    })

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle('block');
    };

    return (
        <StyledComponentss>
            <Rectangle tp="183px" lf="556px">
                <Input placeholder="username" type="text" value={username.username.value}
                       onChange={(e) => updateUsername({
                           ...username,
                           username: {...username.username, value: e.target.value}
                       })}></Input>
            </Rectangle>
            <Button onClick={() => {
                retrieveData(username.username.value);
                handleToggle()
            }} type='button' lf="585px" tp="300px">
                <Text lf="588px">Inspect</Text>
            </Button>

            <FormCard visibility={toggle} lf="396px" tp="447px">
                <BioCont>
                    {userData.bio}
                </BioCont>
                <Picture src={userData.avatarUrl}/>
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
                    {userData.username}
                </BgRectangle>
                <BgRectangle lf="390px" tp="65px">
                    {userData.name}
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
