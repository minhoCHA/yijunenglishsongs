import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { InfoSection2 } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjThree} />
            <Pricing />
        </>
    )
}

export default Home;