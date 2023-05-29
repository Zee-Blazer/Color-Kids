import React, { useContext } from 'react';

// React native component
import { TouchableOpacity } from 'react-native';

// Expo icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Both fit Context 
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context';
import { ShapeFitContext } from '../../../Services/Shape-fit/shape-fit.context';
import { ColorFitContext } from '../../../Services/Color-fit/color-fit.context';

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

export const NextStep = ({ level, status, movement, restartGame, screen }) => {

    // Both fit context 
    const { nextLevel } = useContext(BothFitContext);
    const { colorNextLevel } = useContext(ColorFitContext);
    const { shapeNextLevel } = useContext(ShapeFitContext);

    const successMove = () => {
        nextLevel(level);
        movement('Levels', { header: "Both", screen: "BothFit" });
    }

    const colorSuccessMove = () => {
        colorNextLevel(level);
        movement('Levels', { header: "Color-Fit", screen: "ColorFit" });
    }

    const shapeSuccessMove = () => {
        shapeNextLevel(level);
        movement('Levels', { header: "Shape-Fit", screen: "ShapeFit" });
    }

    switch (screen) {
        case "BothFit":
            return (
                <>
                    <FadedBackgroundMessage>

                        <MissionResult>
                            <MissionResultText msg={status == "success" ? "" : "err"} >Mission {status == "success" ? "Success" : "Failed"}</MissionResultText>
                        </MissionResult>

                        <FadeMainContainer>
                            <DisplayContTitleMsg msg={status == "success" ? "" : "err"} >{status == "success" ? "Completed" : "Retry"}</DisplayContTitleMsg>

                            <IconDisplayCont>
                                {
                                    status == "success" ?
                                        <TouchableOpacity onPress={successMove}>
                                            <AntDesign name="stepforward" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={restartGame} >
                                            <FontAwesome name="repeat" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity>
                                }
                            </IconDisplayCont>

                            <Spacer />
                            <GoBtn onPress={() => movement('Welcome')}>
                                <GoBtnText>Main Menu</GoBtnText>
                            </GoBtn>
                        </FadeMainContainer>

                    </FadedBackgroundMessage>
                </>
            )
            break;

        case "ShapeFit":
            return (
                <>
                    <FadedBackgroundMessage>

                        <MissionResult>
                            <MissionResultText msg={status == "success" ? "" : "err"} >Mission {status == "success" ? "Success" : "Failed"}</MissionResultText>
                        </MissionResult>

                        <FadeMainContainer>
                            <DisplayContTitleMsg msg={status == "success" ? "" : "err"} >{status == "success" ? "Completed" : "Retry"}</DisplayContTitleMsg>

                            <IconDisplayCont>
                                {
                                    status == "success" ?
                                        <TouchableOpacity onPress={shapeSuccessMove}>
                                            <AntDesign name="stepforward" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={restartGame} >
                                            <FontAwesome name="repeat" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity>
                                }
                            </IconDisplayCont>

                            <Spacer />
                            <GoBtn onPress={() => movement('Welcome')}>
                                <GoBtnText>Main Menu</GoBtnText>
                            </GoBtn>
                        </FadeMainContainer>

                    </FadedBackgroundMessage>
                </>
            )
            break;

        case "ColorFit":
            return (
                <>
                    <FadedBackgroundMessage>

                        <MissionResult>
                            <MissionResultText msg={status == "success" ? "" : "err"} >Mission {status == "success" ? "Success" : "Failed"}</MissionResultText>
                        </MissionResult>

                        <FadeMainContainer>
                            <DisplayContTitleMsg msg={status == "success" ? "" : "err"} >{status == "success" ? "Completed" : "Retry"}</DisplayContTitleMsg>

                            <IconDisplayCont>
                                {
                                    status == "success" ?
                                        <TouchableOpacity onPress={ colorSuccessMove }>
                                            <AntDesign name="stepforward" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={restartGame} >
                                            <FontAwesome name="repeat" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                                        </TouchableOpacity>
                                }
                            </IconDisplayCont>

                            <Spacer />
                            <GoBtn onPress={() => movement('Welcome')}>
                                <GoBtnText>Main Menu</GoBtnText>
                            </GoBtn>
                        </FadeMainContainer>

                    </FadedBackgroundMessage>
                </>
            )
            break;

        default:
            break;
    }

}
