// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

const rawBatch = [
  {
    "Card Network": "VISA",
    "Card Holder": "Monica Lopez",
    "Card Number": "4521111090683472",
    Expire: "11/30",
    CVC: "262",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Daniel Nelson",
    "Card Number": "374596791166627",
    Expire: "09/24",
    CVC: "8780",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Ryan Little",
    "Card Number": "4712998997094079",
    Expire: "10/22",
    CVC: "924",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Shawna Hunt",
    "Card Number": "4097474302736861104",
    Expire: "10/24",
    CVC: "753",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Jonathan Osborne",
    "Card Number": "4155643062490570",
    Expire: "02/29",
    CVC: "107",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Alexander Pitts",
    "Card Number": "4723626835973052596",
    Expire: "08/22",
    CVC: "658",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Manuel Walton",
    "Card Number": "3584034183334694",
    Expire: "03/24",
    CVC: "969",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Peter Miller",
    "Card Number": "378523949157627",
    Expire: "01/28",
    CVC: "1240",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Michael Levy",
    "Card Number": "4330727663771278",
    Expire: "04/28",
    CVC: "472",
  },
  {
    "Card Network": "Maestro",
    "Card Holder": "Kenneth Porter",
    "Card Number": "676299366952",
    Expire: "01/25",
    CVC: "094",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Garrett Davis",
    "Card Number": "4510949472538",
    Expire: "08/30",
    CVC: "689",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "John Moreno",
    "Card Number": "4846491102124126733",
    Expire: "03/23",
    CVC: "822",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Robert Chambers",
    "Card Number": "340157834540475",
    Expire: "05/30",
    CVC: "6392",
  },
  {
    "Card Network": "Diners Club / Carte Blanche",
    "Card Holder": "Jamie Smith",
    "Card Number": "30212491152182",
    Expire: "07/27",
    CVC: "965",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Herbert Summers",
    "Card Number": "4139314500705",
    Expire: "01/26",
    CVC: "901",
  },
  {
    "Card Network": "Discover",
    "Card Holder": "Michelle Swanson",
    "Card Number": "6542218719015083",
    Expire: "12/26",
    CVC: "887",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Daniel Alvarado",
    "Card Number": "4988109756125877174",
    Expire: "08/29",
    CVC: "994",
  },
  {
    "Card Network": "Mastercard",
    "Card Holder": "John Taylor",
    "Card Number": "2253876907697919",
    Expire: "12/24",
    CVC: "766",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "John Perez",
    "Card Number": "4731246175828",
    Expire: "10/22",
    CVC: "700",
  },
  {
    "Card Network": "Mastercard",
    "Card Holder": "John Kirby",
    "Card Number": "5152415356066485",
    Expire: "11/29",
    CVC: "702",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Sean Chase",
    "Card Number": "180015001076157",
    Expire: "12/24",
    CVC: "842",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Sara Nelson",
    "Card Number": "3504231267835243",
    Expire: "12/25",
    CVC: "713",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Anna Thompson",
    "Card Number": "379593224453529",
    Expire: "07/26",
    CVC: "5448",
  },
  {
    "Card Network": "Maestro",
    "Card Holder": "Javier Lee",
    "Card Number": "503828323249",
    Expire: "01/24",
    CVC: "978",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Meghan West",
    "Card Number": "180022332568134",
    Expire: "12/22",
    CVC: "157",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "John Wilson",
    "Card Number": "4289976741123918",
    Expire: "04/24",
    CVC: "659",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Scott Fisher",
    "Card Number": "370184640299479",
    Expire: "10/30",
    CVC: "4382",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Shannon Moore",
    "Card Number": "4574560866329",
    Expire: "11/27",
    CVC: "602",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Rebecca Bailey",
    "Card Number": "3589994960036256",
    Expire: "09/23",
    CVC: "555",
  },
  {
    "Card Network": "Maestro",
    "Card Holder": "Karen Moody",
    "Card Number": "676373090775",
    Expire: "09/26",
    CVC: "635",
  },
  {
    "Card Network": "Discover",
    "Card Holder": "Richard Thomas",
    "Card Number": "6552452243382498",
    Expire: "01/31",
    CVC: "682",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Erin Acevedo",
    "Card Number": "370789148987746",
    Expire: "09/26",
    CVC: "0350",
  },
  {
    "Card Network": "Maestro",
    "Card Holder": "Carolyn Martinez",
    "Card Number": "503824396041",
    Expire: "12/31",
    CVC: "190",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Jeremy Ochoa",
    "Card Number": "3572342462799485",
    Expire: "04/29",
    CVC: "674",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Patrick Lynch",
    "Card Number": "4261762977805390",
    Expire: "04/25",
    CVC: "261",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Melissa Reyes",
    "Card Number": "180088925607035",
    Expire: "10/23",
    CVC: "986",
  },
  {
    "Card Network": "JCB",
    "Card Holder": "Jamie Schmitt",
    "Card Number": "180037465360752",
    Expire: "01/23",
    CVC: "593",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Paula Matthews",
    "Card Number": "4189644209464855887",
    Expire: "03/26",
    CVC: "673",
  },
  {
    "Card Network": "American Express",
    "Card Holder": "Christine Blair",
    "Card Number": "376172779586299",
    Expire: "01/23",
    CVC: "6634",
  },
  {
    "Card Network": "VISA",
    "Card Holder": "Barbara Johnson",
    "Card Number": "4285329354555014",
    Expire: "10/22",
    CVC: "307",
  },
];
// Add your functions below:

