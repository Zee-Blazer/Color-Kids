
// React native
import { TouchableOpacity } from "react-native";

// Shapes
import { Triangle, Square, Rectangle, Circle, Trapezoid, Semicircle } from "../../../Components/Shape-styling/all-shapes.style";

export const SpecificShape = ({ src, type, color, getValue }) => {

    switch (type) {
        case "Triangle":
            return (
                <TouchableOpacity onPress={ () => getValue("Triangle") }>
                    <Triangle src={ src && src } color={ color && color } />
                </TouchableOpacity>
            )
            break;
        case "Square":
            return (
                <TouchableOpacity  onPress={ () => getValue("Square") }>
                    <Square src={ src && src } color={ color && color } />
                </TouchableOpacity>
            )
            break;
        case "Semicircle":
            return (
                <TouchableOpacity  onPress={ () => getValue("Semicircle") }>
                    <Semicircle src={ src && src } color={ color && color } />
                </TouchableOpacity>
            )
            break;
        case "Circle":
            return (
                <TouchableOpacity  onPress={ () => getValue("Circle") }>
                    <Circle src={ src && src } color={ color && color } />
                </TouchableOpacity>
            )
            break;
        case "Rectangle":
            return (
                <TouchableOpacity  onPress={ () => getValue("Rectangle") }>
                    <Rectangle src={ src && src } color={ color && color } />
                </TouchableOpacity>
            )
            break;
        default:
            break;
    }

    // return (
    //     <></>
    // )
}