
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,} from './characters'
  
export default function generate_pass (passwordlen, upperCase, lowerCase, includenum, includesymb) {
    
    let characterList = ''

    if(lowerCase){
      characterList = characterList + lowerCaseLetters
    }

    if(upperCase){
      characterList = characterList + upperCaseLetters
    }

    if(includenum){
      characterList = characterList + numbers
    }

    if(includesymb){
      characterList = characterList + specialCharacters
    }
    
    return create_password(characterList, passwordlen)
}

const create_password = (characterList, passwordlen) => {
  let pass = ''
  const characterListLength = characterList.length

  for(let i = 0; i < passwordlen; i++){
    const index = Math.round(Math.random() * characterListLength)
    pass = pass + characterList.charAt(index)
  }

  return pass

}