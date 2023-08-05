import { createContext, useContext } from "react";
import { Shortfact, ShortfactServices } from "../Services/ShortfactServices";
import { useState } from "react";

const Context = createContext();
export const Functions = ({ children }) => {
    const [ shortfact, setShortfact ] = useState({title: ""});

    const createFact = (shortfact) => {
        ShortfactServices.createFact(shortfact)
        .then(res => {
            console.log(res);
        })
    }

    const getFactById = (id) => {
        ShortfactServices.getFactById(id)
        .then(res => {
            console.log(res);
            setShortfact(res.data);
          })
    }
    return(
        <Context.Provider value={{
            shortfact,
            createFact,getFactById,
        }}
        >{children}
        </Context.Provider>
    );
};
export const useFunctions = () => useContext(Context);