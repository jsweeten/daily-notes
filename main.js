/*
    Define a variable named `notes` and assign a value of an empty array
*/

const notes = [];
/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

notes.push(
    {
    id: 1,
    text: "This Javascript stuff is pretty cool!",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "feelings", "learning", "observation"
    ]
    },
    {
    id: 2,
    text: "Finish up daily notes in chapter 1 and head on over to chapter 2!",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "task"
    ]
    },
    {
    id: 3,
    text: "The 'for...of' loop is for iterating through objects and a 'for...in; loop in for iterating through arrays",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "code", "learning"
    ]
    }
)

notes.push(
    {
    id: 4,
    text: "I need to buy a second monitor",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "feelings","planning", "observation"
    ]
    },
    {
    id: 5,
    text: "Don't forget to take a brain break every now and then",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "observation", "best practices"
    ]
    },
    {
    id: 6,
    text: "Writing comments in your code helps you think through the problem and will save you time in the long run",
    author: "Jay Sweet",
    date: "2022 August 18",
    topics: [
        "code", "learning", "best practices"
    ]
    }
)

console.log("*** ALL NOTE TOPICS ***");

for (const note of notes) {
    for (let i = 0; i < note.topics.length; i++) {
    console.log(note.topics[i]);
    }
}

console.log("*** Average Topics Per Note ***");

let topicCount = 0;

for (const note of notes) {
    topicCount += note.topics.length;
}

let topicAvg = topicCount / notes.length;

console.log(topicAvg)

const filteredNotes = [];
const criteria = "best practices";

for (const note of notes) {
    if (note.topics.includes(criteria))
    filteredNotes.push(note)
}
console.log(filteredNotes);

console.log("***  Note Articles  ***")

for (const note of notes) {
    const topicJoin = note.topics.join("</section>\n<section>")
    console.log(
        `<article>${note.text}
        <section>${topicJoin}</section>
        </article>`
    )
}