import React, { useContext } from 'react';

// React native component
import { TouchableOpacity } from 'react-native';

// Expo icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Both fit Context 
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context';
import { ColorFitContext } from '../../../Services/Color-fit/color-fit.context';
import { ShapeFitContext } from '../../../Services/Shape-fit/shape-fit.context';

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

// Next step
import { NextStep } from './next-step.component';

// Spacer component
import { Spacer } from '../../../Components/General-styling/header.styles';

export const BackgroundMessage = ({ level, status, movement, restartGame, screen }) => {


    return (
        <NextStep 
            level={ level } 
            status={ status } 
            movement={ movement } 
            restartGame={ restartGame } 
            screen={ screen }
        />
    )
}
