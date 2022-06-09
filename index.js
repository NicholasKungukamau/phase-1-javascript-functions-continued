// code your solution here
function saturdayFun(activity= "roller-skate"){
   return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity='go to office'){
   return `This Monday, I will ${activity}.`
}

function wrapAdjective(style) {
   return (function(string= 'special'){
   return `You are $(style)${string}${style}!`
})
}
