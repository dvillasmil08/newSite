import axios from 'axios'


export function getPokemon(){

    axios.post('https://discord.com/api/webhooks/826627333133565963/JlttZ13p4mFq3VNgjOckWbqdHYN3BgFn0TP90A9JVJFKW52rWN6Tnv-I7Q6nRb8GVh3z', {
    "embed": 'Flintstone',
       "username": "123456"
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}