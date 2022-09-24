function saturdayFun(target = "roller-skate") {
    return (`This Saturday, I want to ${target}!`);
}
saturdayFun();

function mondayWork(targetTwo = "go to the office") {
    return (`This Monday, I will ${targetTwo}.`)
}
mondayWork();

function wrapAdjective(paramTwo = "*") {
    return function (param ="special") {
        return `You are ${paramTwo}${param}${paramTwo}!`;
    }
}