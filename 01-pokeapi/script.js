// what's the difference between const and let?
const BASE_API_URL = "https://pokeapi.co/api/v2/";

async function run(){
    // first argument is the endpoint URL
    let url = BASE_API_URL + "pokemon/pikachu";
    console.log(url);
    let response = await axios.get(url);
    console.log(response.data);
    console.log(response.data.base_experience);
}
run();