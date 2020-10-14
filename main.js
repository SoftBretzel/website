function getBirthdate() {
    var date = document.getElementById("birthdate").value;
    var tab = date.split('-')
    let year = parseInt(tab[0], 10)
    let month = parseInt(tab[1], 10) -1
    let day = parseInt(tab[2], 10)
    return birthdate = new Date(year,month,day)

}

function zodiacComparison(date, tab){
    var i;
    for(i=0; i<tab.length-1; i++){
        if(date>new Date(date.getFullYear(),tab[i].month,tab[i].day) && date<new Date(date.getFullYear(),tab[i+1].month,tab[i+1].day)){
          return tab[i]
        }
    }
    if(date>new Date(date.getFullYear(),tab[12].month,tab[12].day)){
       return tab[12]
    }
}

function displayZodiac(signe){
    document.querySelector("#sign").textContent = signe.name
    document.getElementById("image").src=signe.img
}

document.querySelector("#submit").addEventListener("click", () => {
    displayZodiac(zodiacComparison(getBirthdate(),zodiacs))
    event.preventDefault()
})
aries = { name:'Aries', month: 2, day: 21, img: 'zodiacs/aries.png'}
taurus = { name:'Taurus', month: 3, day: 21, img: 'zodiacs/taurus.png'}
gemini = { name:'Gemini', month: 4, day: 21, img: 'zodiacs/gemini.png'}
cancer = { name:'Cancer', month: 5, day: 22, img: 'zodiacs/cancer.png'}
leo = { name:'Leo', month: 6, day: 23, img: 'zodiacs/leo.png'}
virgo = { name:'Virgo', month: 7, day: 23, img: 'zodiacs/virgo.png'}
libra = { name:'Libra', month: 8, day: 23, img: 'zodiacs/libra.png'}
scorpio = { name:'Scorpio', month: 9, day: 23, img: 'zodiacs/scorpio.png'}
sagittarius = { name:'Sagittarius', month: 10, day: 23, img: 'zodiacs/sagittarius.png'}
capricorn1 = { name:'Capricorn', month: 11, day: 22, img: 'zodiacs/capricorn.png'}
capricorn2 = { name:'Capricorn', month: 0, day: 1, img: 'zodiacs/capricorn.png'}
aquarius = { name:'Aquarius', month: 0, day: 21, img: 'zodiacs/aquarius.png'}
pisces = { name:'Pisces', month: 1, day: 19, img: 'zodiacs/pisces.png'}
zodiacs=[capricorn2, aquarius, pisces, aries,taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn1]

// module.exports={
//     getBirthdate: getBirthdate,
//     zodiacComparison: zodiacComparison,
//     zodiacs:zodiacs,
//
// }
