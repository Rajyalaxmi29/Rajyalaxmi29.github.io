/*fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json().then((data) => {
    data.map((value)=>console.log(value.id))
  })
);
*/
fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json().then((data) => console.log(data))
  );