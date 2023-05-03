
// Expo icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Custom components imported
import { 
    FadedBackgroundMessage, 
    FadeMainContainer, 
    MissionResult, 
    MissionResultText,
    DisplayContTitleMsg,
    IconDisplayCont,
    GoBtn,
    GoBtnText
} from "./custom.both-fit.style";

// Spacer component
import { Spacer } from '../../../Components/General-styling/header.styles';

export const BackgroundMessage = () => (
    <FadedBackgroundMessage>

        <MissionResult>
            <MissionResultText msg="err" >Mission Success</MissionResultText>
        </MissionResult>

        <FadeMainContainer>
            <DisplayContTitleMsg msg="err" >Retry</DisplayContTitleMsg>
            
            <IconDisplayCont>
                <FontAwesome name="repeat" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} />
                {/* <AntDesign name="stepforward" size={50} color="#AEE8C2" style={{ alignSelf: "center", marginTop: 6 }} /> */}
            </IconDisplayCont>

            <Spacer />
            <GoBtn>
                <GoBtnText>Main Menu</GoBtnText>
            </GoBtn>
        </FadeMainContainer>

    </FadedBackgroundMessage>
)
