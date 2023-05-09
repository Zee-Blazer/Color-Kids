
// Safe Area
import { SafeAir } from "../../Utils/SafeArea";

// General styled components
import { MainHeader } from "../../Components/General-styling/header.styles";

// Custom Level styling
import { ContainerBtn, ProgressLabel, ProgressCont, ProgressStage } from "./Components/custom.level.styles";

// Components
import { RoundedBtn } from "./Components/rounded-btn.levels.component";


export const LevelScreen = ({ navigation, route }) => {

    const screenName = route.params.screen;
    const header = route.params.header;

    console.log(header);

    return (
        <SafeAir>
    
            <MainHeader>{ header }</MainHeader>
    
            <ContainerBtn>
                <RoundedBtn num={1} movement={navigation.navigate} screenName={ screenName } />
                <RoundedBtn num={2} movement={navigation.navigate} screenName={ screenName } />
                <RoundedBtn num={3} movement={navigation.navigate} screenName={ screenName } />
                <RoundedBtn num={4} movement={navigation.navigate} screenName={ screenName } />
                <RoundedBtn num={5} movement={navigation.navigate} screenName={ screenName } />
            </ContainerBtn>
    
            <ProgressCont>
                <ProgressLabel>Progress: </ProgressLabel>
                <ProgressStage progress={0.4} color="#172B2D" />
            </ProgressCont>
    
        </SafeAir>
    )
}
