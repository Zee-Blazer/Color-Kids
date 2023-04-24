
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

            <TouchableOpacity onPress={ () => navigation.navigate("Levels") }>
                <HomeBtn onPress={ () => navigation.push("Levels") }>
                    <InnerBtn>Color Fit</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigation.navigate("Levels") }>
                <HomeBtn onPress={ () => console.log("Working") }>
                    <InnerBtn>Shape Fit</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigation.navigate("Levels") }>
                <HomeBtn>
                    <InnerBtn>Both Fit</InnerBtn>
                </HomeBtn>
            </TouchableOpacity>

            
        </MainBackground>
    </SafeAir>
)
