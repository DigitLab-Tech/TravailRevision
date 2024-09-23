import { output1, output2 } from "./output.js";

export function inputToOutput(input){
    input = input
    .replace('<', '')
    .replace(' />', '')
    .replaceAll('data-', '')
    .replaceAll('"', '');

    input = input.split(' ');

    const object = {type: input[0]};

    for(let i = 1; i < input.length; i++){
        let [key, value] = input[i].split('=');
        let transformedKey = key;

        if(!isNaN(value)){
            value = parseInt(value);
        }else if(value.includes('|')){
            value = value.split('|');
        }

        if(key.includes('-')){
            key = key.split('-');

            transformedKey = key[0];

            for(let j = 1; j < key.length; j++){
                transformedKey += key[j][0].toUpperCase() + key[j].slice(1);
            }
        }

        object[transformedKey] = value;
    }

    console.log(object);
    console.log(output2);
    return object;
}