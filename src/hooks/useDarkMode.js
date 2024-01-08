import {useState,useEffect} from 'react';

export const useDarkMode = () => {
const [theme,setTheme] = useState('light');
const toggleTheme = () => {
    if(theme === 'light'){
        localStorage.setItem('theme','dark');
        setTheme('dark');
    }
    else{
        localStorage.setItem('theme','light');
        setTheme('light');
    }
}
useEffect(()=>{
    const localtheme = localStorage.getItem('theme');
    if(localtheme){
        setTheme(localtheme);
    }
},[])
return [theme,toggleTheme];
}
