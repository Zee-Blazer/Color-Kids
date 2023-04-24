
// Safe Area
import { SafeAir } from "../../Utils/SafeArea"

// General styled components
import { MainHeader } from "../../Components/General-styling/header.styles";

// Custom Level styling
import { ContainerBtn } from "./Components/custom.level.styles";

// Components
import { RoundedBtn } from "./Components/rounded-btn.levels.component";

import { Text } from 'react-native';

export const LevelScreen = () => (
    <SafeAir>

        <MainHeader>Color Fit</MainHeader>

        <Text>
            Levels Screen
        </Text>

        <ContainerBtn>
            <RoundedBtn />
        </ContainerBtn>
    </SafeAir>
)
