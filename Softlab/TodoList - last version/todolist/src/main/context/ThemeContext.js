import React, {useContext} from 'react'

const ThemeContext = React.createContext({})

export function useThemeContext(){
    return useContext(ThemeContext);
}

export default ThemeContext;