import React, { useState, useEffect, useContext } from 'react';

// Component importation
import { ContainerBtn, ProgressLabel, ProgressCont, ProgressStage } from './custom.level.styles';

// External function that helps get the main screen
import { CurrentLevel } from './current.type.level.component';

// Needed component
import { RoundedBtn } from './rounded-btn.levels.component';

// Context
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context'; // Both fit context
import { ShapeFitContext } from '../../../Services/Shape-fit/shape-fit.context'; // Shape fit context
import { ColorFitContext } from '../../../Services/Color-fit/color-fit.context'; // Color fit context

export const ContainerButton = ({ screen, header, movement }) => {

    // Use state context
    const [bothFitProgress, setBothFitProgress] = useState();
    const [colorFitProgress, setColorFitProgress] = useState();
    const [shapeFitProgress, setShapeFitProgress] = useState();

    // Use Context state
    const { currentLevel } = useContext( BothFitContext );
    const { colorLevel } = useContext( ColorFitContext );
    const { shapeLevel } = useContext( ShapeFitContext ) 

    useEffect( () => {
        setBothFitProgress( (10 * ((currentLevel-1) * 2)) /100 );
    }, [currentLevel] )    

    useEffect( () => {
        setColorFitProgress( (10 * ((colorLevel-1) * 2)) /100 );
    }, [colorLevel] )    

    useEffect( () => {
        setShapeFitProgress( (10 * ((shapeLevel-1) * 2)) /100 );
    }, [shapeLevel] )

    switch(screen){
        case "BothFit":
            return (
                <>
                    <ContainerBtn>
                        <RoundedBtn num={1} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 1 } />
                        <RoundedBtn num={2} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 2 } />
                        <RoundedBtn num={3} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 3 } />
                        <RoundedBtn num={4} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 4 } />
                        <RoundedBtn num={5} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 5 } />
                    </ContainerBtn>
            
                    <ProgressCont>
                        <ProgressLabel>Progress: </ProgressLabel>
                        <ProgressStage progress={bothFitProgress} color="#172B2D" />
                    </ProgressCont>
                </>
            )
            break;

        case "ShapeFit":
            return (
                <>
                    <ContainerBtn>
                        <RoundedBtn num={1} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 1 } />
                        <RoundedBtn num={2} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 2 } />
                        <RoundedBtn num={3} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 3 } />
                        <RoundedBtn num={4} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 4 } />
                        <RoundedBtn num={5} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 5 } />
                    </ContainerBtn>
            
                    <ProgressCont>
                        <ProgressLabel>Progress: </ProgressLabel>
                        <ProgressStage progress={shapeFitProgress} color="#172B2D" />
                    </ProgressCont>
                </>
            )
            break;

        case "ColorFit":
            // console.log("We're at color fit")
            return (
                <>
                    <ContainerBtn>
                        <RoundedBtn num={1} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 1 } />
                        <RoundedBtn num={2} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 2 } />
                        <RoundedBtn num={3} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 3 } />
                        <RoundedBtn num={4} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 4 } />
                        <RoundedBtn num={5} movement={ movement } screenName={ screen } lock={ CurrentLevel(header) >= 5 } />
                    </ContainerBtn>
            
                    <ProgressCont>
                        <ProgressLabel>Progress: </ProgressLabel>
                        <ProgressStage progress={colorFitProgress} color="#172B2D" />
                    </ProgressCont>
                </>
            )
            break;
            
        default:
            break;
    }
    
}
