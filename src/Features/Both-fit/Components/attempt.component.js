
import { AnswerContainer, AttemptCount, AnswerText, MiddleShape } from "./custom.both-fit.style";

// Shapes import 
import { Semicircle, Square, Rectangle } from "../../../Components/Shape-styling/all-shapes.style";

export const AttemptComponent = () => (
    <AnswerContainer>
        <AttemptCount>0/3</AttemptCount>
        
        <MiddleShape>
            <Semicircle />
        </MiddleShape>

        <AnswerText>Traingle</AnswerText>
    </AnswerContainer>
)
