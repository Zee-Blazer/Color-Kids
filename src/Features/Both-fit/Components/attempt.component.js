
import { AnswerContainer, AttemptCount, AnswerText, MiddleShape } from "./custom.both-fit.style";

// Shapes import 
import { Semicircle, Circle, Square, Rectangle } from "../../../Components/Shape-styling/all-shapes.style";

// icon importation
import { FontAwesome } from '@expo/vector-icons';

// Specific shape for the game
import { SpecificShape } from "./specific-shape.component";

export const AttemptComponent = ({ question, color, different, shape, attempt, split }) => (
    <AnswerContainer>
        <AttemptCount>{attempt}/2</AttemptCount>
        
        <MiddleShape>
            {
                different ? 
                <SpecificShape type="Circle" color={ color } />

                : 
                
                shape ? <SpecificShape type={ shape } color={ color } />
                    : <FontAwesome name="question" size={100} color="black" />
                
            }
        </MiddleShape>

        { question && <AnswerText>{ split ? question : `${question[0] } & ${ question[1]}`  }</AnswerText> }
    </AnswerContainer>
)
