
// Imported React Native components
import { TouchableOpacity } from "react-native";

// Styled component
import { Rounded, RoundedText } from "./custom.level.styles"

export const RoundedBtn = ({ num, movement }) => (
    <TouchableOpacity onPress={ () => movement("BothFit") }>
        <Rounded>
            <RoundedText>{ num }</RoundedText>
        </Rounded>
    </TouchableOpacity>
)
