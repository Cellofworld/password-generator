
export function warningDisplay(passLength, password) {

    let optionResult = {
        option: '',
        description: '',
    }

    if (password === '') {
        optionResult.option = 'perfect'
        optionResult.description = 'Потяните за шкалу снизу'
    }else if (passLength <= 10) {
        optionResult.option = 'bad'
        optionResult.description = 'Ненадежный пароль'
   } else if (passLength <= 19) {
        optionResult.option = 'med'
        optionResult.description = 'Средний пароль'
   }else if (passLength >= 20) {
        optionResult.option = 'perfect'
        optionResult.description = 'Надежный пароль'
   }
    return optionResult
}