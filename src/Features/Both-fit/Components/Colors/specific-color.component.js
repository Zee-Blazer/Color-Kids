
// TouchableOpacity from React native
import { TouchableOpacity } from "react-native";

// Circle shape
import { Circle } from "../../../../Components/Shape-styling/all-shapes.style";

export const SpecificColor = ({ type, getValue }) => {

    return (
        <TouchableOpacity onPress={ () => getValue(type) } >
            <Circle src="small" color={type} />
        </TouchableOpacity>
    )
}
