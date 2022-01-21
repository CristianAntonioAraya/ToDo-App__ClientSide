
export const LocalTheme = () => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'light' || localTheme === 'dark') {
        localTheme === 'light' ? document.body.classList.add('light__theme') : document.body.classList.add('dark__theme')
    } else {
        //if local storage is empty, set the default theme
        document.body.classList.add('light__theme');
    }
}

export const isLight = () => {
    if(document.body.classList.contains('dark__theme')){
        document.body.classList.remove('dark__theme')
    } 
    document.body.classList.add('light__theme')
    localStorage.setItem('theme','light')
}
export const isDark = () => {
    if(document.body.classList.contains('light__theme')){
        document.body.classList.remove('light__theme')
    }
    document.body.classList.add('dark__theme')
    localStorage.setItem('theme','dark')
}