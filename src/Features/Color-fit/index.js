
// Safe Area
import { SafeAir } from "../../Utils/SafeArea"

import { Text } from 'react-native';

// Main Components in the Color Fit Screen
import { ColorPick } from "../Both-fit/Components/color-pick.component"; // The color picker component
import { AttemptComponent } from "../Both-fit/Components/attempt.component"; // The display bar for the users attemplt
import { GoBtn, GoBtnText } from "../Both-fit/Components/custom.both-fit.style"; // The confirm button
import { Spacer } from "../../Components/General-styling/header.styles";

export const ColorFitScreen = () => (
    <SafeAir>
        
        <AttemptComponent />
        <Spacer />

        <ColorPick />
        <GoBtn>
            <GoBtnText>GO</GoBtnText>
        </GoBtn>

    </SafeAir>
)
