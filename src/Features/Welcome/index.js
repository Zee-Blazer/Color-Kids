
// SafeArea View
import { SafeAir } from '../../Utils/SafeArea';

// Styled components
import { MainBackground } from './Components/welcome-main.style';


import { Text } from 'react-native';

export const WelcomeGame = () => (
    <SafeAir>
        <MainBackground>
            <Text>Hiii there Let's see how it goes</Text>
        </MainBackground>
    </SafeAir>
)
