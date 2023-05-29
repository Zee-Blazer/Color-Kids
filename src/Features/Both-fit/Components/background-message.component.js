import React, { useContext } from 'react';

// React native component
import { TouchableOpacity } from 'react-native';

// Expo icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Both fit Context 
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context';

// Custom components imported
import { 
    FadedBackgroundMessage, 
    FadeMainContainer, 
    MissionResult, 
    MissionResultText,
    DisplayContTitleMsg,
    IconDisplayCont,
    GoBtn,
    GoBtnText
} from "./custom.both-fit.style";

// Spacer component
import { Spacer } from '../../../Components/General-styling/header.styles';

export const BackgroundMessage = ({ level, status, movement, restartGame }) => {

    // Both fit context 
    const { nextLevel } = useContext( BothFitContext );

    const successMove = () => {
        nextLevel(level);
        movement('Levels', { header: "Both", screen: "BothFit" });
    }

    return (
        <FadedBackgroundMessage>
    
            <MissionResult>
                <MissionResultText msg={ status == "success" ? "" : "err" } >Mission { status == "success" ? "Success" : "Failed" }</MissionResultText>
            </MissionResult>
    
            <FadeMainContainer>
                <DisplayContTitleMsg msg={ status == "success" ? "" : "err" } >{ status == "success" ? "Completed" : "Retry" }</DisplayContTitleMsg>
                
                <IconDisplayCont>
                    {
                        status == "success" ? 
                        <TouchableOpacity onPress={ successMove }>
                            <AntDesign name="stepforward" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={ restartGame } >
                            <FontAwesome name="repeat" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                        </TouchableOpacity>
                    }
                </IconDisplayCont>
    
                <Spacer />
                <GoBtn onPress={ () => movement('Welcome') }>
                    <GoBtnText>Main Menu</GoBtnText>
                </GoBtn>
            </FadeMainContainer>
    
        </FadedBackgroundMessage>
    )
}
