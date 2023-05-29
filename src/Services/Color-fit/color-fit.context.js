import React, { createContext, useEffect, useState } from 'react';

export const ColorFitContext = createContext();


export const ColorFitContextProvider = ({ children }) => {

    const levelData = [4, 6, 8, 10, 12];

    // useState functionalities
    const [level, setLevel] = useState(1);

    const colorNextLevel = (l) => {
        if (l == level) {
            setLevel(level + 1);
        }
    }

    return (
        <ColorFitContext.Provider
            value={{
                main: 'Data is flowing',
                colorLevel: level,
                levelData,
                colorNextLevel
            }}
        >
            {children}
        </ColorFitContext.Provider>
    )
}
