export default GetBOok=()=>{
   const getBook= fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBvLylt0qOrZQyghGMCj75n-jbywsj9tps')
.then(e=>console.log(e));
return getBook;
}