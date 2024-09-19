export function validator(object1, object2){
    if(object1 && object2){
        for(let propertyName of Object.getOwnPropertyNames(object1)){
            if(object2[propertyName] && Array.isArray(object1[propertyName]) && Array.isArray(object2[propertyName])){
                for(let i = 0; i < object1[propertyName].length; i++){
                    if(object1[propertyName][i] !== object2[propertyName][i]){
                        return false;
                    }
                }
                return true;
            }

            if(!object2[propertyName] || object1[propertyName] !== object2[propertyName]){
                return false;
            }
        }

        for(let propertyName of Object.getOwnPropertyNames(object2)){
            if(object1[propertyName] && Array.isArray(object1[propertyName]) && Array.isArray(object2[propertyName])){
                for(let i = 0; i < object1[propertyName].length; i++){
                    if(object1[propertyName][i] !== object2[propertyName][i]){
                        return false;
                    }
                }
                return true;
            }

            if(!object1[propertyName] || object1[propertyName] !== object2[propertyName]){
                return false;
            }
        }

        return true;
    }

    return false;
}