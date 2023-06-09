import React, { createContext, useEffect, useState } from 'react';

export const BothFitContext = createContext();


export const BothFitContextProvider = ({ children }) => {

    const levelData = [[4,2],[5,2],[6,3],[7,4],[8,5]];

    // useState functionalities
    const [level, setLevel] = useState(1);

    const nextLevel = (l) => {
        if(l == level){
            setLevel(level+1);
        }
    }

    return (
        <BothFitContext.Provider
            value={{
                main: 'Data is flowing',
                currentLevel: level,
                levelData,
                nextLevel
            }}
        >
            { children }
        </BothFitContext.Provider>
    )
}
