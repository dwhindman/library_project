//return account that has matching id
const findAccountById = (accounts, id) => accounts.find((account) => account.id === id);

const sortAccountsByLastName = accounts => accounts.sort((accountA, accountZ) => 
accountA.name.last.toLowerCase() > accountZ.name.last.toLowerCase() ? 1 : -1);

// returns a number that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books){
  let borrowed = 0;
  for(let i = 0; i < books.length; i++){
      for(let j = 0; j < books[i].borrows.length; j++){
          if(account.id === books[i].borrows[j].id) borrowed++;
      }
  }
return borrowed;
}

function getBooksPossessedByAccount(account, books, authors){
  let borrowed = [];
   books.forEach((book) => {
     if(book.borrows.find((book) => book.id === account.id && !book.returned)){
       borrowed.push(book);
     };
   });
  
  borrowed.forEach((book) =>{ 
    let person = authors.find((writer) => writer.id === book.authorId);
    book["author"] = person;                        
  });
 
   return borrowed;
 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
