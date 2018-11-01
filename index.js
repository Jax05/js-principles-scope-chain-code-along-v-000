/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'chad';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'will not work';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'emma';
  let favoriteCustomer = 'steve';
}
