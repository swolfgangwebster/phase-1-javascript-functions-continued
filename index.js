// code your solution here
function saturdayFun(a='roller-skate') {
    return `This Saturday, I want to ${a}!`;
}

function mondayWork(a='go to the office') {
    return `This Monday, I will ${a}.`;
}

function wrapAdjective(f) {
    return function (a) {
        return `You are ${f}${a}${f}!`
    }
}