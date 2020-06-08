import React from 'react'
import TechwriterData from '../data/TechwriterData'
import TechwriterIteam from './TechwriterIteam';


function TechwriterList() {
    const resultData = TechwriterData.map(writer => <TechwriterIteam key={writer.id} writerItem={writer}/>)
    return (
        resultData
    );
}

export default TechwriterList;
