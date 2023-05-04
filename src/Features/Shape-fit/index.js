
// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// Component screen
import { ShapePick } from "../Both-fit/Components/shape-pick.component";
import { AttemptComponent } from "../Both-fit/Components/attempt.component";
import { BackgroundMessage } from "../Both-fit/Components/background-message.component";

import { Text } from 'react-native';

export const ShapeFitScreen = () => (
    <SafeAir>
        
        <AttemptComponent />
        <ShapePick />

    </SafeAir>
)
