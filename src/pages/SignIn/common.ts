export const isLatinChar = (str: string) => str[0].match(/[A-z]/) != null    
export const isNumber = (str: string) => str[0].match(/[0-9]/) != null
export const isOtherChar = (str: string) => str[0].match(/[!@#$%^&*()?:;"#-_=+]/) != null
