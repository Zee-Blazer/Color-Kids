import React, { useContext, useState } from 'react';

// Context
import { BothFitContext } from '../../../Services/Both-fit/both-fit.context';

export const CurrentLevel = ( type ) => {

    const { currentLevel } = useContext( BothFitContext );

    let main;

    switch(type) {

        case "Both":
            main = currentLevel;
            break;
        
        case "Color-Fit":
            console.log("Doing greatly");
            break;

        case "Shape-Fit":
            console.log("Something good is cooking up here");
            break;
        

    }

    return main;
}
