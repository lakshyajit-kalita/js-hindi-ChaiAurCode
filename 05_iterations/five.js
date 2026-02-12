const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )


// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
    
})

const muCoding = [
    {
        lamguageName : "JavaScript",
        languageFileName : "js"
    },
    {
        lamguageName : "Java",
        languageFileName : "java"
    },
    {
        lamguageName : "python",
        languageFileName : "py"
    }
]

muCoding.forEach( (item) => {
    console.log(item.lamguageName);
    
} )