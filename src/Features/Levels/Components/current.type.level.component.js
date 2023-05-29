import React, { useContext, useState } from 'react';

// Context
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context'; // Both fit context
import { ColorFitContext } from '../../../Services/Color-fit/color-fit.context'; // Color fit context
import { ShapeFitContext } from '../../../Services/Shape-fit/shape-fit.context'; // Shape fit context

// This component helps tell the current level of the // 
// User playing the game so that the other levels     //
// can be locked                                      //

export const CurrentLevel = ( type ) => {

    // Both fit context 
    const { currentLevel } = useContext( BothFitContext );

    // Color fit context
    const { colorLevel } = useContext( ColorFitContext );

    // Shape fit context
    const { shapeLevel } = useContext( ShapeFitContext );

    let main;

    switch(type) {

        case "Both":
            main = currentLevel;
            break;
        
        case "Color-Fit":
            main = colorLevel;
            break;

        case "Shape-Fit":
            main = shapeLevel;
            break;
        

    }

    return main;
}
