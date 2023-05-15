
// Imported React Native components
import { TouchableOpacity } from "react-native";

// Locked Icon
import { Entypo } from '@expo/vector-icons';

// Styled component
import { Rounded, RoundedText, LockedLevel } from "./custom.level.styles"

export const RoundedBtn = ({ num, movement, screenName, lock }) => {

    return (
        <TouchableOpacity onPress={ () => movement(screenName, { level: num }) }>
            <Rounded>
                
                {/* <LockedLevel>
                    <Entypo name="lock" size={24} color="white" />
                </LockedLevel> */}

                { lock && <Entypo name="lock" size={24} color="white" style={{ 
                        position: 'absolute', marginTop: 32, marginLeft: 36 
                    }} 
                /> }
                <RoundedText>{ num }</RoundedText>
            </Rounded>
        </TouchableOpacity>
    )
}
