import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome  = () => {
    return (  
        <div className="home_matches_wrapper">  
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                >
                    Matches
                </Tag>

                <Blocks />

                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    linkto="/the_team"
                >
                    See more matches
                </Tag>
            </div>
        </div>
    );
}
 
export default MatchesHome;