
// SafeArea View
import { SafeAir } from '../../Utils/SafeArea';

import { TouchableOpacity } from 'react-native';

// Styled components
import { MainBackground, HomeBtn, InnerBtn } from './Components/welcome-main.style';

// General Styled component
import { MainHeader, Spacer } from '../../Components/General-styling/header.styles';

export const WelcomeGame = ({ navigation }) => (
    <SafeAir>
        <MainBackground>
            <MainHeader>Color Kids Game</MainHeader>
            <Spacer />

            <TouchableOpacity onPress={() => navigation.navigate("Levels", { header: "Color-Fit", screen: "ColorFit" })}>
                <HomeBtn>
                    <InnerBtn>Color Me</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Levels", { header: "Shape-Fit", screen: "ShapeFit" })}>
                <HomeBtn>
                    <InnerBtn>Shape Me</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Levels", { header: "Both", screen: "BothFit" })}>
                <HomeBtn>
                    <InnerBtn>Both</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>


        </MainBackground>
    </SafeAir>
)
