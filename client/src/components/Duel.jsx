import styled from "styled-components";
import Rectangle from "./Parts/Rectangle";
import Input from "./Parts/Input";
import Button from "./Parts/Button";
import Text from "./Parts/Text";
import {useState} from "react";
import FormCard from "./Parts/FormCard";
import BioCont from "./Parts/BioCont";
import Picture from "./Parts/Picture";
import SmRectangle from "./Parts/SmRectangle";
import BgRectangle from "./Parts/BgRectangle";
import Winner from "./Parts/Winner";

const StyleCompnt = styled.div`
  position: absolute;
  margin-left: 230px;
  margin-top: -40px;
`


const Duel = () => {
    const [user1Data, setUser1Data] = useState({
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

    const [user2Data, setUser2Data] = useState({
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

    const [username1, updateUsername1] = useState({
        username: {
            value: ""
        }
    })

    const [username2, updateUsername2] = useState({
        username: {
            value: ""
        }
    })

    const [infoToggle, setInfoToggle] = useState(false);
    /*const [winner1Toggle, setWinner1Toggle] = useState(false);
    const [winner2Toggle, setWinner2Toggle] = useState(false);*/

    const handleToggle = () => {
        setInfoToggle('block');
    };
    const retrieveData = async function (username, userData, setUserData) {
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

    const logUser1 = () => {
        console.log(user1Data);
    };

    const logUser2 = () => {
        console.log(user2Data);
    };

    return (
        <StyleCompnt>
            <Rectangle tp="183px" lf="770px">
                <Input placeholder="username" type="text" value={username1.username.value}
                       onChange={(e) => updateUsername1({
                           ...username1,
                           username: {...username1.username, value: e.target.value}
                       })}></Input>
            </Rectangle>
            <Rectangle tp="183px" lf="350px">
                <Input placeholder="username" type="text" value={username2.username.value}
                       onChange={(e) => updateUsername2({
                           ...username2,
                           username: {...username2.username, value: e.target.value}
                       })}></Input>
            </Rectangle>
            <Button onClick={() => {
                retrieveData(username1.username.value, user1Data, setUser1Data);
                retrieveData(username2.username.value, user2Data, setUser2Data);
                handleToggle();
            }} type='button' lf="585px" tp="300px">
                <Text lf="588px">Duel</Text>
            </Button>
            <Winner lf="169px" tp="384px">
                {infoToggle && (
                    <div>
                        {user1Data.followers < user2Data.followers ? ' Winner !!!!' : ''}
                    </div>
                )}
            </Winner>
            <FormCard visibility={infoToggle} lf="750px" tp="447px">
                <BioCont>
                    {user1Data.bio}
                </BioCont>
                <Picture src={user1Data.avatarUrl}/>
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
                    {user1Data.username}
                </BgRectangle>
                <BgRectangle lf="390px" tp="65px">
                    {user1Data.name}
                </BgRectangle>
                <BgRectangle lf="390px" tp="105px">
                    {user1Data.location}
                </BgRectangle>
                <BgRectangle lf="390px" tp="145px">
                    {user1Data.titles}
                </BgRectangle>
                <BgRectangle lf="390px" tp="185px">
                    {user1Data.favLanguages}
                </BgRectangle>
                <BgRectangle lf="390px" tp="225px">
                    {user1Data.totalStars}
                </BgRectangle>
                <BgRectangle lf="390px" tp="265px">
                    {user1Data.highestStarCount}
                </BgRectangle>
                <BgRectangle lf="390px" tp="305px">
                    {user1Data.publicRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="345px">
                    {user1Data.perfectRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="385px">
                    {user1Data.followers}
                </BgRectangle>
                <BgRectangle lf="390px" tp="425px">
                    {user1Data.following}
                </BgRectangle>
            </FormCard>

            <Winner lf="900px" tp="384px">
                {infoToggle && (
                    <div>
                        {user1Data.followers > user2Data.followers ? ' Winner !!!!' : ''}
                    </div>
                )}
            </Winner>
            <FormCard visibility={infoToggle} lf="50px" tp="447px">
                <BioCont>
                    {user2Data.bio}
                </BioCont>
                <Picture src={user2Data.avatarUrl}/>
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
                    {user2Data.username}
                </BgRectangle>
                <BgRectangle lf="390px" tp="65px">
                    {user2Data.name}
                </BgRectangle>
                <BgRectangle lf="390px" tp="105px">
                    {user2Data.location}
                </BgRectangle>
                <BgRectangle lf="390px" tp="145px">
                    {user2Data.titles}
                </BgRectangle>
                <BgRectangle lf="390px" tp="185px">
                    {user2Data.favLanguages}
                </BgRectangle>
                <BgRectangle lf="390px" tp="225px">
                    {user2Data.totalStars}
                </BgRectangle>
                <BgRectangle lf="390px" tp="265px">
                    {user2Data.highestStarCount}
                </BgRectangle>
                <BgRectangle lf="390px" tp="305px">
                    {user2Data.publicRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="345px">
                    {user2Data.perfectRepos}
                </BgRectangle>
                <BgRectangle lf="390px" tp="385px">
                    {user2Data.followers}
                </BgRectangle>
                <BgRectangle lf="390px" tp="425px">
                    {user2Data.following}
                </BgRectangle>
            </FormCard>
        </StyleCompnt>
    );
}
export default Duel