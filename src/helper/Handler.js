
import { setGeneratePswd } from "../store/slices/GeneratePswdSlice";
import { setPasswordLength } from "../store/slices/InputValueSlice";


export const handler = (el, passwordLength, options, dispatch) => {
    
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";
   
    let allChars = '';
    let randomString = '';

    if (options.uppercase) {
        allChars += upperChars
    }
    if (options.lowercase) {
        allChars += lowerChars
    }
    if (options.symbols) {
        allChars += symbolChars
    }
    if (options.numbers) {
        allChars += numberChars
    }


    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
        
    }

    dispatch(setPasswordLength(el.target.value))
    dispatch(setGeneratePswd(randomString))

    }
