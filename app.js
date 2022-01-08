const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const some_people = people.some(p => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - p.year;
    return age >= 19;
});;
//console.log(some_people);

// Array.prototype.every() // is everyone 19 or older?
const every_people = people.every(p => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - p.year;
    return age >= 19;
});;
//console.log(every_people);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
const filter_comment = comments.find(com => com.id === 823423);
//console.log(filter_comment);
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
const filter_comment_index = comments.findIndex(com => com.id === 823423);

// delete the comment with the ID of 823423
//comments.splice(1, 1);
