async function fetchMoviesJSON() {
  const response = await fetch('https://randomuser.me/api/?results=5');
  return await response.json();
}

export default fetchMoviesJSON().then(data => {
  return data.results // fetched movies
});