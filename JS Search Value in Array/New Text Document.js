const xyz = [123,456,789,345,687,654]
const value= 0
var found = false
    for (var i =0 ; i< xyz.length; i++){
        if (xyz[i] == value){
            console.log('Data found ' + xyz[i])
            break;
        }else{
            console.log('data not found ')
            found = true
            break;
        }
    }
