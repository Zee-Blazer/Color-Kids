import React, { createContext, useContext } from 'react';

export const BothFitContext = createContext();

export const BothFitContextProvider = ({ children }) => {

    return (
        <BothFitContext.Provider
            value={{
                main: 'Data is flowing'
            }}
        >
            { children }
        </BothFitContext.Provider>
    )
}
