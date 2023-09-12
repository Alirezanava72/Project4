import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext = createContext({})


export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)

    return (<UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>)
};