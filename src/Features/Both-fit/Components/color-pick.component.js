
// Styled components from Both-fit custom style
import { TitleHeader, ItemContainer } from "./custom.both-fit.style";

// Shapes imported
import { Circle } from "../../../Components/Shape-styling/all-shapes.style";

export const ColorPick = () => (
    <>
        <TitleHeader>Color</TitleHeader>

        <ItemContainer
            contentContainerStyle={{ justifyContent: "space-between", }}
            horizontal
        >
            <Circle src="small" color="red" />
            <Circle src="small" color="blue" />
            <Circle src="small" color="purple" />
            <Circle src="small" color="pink" />
            <Circle src="small" color="yellow" />
            <Circle src="small" />
        </ItemContainer>
    </>
)
