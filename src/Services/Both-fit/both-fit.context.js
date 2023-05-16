import React, { createContext, useContext } from 'react';

export const BothFitContext = createContext();

export const BothFitContextProvider = ({ children }) => {

    return (
        <BothFitContext.Provider
            value={{
                main: 'Data is flowing',
                currentLevel: 1
            }}
        >
            { children }
        </BothFitContext.Provider>
    )
}
