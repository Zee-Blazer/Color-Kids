import React, { createContext, useEffect, useState } from 'react';

export const ShapeFitContext = createContext();


export const ShapeFitContextProvider = ({ children }) => {

    const levelData = [2, 3, 4, 5, 5];

    // useState functionalities
    const [level, setLevel] = useState(1);

    const nextLevel = (l) => {
        if (l == level) {
            setLevel(level + 1);
        }
    }

    return (
        <ShapeFitContext.Provider
            value={{
                main: 'Data is flowing',
                shapeLevel: level,
                levelData,
                nextLevel
            }}
        >
            {children}
        </ShapeFitContext.Provider>
    )
}
