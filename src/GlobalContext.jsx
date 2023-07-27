import { createContext} from "react";

export const ContextGlobal  = createContext()

const GlobalContext = (children) => {
    return (
        <ContextGlobal.Provider value={{

        }}>
        {children}
        </ContextGlobal.Provider>
    )
}

export default GlobalContext

// export const useContextGlobal = () => useContext()