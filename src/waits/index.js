export const getText = (cb) => {
    setTimeout( () => 
    cb("Hello team, hope we are doing great")), 1000;
};

export const getQuote = () => {
    return new Promise((resolve) => {
        setTimeout( () => 
        resolve("It's getting kinda late")), 1000;
    })
  
};