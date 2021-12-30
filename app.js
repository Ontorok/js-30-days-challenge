const inventors = [
    { firstName: 'Albert', lastName: 'Einstein', birth: 1879, passed: 1955 },
    { firstName: 'Isaac', lastName: 'Newton', birth: 1643, passed: 1727 },
    { firstName: 'Galileo', lastName: 'Galilei', birth: 1564, passed: 1642 },
    { firstName: 'Marie', lastName: 'Curie', birth: 1867, passed: 1934 },
    { firstName: 'Johannes', lastName: 'kepler', birth: 1571, passed: 1630 },
    { firstName: 'Nicolaus', lastName: 'Copernicus', birth: 1473, passed: 1543 },
    { firstName: 'Max', lastName: 'Planck', birth: 1858, passed: 1947 }
];

const people = [
    'Cairo Mora'
    , 'Abdullah Shaw'
    , 'Rachael Kaufman'
    , 'Jamaal Hagan'
    , 'Kalem Russo'
    , 'Kurt Parkes'
    , 'Naveed Harper'
    , 'Jerome Mackie'
    , 'Arfa Arellano'
    , 'Aleah Wainwright'
    , 'Alissa Mccabe'
    , 'Celeste Wiley'
    , 'Emilee Mustafa'
    , 'Ali Bonilla'
    , 'Sunil Bevan'
    , 'Elen Browne'
    , 'Bobbie Markham'
    , 'Brandy Henson'
    , 'Dawson Pritchard'
    , 'Hettie Williams'
    , 'Sofie Paul'
    , 'Isabelle Guzman'
    , 'Waseem Pope'
    , 'Murphy Mccall'
    , 'Jim Melia'
    , 'Shae Craft'
    , 'Nabilah Bellamy'
    , 'Jago Sharples'
    , 'Nelson Strong'
    , 'Cecil Thorpe'
    , 'Saif Greenwood'
    , 'Amelia Snider'
    , 'Joseff Chandler'
    , 'Keelan Lowe'
    , 'Yanis Ratcliffe'
    , 'Francisco Rennie'
    , 'Viola Floyd'
    , 'Kezia Briggs'
    , 'Holly Gregory'
    , 'Harrison Good'
    , 'Subhaan Croft'
    , 'Geraldine Sosa'
    , 'Muna Henderson'
    , 'Eshaan Peterson'
    , 'Emmanuel Redfern'
    , 'Lea Bautista'
    , 'Kohen Dickens'
    , 'Mimi Mccarthy'
    , 'Mina Contreras'
    , 'Kayan Donald'
];

// 1. Filter the list of inventors for those who were born in 1500's
const fifteen = inventors.filter(inventor => inventor.birth <= 1599 && inventor.birth >= 1500);
//console.table(fifteen);

// 2. Give us an array of inventors first name and last name
const inventorsname = inventors.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
//console.log(inventorsname);

// 3. Sort the inventors by birth date, oldest to youngest
const sortedInventors = inventors.sort((first, second) => first.birth < second.birth ? 1 : -1);
//console.table(sortedInventors);

// 4. How mane years did all inventors lived
const totalLived = inventors
    .map(inventor => ({ ...inventor, lived: inventor.passed - inventor.birth }))
    .reduce((acc, curr) => {
        return acc + curr.lived;
    }, 0);

//console.log(totalLived);

// 5. Sort the inventors by years lived
const sortedInventorsByLived = inventors
    .map(inventor => ({ ...inventor, lived: inventor.passed - inventor.birth }))
    .sort((a, b) => a.lived > b.lived ? 1 : -1);


//console.table(sortedInventorsByLived);

// 6. Create a list of Bourevard in paris that contains 'de' anywhere in the name
// source: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const items = Array.from(category.querySelectorAll('a'));
// const names = items.map(item => item.textContent).filter(f => f.includes('de'));


// 7. Sort the people alphabetically by last name
const peoplenames = people.map(p => p.split(' '));
const sortedPeople = peoplenames.sort((a, b) => a[1] > b[1] ? 1 : -1);
//console.table(sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transport = data.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }

    return acc;
}, {});
console.log(transport);
