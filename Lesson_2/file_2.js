// Если я правильно понял то, что нужно было сделать, то так...
// Не понял, или нужно было задействовать как то "год"
let nameSeason = prompt('Введите время года: ')

function Seasons (name){
    this.months = 3,
    this.year = 2022,
    this.nameSeas = function(){
        alert(name + ' имеет ' + this.months + ' месяца.\n' + name + ' прекрасное время года !!!')
    }
}

const season = new Seasons(nameSeason)
season.nameSeas()
