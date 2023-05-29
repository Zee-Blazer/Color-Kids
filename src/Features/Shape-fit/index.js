import React, { useState, useEffect, useContext } from 'react';

// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// Component screen
import { ShapePick } from "../Both-fit/Components/shape-pick.component";
import { AttemptComponent } from "../Both-fit/Components/attempt.component";
import { BackgroundMessage } from "../Both-fit/Components/background-message.component";
import { GoBtn, GoBtnText } from "../Both-fit/Components/custom.both-fit.style";

import { Spacer } from "../../Components/General-styling/header.styles";

import { Text } from 'react-native';

// Main stuff
import { shapes } from '../../Services/game-list.service';

// Context
import { ShapeFitContext } from '../../Services/Shape-fit/shape-fit.context';


export const ShapeFitScreen = ({ navigation, route }) => {

    // Navigation calls
    const level = route.params.level;


    // State variables
    const [selectedShape, setSelectedShape] = useState();
    const [question, setQuestion] = useState();
    

    // Message display and it's status
    const [display, setDisplay] = useState(false);
    const [status, setStatus] = useState("");
    const [attempt, setAttempt] = useState(0);
    
    // Context
    const { shapeLevel, levelData } = useContext(ShapeFitContext);

    const restartGame = () => {
        setDisplay(false);
        setAttempt(0);
        setStatus("");
        setSelectedShape();
        setQuestion(shapes[Math.floor(Math.random() * levelData[shapeLevel -1])])
    }

    const checkCorrect = () => {
        if(question == selectedShape){
            console.log("Mission Success");
            setStatus("success");
            setDisplay(true);
        }
        else{
            if(attempt < 2){
                increaseAttempt();
            }
            else{
                setStatus("failed");
                setDisplay(true);
            }
        }
    }

    const increaseAttempt = () => {
        setAttempt(attempt+1)
    }

    useEffect( () => {
        setQuestion(shapes[Math.floor(Math.random() * levelData[shapeLevel -1])])
    }, [] )

    console.log(level);

    return (
        <SafeAir>
            
            { display && 
                <BackgroundMessage 
                    status={ status } 
                    restartGame={ restartGame } 
                    level={ level } 
                    movement={ navigation.navigate }
                    screen="ShapeFit"
                /> 
            }

            <AttemptComponent 
                question={question}
                split={ true }
                attempt={ attempt }
                shape={ selectedShape }
            />

            <Spacer />

            <ShapePick
                numShape={levelData[shapeLevel-1]}
                shaper={ setSelectedShape }
            />
    
            <GoBtn onPress={ checkCorrect }>
                <GoBtnText>GO</GoBtnText>
            </GoBtn>
    
        </SafeAir>
    )
}
