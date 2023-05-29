import React, { useState, useEffect, useContext } from 'react';

// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// Custom styled components
import { GoBtn, GoBtnText } from "./Components/custom.both-fit.style";

// Context management component
import { BothFitContext } from '../../Services/Both-fit/both-fit.context';

// React Native components
import { Text } from "react-native-paper";

// Color and Shape main data
import { colors, shapes } from '../../Services/game-list.service';

// Other components
import { AttemptComponent } from "./Components/attempt.component";
import { ShapePick } from "././Components/shape-pick.component";
import { ColorPick } from "./Components/color-pick.component";
import { BackgroundMessage } from "./Components/background-message.component";

export const BothFitScreen = ({ navigation, route }) => {

    // Navigation calls
    const level = route.params.level;

    // usState calls
    const [question, setQuestion] = useState();

    // Message display and it's status
    const [display, setDisplay] = useState(false);
    const [status, setStatus] = useState("");
    const [attempt, setAttempt] = useState(0);

    const [selectedShape, setSelectedShape] = useState();
    const [selectedColor, setSelectedColor] = useState();

    // Context calls
    const { currentLevel, levelData } = useContext( BothFitContext );

    const checkCorrect = () => {
        if(question[0] == selectedShape && question[1] == selectedColor){
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

    const starters = () => {
        const mainColor= colors[Math.floor(Math.random() * levelData[currentLevel-1][0])]
        const mainShape = shapes[Math.floor(Math.random() * levelData[currentLevel-1][1])]

        setQuestion([mainShape, mainColor]);
    }

    const restartGame = () => {
        setDisplay(false);
        setAttempt(0);
        setStatus("");
        setSelectedShape();
        starters();
    }

    useEffect( () => {
        starters();
        
    }, [] )

    return (
        <SafeAir>
    
            {/* Faded Background  */}
            { 
                display && 
                <BackgroundMessage 
                    status={ status } 
                    restartGame={ restartGame } 
                    level={ level } 
                    movement={ navigation.navigate }
                /> 
            }
    
            <AttemptComponent 
                question={ question } 
                color={ selectedColor } 
                shape={ selectedShape } 
                attempt={ attempt }
            />

            <ShapePick 
                numShape={ levelData[level-1][1] } 
                shaper={ setSelectedShape } 
            />

            <ColorPick 
                numColor={ levelData[level-1][0] } 
                colorer={ setSelectedColor } 
            />
    
            {/* Submit Button  */}
            <GoBtn onPress={ checkCorrect }>
                <GoBtnText>GO</GoBtnText>
            </GoBtn>
    
        </SafeAir>
    )
}
