async function fetchCachorro() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    data.message;
}

export default fetchCachorro;