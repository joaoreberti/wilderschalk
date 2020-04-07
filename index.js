const chalk = require ('chalk')

const classMates = ['Sílvia','Gui', 'Gonçalo', 'André']
const randomChalk = () => {
    chalkColors = ['blue', 'black', 'green', 'red']
    const randomNumber = () => Math.round(Math.random() * (chalkColors.length-1))
    return chalkColors[randomNumber()]





}

classMates.map((classMate) => console.log(chalk[randomChalk()](classMate)))