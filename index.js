// Write your code in this file!

const scuberGreetingForFeet = ft => {
    if (ft <= 400) return 'This one is on me!'
    if (ft > 2000 && ft < 2500) return 'I will gladly take your thirty bucks.'
    if (ft > 2500) return 'No can do.'
}

const ternaryCheckCity = city => city === 'NYC' ? 'Ok, sounds good.' : 'No go.'

const switchOnCharmFromTip = tip => {
    switch (tip) {
        case 'generous':
            return 'Thank you so much.'
        case 'not as generous':
            return 'Thank you.'
        case 'thanks for everything':
            return 'Bye.'
    }
}