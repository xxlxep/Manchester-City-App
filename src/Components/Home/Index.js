import React from 'react';
import Featured from './Featured/Index';
import Matches from './Matches/index';
import MeetPlayers from './meetPlayers';


const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches />
            <MeetPlayers />
        </div>
    );
};



export default Home;