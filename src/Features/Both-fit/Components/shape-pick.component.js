
// Styled components
import { TitleHeader, ItemContainer } from "./custom.both-fit.style";

// Shapes
import { Traingle, Square, Rectangle, Circle, Trapezoid } from "../../../Components/Shape-styling/all-shapes.style";

export const ShapePick = () => (
    <>
        <TitleHeader>Shape</TitleHeader>

        <ItemContainer
            contentContainerStyle={{ justifyContent: "space-between", margin: 4 }}
            horizontal
        >
            <Rectangle src="small" />
            <Traingle src="small" />
            <Circle src="small" />
            <Square src="small" />
            <Traingle src="small" />
            <Traingle src="small" />
            <Rectangle src="small" />
            <Traingle src="small" />
        </ItemContainer>
    </>
)
