function doubleValues(array){
    const doubleArray = [];
    array.forEach(function(value){
        doubleArray.push(value * 2);
    });
    return doubleArray;
}
function onlyEvenValues(array){
    const evenArray = [];
    array.forEach(function(value){
        if(value % 2 === 0){evenArray.push(value);
    }});
    return evenArray;
}
function showFirstAndLast(array){
    const firstLastArray = [];
    array.forEach(function(value){
        firstLastArray.push(value.charAt(0)+value.charAt(value.length-1));
    })
    return firstLastArray;
}
function addKeyAndValue(objArray, key, value){
    objArray.forEach(function(object){
        object[key]=value;    
    })
    return objArray
}
function vowelCount(str){
    const lowerCaseStr=str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let vowelCounts = {};
        vowels.forEach(function(val){
            let count = 0;
            for(i=0;i<lowerCaseStr.length;i++){
                if (val == lowerCaseStr[i]){
                    count++
                }
            }
            if(count>0){
                vowelCounts[val]=count;
            }            
        });
        return vowelCounts;
}
function doubleValuesWithMap(array){
    return array.map(function(value){
        return value*2;
    })
}
function valTimesIndex(array){
    return array.map(function(val, index){
        return val * index;
    })
}
function extractKey(array, key){
    return array.map(function(value){
        return value[key];
    })
}
function extractFullName(obj){
    return obj.map(function(obj){
        return obj.first + ' ' + obj.last;
    })
}
function filterByValue(arr, key){
    return arr.filter(function(obj){
        return obj[key];
    })
}
function find(arr, val){
    const filteredArray = arr.filter(function(value){
        return val == value;
    })
    return filteredArray[0];
}
function findInObj(objArray, key, value){
    const filteredObj = objArray.filter(function(val){
        return value == val[key];
    })
    return filteredObj[0];
}
function removeVowels(str){
    const Vowels = 'aeiou'
    return str
        .toLowerCase()
        .split("")
        .filter(function(val){
         return Vowels.indexOf(val) === -1;
    })
    .join("");
}
function doubleOddNumbers(arr){
    const oddArray = arr.filter(function(val){
        return val %2 === 0;
    })
    oddArray.map(function(value){
        return value *2;
    })
}