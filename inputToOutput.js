export function inputToOutput(input){
    const splitInput = input
    .replace('<', '')
    .replace(' />', '')
    .replaceAll('data-', '')
    .replaceAll('"', '')
    .split(' ');

    const object = {type: splitInput[0]};

    for(let i = 1; i < splitInput.length; i++){
        let [key, value] = splitInput[i].split('=');

        if(!isNaN(value)){
            value = parseInt(value);
        }else if(value.includes('|')){
            value = value.split('|');
        }

        if(key.includes('-')){
            const charIndex = key.indexOf('-');

            key = key.replace('-', '');
            key = key.slice(0, charIndex) + key[charIndex].toUpperCase() + key.slice(charIndex + 1, key.length);
        }

        object[key] = value;
    }

    return object;
}