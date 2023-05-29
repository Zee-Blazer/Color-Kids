import React, { useState, useEffect, useContext } from "react";

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

// Main container button
import { ContainerButton } from "./Components/container-button.component";


export const LevelScreen = ({ navigation, route }) => {

    const screenName = route.params.screen;
    const header = route.params.header;

    return (
        <SafeAir>
    
            <MainHeader>{ header }</MainHeader>

            <ContainerButton screen={ screenName } header={ header } movement={ navigation.navigate } />
    
        </SafeAir>
    )
}
