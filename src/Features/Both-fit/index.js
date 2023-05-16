import React, { useContext } from 'react';

// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// Custom styled components
import { GoBtn, GoBtnText } from "./Components/custom.both-fit.style";

// Context management component
import { BothFitContext } from '../../Services/Both-fit/both-fit.context';

// React Native components
import { Text } from "react-native-paper";

// Other components
import { AttemptComponent } from "./Components/attempt.component";
import { ShapePick } from "././Components/shape-pick.component";
import { ColorPick } from "./Components/color-pick.component";
import { BackgroundMessage } from "./Components/background-message.component";

export const BothFitScreen = ({ navigation, route }) => {

    console.log(route.params.level);

    const { main, currentLevel } = useContext( BothFitContext );

    console.log(main, currentLevel);

    return (
        <SafeAir>
    
            {/* Faded Background  */}
            {/* <BackgroundMessage /> */}
    
            <AttemptComponent />
            <ShapePick />
            <ColorPick />
    
            {/* Submit Button  */}
            <GoBtn>
                <GoBtnText>GO</GoBtnText>
            </GoBtn>
    
        </SafeAir>
    )
}
