import { useState } from "react"
const d = document;

export const useStyleMode = ( initialState ) => {

    const [mode, setMode] = useState(initialState)

    const onModeChange = (e) => {
        // if(mode == 'Light Theme') {

        //     setMode('Dark Theme')
        //     d.querySelector('html').style.backgroundColor = 'black'
        //     d.querySelector('h1').classList.add('lightTheme')
        //     d.querySelector('button').classList.add('lightTheme')
         
        // }else{
        //     setMode('Light Theme')
        //     d.querySelector('html').style.backgroundColor = 'white'
        //     d.querySelector('h1').classList.add('blacktheme')
        //     d.querySelector('button').classList.add('blacktheme')
        // }     

    }

    return {
        mode,
        onModeChange
    }
}
