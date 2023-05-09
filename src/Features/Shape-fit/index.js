
// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// Component screen
import { ShapePick } from "../Both-fit/Components/shape-pick.component";
import { AttemptComponent } from "../Both-fit/Components/attempt.component";
import { BackgroundMessage } from "../Both-fit/Components/background-message.component";
import { GoBtn, GoBtnText } from "../Both-fit/Components/custom.both-fit.style";

import { Spacer } from "../../Components/General-styling/header.styles";

import { Text } from 'react-native';

export const ShapeFitScreen = () => (
    <SafeAir>
        
        {/* <BackgroundMessage /> */}
        <AttemptComponent />
        <Spacer />
        <ShapePick />

        <GoBtn>
            <GoBtnText>GO</GoBtnText>
        </GoBtn>

    </SafeAir>
)
