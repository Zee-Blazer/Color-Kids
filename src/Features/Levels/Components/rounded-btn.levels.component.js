
// Imported React Native components
import { TouchableOpacity } from "react-native";

// Styled component
import { Rounded, RoundedText } from "./custom.level.styles"

export const RoundedBtn = ({ num, movement, screenName }) => {

    return (
        <TouchableOpacity onPress={ () => movement(screenName, { level: num }) }>
            <Rounded>
                <RoundedText>{ num }</RoundedText>
            </Rounded>
        </TouchableOpacity>
    )
}
