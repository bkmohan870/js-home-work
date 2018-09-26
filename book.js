let bookName = prompt('Enter your book nmae to purchase a book :');
if (bookName !='' && typeof bookName =='string')
{
 var bookCount = +prompt('enter the bookcount :')   ;
 if (bookCount !='' && typeof bookCount =='number')
 {
  console.log(`your purchase order for book :
  book name : ${bookName}
  book count : ${bookCount}`);
     
 }
 else
 {
     console.log('your order not placed book count cant be empty book count should be number');
     
 }
}
else
{
    console.log('bookname cant be empty it should be string');
    
}