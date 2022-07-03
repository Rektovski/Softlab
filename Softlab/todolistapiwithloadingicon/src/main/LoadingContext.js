import React, {useContext} from "react";

const LoadingContext = React.createContext({});

export function useThemeContext(){
    return useContext(LoadingContext);
}

export default LoadingContext;