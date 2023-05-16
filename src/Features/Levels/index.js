import React, { useContext } from "react";

// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// General styled components
import { MainHeader } from "../../Components/General-styling/header.styles";

// Custom Level styling
import { ContainerBtn, ProgressLabel, ProgressCont, ProgressStage } from "./Components/custom.level.styles";

// Components
import { RoundedBtn } from "./Components/rounded-btn.levels.component";

// Context
import { BothFitContext } from "../../Services/Both-fit/both-fit.context";

// Tryout
import { CurrentLevel } from "./Components/current.type.level.component";


export const LevelScreen = ({ navigation, route }) => {

    const screenName = route.params.screen;
    const header = route.params.header;

    // Context 
    const { currentLevel } = useContext( BothFitContext );

    console.log(`${header} - working properly ${currentLevel}`);

    console.log(CurrentLevel(header) >= 4 );

    return (
        <SafeAir>
    
            <MainHeader>{ header }</MainHeader>
    
            <ContainerBtn>
                <RoundedBtn num={1} movement={navigation.navigate} screenName={ screenName } lock={ CurrentLevel(header) >= 1 } />
                <RoundedBtn num={2} movement={navigation.navigate} screenName={ screenName } lock={ CurrentLevel(header) >= 2 } />
                <RoundedBtn num={3} movement={navigation.navigate} screenName={ screenName } lock={ CurrentLevel(header) >= 3 } />
                <RoundedBtn num={4} movement={navigation.navigate} screenName={ screenName } lock={ CurrentLevel(header) >= 4 } />
                <RoundedBtn num={5} movement={navigation.navigate} screenName={ screenName } lock={ CurrentLevel(header) >= 5 } />
            </ContainerBtn>
    
            <ProgressCont>
                <ProgressLabel>Progress: </ProgressLabel>
                <ProgressStage progress={0.4} color="#172B2D" />
            </ProgressCont>
    
        </SafeAir>
    )
}
