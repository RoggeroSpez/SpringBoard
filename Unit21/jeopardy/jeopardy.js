// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 3;


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const res = await axios.get('https://jservice.io/api/catergories?count=50');
    const catIds = res.data.map(results => result.Id);
    return _.samplingSize(catIds, NUM_CATEGORIES);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    const res = await axios.get(`https://jservice.io/api/category?id=${catId}`);

  let allClues = res.data.clues;
  let randomClues = _.sampleSize(allClues, NUM_QUESTIONS_PER_CAT);
  let clues = randomClues.map(clue => ({
    question: clue.question,
    answer: clue.answer,
    showing: null
  }));
  return { title: res.data.title, clues };    
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */


// Create a new script element
const bootstrapScript = document.createElement('script');

// Set the source attribute to the Bootstrap CDN URL
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js';

// Append the script element to the head section of the document
document.body.appendChild(bootstrapScript);


async function fillTable() {
 
  }

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let id = evt.target.id;
    let [catId, clueId] = id.split('-'); //turns td id into an array, '-' is the separator
    let clue = categories[catId].clues[clueId];
    let text;

  if (clue.showing === null) {
    text = clue.question;
    clue.showing = 'question';
    evt.target.style.color = 'white';
  } else if (clue.showing === 'question') {
    text = clue.answer;
    clue.showing = 'answer';
  } else {
    return;
  }
  $(`#${catId}-${clueId}`).text(text);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $('#start').hide();
    $('#game').hide();
    $('#board').empty();
    setupAndStart();
    $('#spin-container').hide();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $('#game').show();
    $('#start').show();
    $('#start').text('Reset Game');
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    categories = [];
    let catIds = await getCategoryIds();
    for (let id of catids) {
      categories.push(await getCategory(id));
    }
    fillTable();
}

// TODO

/** On page load, add event handler for clicking clues */

// TODO