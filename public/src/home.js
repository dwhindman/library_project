//returns a total of all books as a number
function getTotalBooksCount(books){
  let sum = 0;
  for(let count in books){
    sum++
  }
return sum;
}
//It returns a _number_ that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts){
  let sum = 0;
  for(let count in accounts){
    sum++
  }
return sum;
}

/*It returns a _number_ that represents the number of books
 _that are currently checked out of the library*/
function getBooksBorrowedCount(books){
  let borrowCount = books.filter((book => book.borrows.filter((check) =>
     check.returned === false).length > 0)) ;
   return borrowCount.length;
} 
function helper(array){
    return array.sort((first, second) => second.count - first.count).slice(0, 5);
}
function getMostCommonGenres(books) {
   let genres = books.map((book) => book.genre);
 
   
   const countByGenre = genres.reduce((allGenres, genre) => {
    const count = allGenres[genre] || 0;
 
    return{
      ...allGenres,
      [genre]: count + 1
    }
    
   }, {});

   const newArr = [];
   for(let name in countByGenre){
    newArr.push({name, count: countByGenre[name]});
   }
   const result = helper(newArr);
  
   return result;
 }

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  })
  return helper(result);

}

function getMostPopularAuthors(books, authors) {
  //loop over all authors
    const writers = {};
    authors.forEach((author) => {
      books.forEach((book) => {
        if(author.id === book.authorId){
          const name = `${author.name.first} ${author.name.last}`
          if(writers[name]){
            writers[name] += book.borrows.length;
          }else{
            writers[name] = book.borrows.length;
          }
        }
      })
    });

    console.log(writers);
    const newArr = [];
   for(let name in writers){
    newArr.push({name, count: writers[name]});
   }
   return helper(newArr);
  //books written by that author, and add up number of borrows for each book
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
