// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function get16thCenturyInventors (element) {
    return (element.year >= 1500 && element.year < 1600);
}
const sixteenthCenturyInventors = inventors.filter(get16thCenturyInventors);
console.table(sixteenthCenturyInventors);



// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const firstLastName = inventors.map(element => element.first + " " + element.last);
console.table(firstLastName);



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthdateInventors = inventors.sort((element1, element2) => element1.year - element2.year);
console.table(birthdateInventors);



// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalLengthOfLife = inventors.reduce((total, element) =>
    total + (element.passed - element.year), 0);

console.log(totalLengthOfLife);



// 5. Sort the inventors by years lived

const sortingWithAge = inventors.sort((element1, element2) =>
    (element1.passed - element1.year) - (element2.passed - element2.year));

console.table(sortingWithAge);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const listOfBoulevards = document.querySelectorAll("div.mw-category a"); // NodeList to nie tablica;
const arrayOfBoulevards = Array.from(listOfBoulevards);
console.log(arrayOfBoulevards);

function findDe (value) {
    return value.innerText.includes("de");
}

const deInName = arrayOfBoulevards.filter(findDe);
console.log(deInName);



// 7. sort Exercise
// Sort the people alphabetically by last name...

const sortingPeopleByLastName = people.sort((element1, element2) => {
        let lastName1 = element1.split(", ")[0];
        let lastName2 = element2.split(", ")[0];

        return lastName1.localeCompare(lastName2);
    }
);

console.log(sortingPeopleByLastName);

// ... and by first name.

const sortingPeopleByFirstName = people.sort((element1, element2) => {
        let firstName1 = element1.split(", ")[1];
        let firstName2 = element2.split(", ")[1];

        //return firstName1.localeCompare(firstName2);
        return firstName1 > firstName2 ? 1 : -1;
    }
);

console.log(sortingPeopleByFirstName);



// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const newData = data.reduce(function (obj, elem) {
    if (!obj[elem]) {
        obj[elem] = 0;
    }

    obj[elem]++;
    return obj;
}, {});

console.log(newData);
