var cities = require('all-the-cities')

// console.log(cities.find(function ( item ) {
//     if ( item.name.toLowerCase() === "chengdu" ) {
//         return true
//     } else {
//         return false
//     }
// }))

console.log(cities.filter( function (item) {
    if (item.population >= 10000000) {
        return true
    } else {
        return false
    }
}))






var overTenMil = cities.filter( function ( item ) {
    // get the population
    // check if the population is greater than 10000000
    var pop = item.population

    if ( pop > 10000000 ) {
        return true
    } else {
        return false
    }
})

console.log(overTenMil, overTenMil.length)



var findCity = function ( cityName ) {
    var city = cities.find( function ( item ) {
        var name = item.name.toLowerCase()
        return name === cityName
    })

    return city
}

console.log(findCity("Chengdu"))


var springs = cities.filter(function(item){
    var name = item.name
    if(name === "Springfield"){
        return true
    }else{
        return false
    }
})

console.log(springs.length)