//validates the credit card
//returns TRUE if valid, FALSE otherwise
const validateCred = (digitArray) => {
  // Data will be split into two containers.  Digits to double and modify, and digits to remain.
  // but first copy the original array to avoid mutation;
  let arrayCopy = [...digitArray].reverse(); //reverse to allow for right to left eval of original sequence
  let doubledDigits = [];
  let singleDigits = [];

  // pull out the check digit
  singleDigits.push(arrayCopy.shift());

  //As you iterate, every other digit is of the remaing number will be doubled starting with the first.
  arrayCopy.forEach((digit, index) => {
    if (index % 2 === 0) doubledDigits.push(digit);
    else singleDigits.push(digit);
  });

  //perform doubling and adjustments
  doubler(doubledDigits);

  // Sum up all the digits in the credit card number.
  let sum = singleDigits
    .concat(doubledDigits)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  // If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
  return sum % 10 === 0;
};

//doubles the digit and then subtracts 9 if the value is greater than 9
//returns the final array
const doubler = (doubledDigits) => {
  // If the number is greater than 9 after doubling, subtract 9 from its value.
  doubledDigits.forEach((digit, index) => {
    digit *= 2;
    if (digit > 9) digit -= 9;
    doubledDigits[index] = digit;
  });
};

// findInvalidCards() that has one parameter for a nested array of credit card numbers.
// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and
// returns another nested array of invalid cards.
const findInvalidCards = (cardsArray) => {
  let invalidCards = [];

  cardsArray.forEach((card) => {
    if (!validateCred(card)) invalidCards.push(card);
  });

  return invalidCards;
};

// Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:
// First Digit	Company
//      3	    Amex (American Express)
//      4	    Visa
//      5	    Mastercard
//      6	    Discover
// If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
// idInvalidCardCompanies() has one parameter for a nested array of invalid numbers
// returns an array of companies.
const idInvalidCardCompanies = (invalidCardsArray) => {
  let invalidCardIssuers = new Set();

  invalidCardsArray.forEach((card) => {
    if (card[0] === 3) invalidCardIssuers.add("Amex");
    else if (card[0] === 4) invalidCardIssuers.add("Visa");
    else if (card[0] === 5) invalidCardIssuers.add("Mastercard");
    else if (card[0] === 6) invalidCardIssuers.add("Discover");
    else console.log("Company not found");
  });
  return [...invalidCardIssuers].sort(); //convert to array and return
};

// createBatch() takes a json array of credit cards and removes the card numbers to prepare for batch processing.
// returns an array of card numbers
const createBatch = (jsonArray) => {
  return jsonArray.map((card) => Array.from(card["Card Number"], Number));
};

let newBatch = createBatch(rawBatch);
let firstBatch = idInvalidCardCompanies(findInvalidCards(newBatch));
console.log(
  firstBatch.length > 0
    ? `The following companies issued invalid cards: ${firstBatch.join(", ")}`
    : "No invalid cards found."
);

let secondBatch = idInvalidCardCompanies(findInvalidCards(batch));
console.log(
  secondBatch.length > 0
    ? `The following companies issued invalid cards: ${secondBatch.join(", ")}`
    : "No invalid cards found."
);
