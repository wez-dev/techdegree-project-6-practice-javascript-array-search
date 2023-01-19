const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search ) {
  
  message = `In stock: <strong>${inStock.join(', ')}</strong>`;
  
} else if ( inStock.includes(search.toLowerCase()) ) {

  message = `Yes, we have <strong>${search.toLowerCase()}</strong> - it's #${inStock.indexOf(search.toLowerCase()) +1} on the list`;
  
} else {
  
  message = `Sorry, we do not have <strong>${search}</strong>`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`