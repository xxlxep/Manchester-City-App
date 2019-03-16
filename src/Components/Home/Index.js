import React from 'react';
import Featured from './Featured/Index';
import Matches from './Matches/index';
import MeetPlayers from './meetPlayers';
import Promotion from './Promotion/index';


const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches />
            <MeetPlayers />
            <Promotion />
        </div>
    );
};



export default Home;