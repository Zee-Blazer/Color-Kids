import React, { useState, useEffect, useContext } from 'react';

// Safe Area
import { SafeAir } from "../../Utils/SafeArea"

import { Text } from 'react-native';

// Main Components in the Color Fit Screen
import { ColorPick } from "../Both-fit/Components/color-pick.component"; // The color picker component
import { AttemptComponent } from "../Both-fit/Components/attempt.component"; // The display bar for the users attemplt
import { GoBtn, GoBtnText } from "../Both-fit/Components/custom.both-fit.style"; // The confirm button
import { Spacer } from "../../Components/General-styling/header.styles";

// Background message
import { BackgroundMessage } from '../Both-fit/Components/background-message.component';

// Color fit
import { colors } from '../../Services/game-list.service';

// Context
import { ColorFitContext } from "../../Services/Color-fit/color-fit.context";

export const ColorFitScreen = ({ navigation, route }) => {

    // Navigation calls
    const level = route.params.level;


    // State variables
    const [selectedColor, setSelectedColor] = useState();
    const [question, setQuestion] = useState();
    
    // Message display and it's status
    const [display, setDisplay] = useState(false);
    const [status, setStatus] = useState("");
    const [attempt, setAttempt] = useState(0);

    // Context
    const { colorLevel, levelData } = useContext(ColorFitContext);

    const restartGame = () => {
        setDisplay(false);
        setAttempt(0);
        setStatus("");
        setSelectedColor();
        setQuestion(colors[Math.floor(Math.random() * levelData[colorLevel -1])])
    }

    const checkCorrect = () => {
        if(question == selectedColor){
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
        setQuestion(colors[Math.floor(Math.random() * levelData[colorLevel -1])])
    }, [] )

    return (
        <SafeAir>

            { display && 
                <BackgroundMessage 
                    status={ status } 
                    restartGame={ restartGame } 
                    level={ level } 
                    movement={ navigation.navigate }
                    screen="ColorFit"
                /> 
            }
            
            <AttemptComponent 
                question={ question }
                split={ true }
                color={ selectedColor } 
                attempt={ attempt }
                different={ true }
            />
            <Spacer />
    
            <ColorPick 
                numColor={levelData[colorLevel-1]}
                colorer={ setSelectedColor }
            />

            <GoBtn onPress={ checkCorrect }>
                <GoBtnText>GO</GoBtnText>
            </GoBtn>
    
        </SafeAir>
    )
}
