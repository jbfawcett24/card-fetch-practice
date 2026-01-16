//TODO:
// 1. Create a new NPM project
// 2. Get hello world working with Node
// 3. Create a function that returns a dummy object
// 4. Make a fetch request to scryfall with some preset card data 
// 5. Do something with the card data 


//Hello World
console.log("Hello World!")


//returning an object in JS
function returnObject(name, idNum) {
  return {
    name,
    id: idNum
  }
}

//https://scryfall.com/docs/api - for refrence
//getting card data

async function getCardData(set, cn) {
  const apiURL = "https://api.scryfall.com/cards/collection";
  const identifiers = [
    {
      set: set,
      collector_number: cn
    }
  ];

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "identifiers": identifiers })
  }

  console.log(options);

  try {
    const response = await fetch(apiURL, options)
    const data = await response.json();
    console.log(data)
    return data.data;
  } catch (err) {
    console.log(`Error fetching: ${err}`)
  }
}


// get the card and display it
async function init() {
  const card = await getCardData("ori", "179");
  console.log(card)
}

