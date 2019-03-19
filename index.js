// Write your code in this file!
let scuberGreetingForFeet = (distanceTraveled) => {
    if (distanceTraveled > 2500) {
        return "No can do."
    }
    else if (distanceTraveled > 2000) {
        return "I will gladly take your thirty bucks."
    } else if (distanceTraveled <= 400) {
        return "This one is on me!"
    }
}

let ternaryCheckCity = (city) => {
    if (city === "NYC") {
        return "Ok, sounds good."
    }
    else {
        return "No go."
    }
}

let switchOnCharmFromTip = (tip) => {
    switch (tip) {
        case "generous":
            return "Thank you so much."
        case "not as generous":
            return "Thank you."
        default:
            return "Bye."
    }
}

// describe('switchOnCharmFromTip()', function () {
//     it('should return "Thank you so much." if the tip is generous', function () {
//         expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//     });
//
//     it('should return "Thank you." if the tip is not as generous', function () {
//         expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//     });
//
//     it('should return "Bye." if anything else', function () {
//         expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//     });
// });