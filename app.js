const functionOne = (callback) => {
    setTimeout(() => {
        console.log('Function One');
        callback();
    }, 1000);

};
const functionTwo = (callback) => {
    setTimeout(() => {
        console.log('Function Two');
        callback();
    }, 1000);

};
const functionThree = (callback) => {
    setTimeout(() => {
        console.log('Function Three');
        callback();
    }, 1000);

};
const functionFour = (callback) => {
    setTimeout(() => {
        console.log('Function Four');
        callback();
    }, 1000);
};
const functionFive = () => {
    setTimeout(() => {
        console.log('Function Five');
        console.log('---------------------------------');
    }, 1000);

};



setInterval(() => {
    functionOne(
        () => functionTwo(
            () => functionThree(
                () => functionFour(
                    () => functionFive()
                )
            )
        )
    );
}, 5000);


//functionTwo();
//functionThree();
//functionFour();
//functionFive();