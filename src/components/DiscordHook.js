import react from "react"

function sendMessage(){
    const request = new XMLHttpRequest();
    request.open("POST", 'https://discord.com/api/webhooks/826216402000150558/9IJSamfC_Q-8CW0lrNd6wefvFlhvviic46IGgyrjZaOunEb7mS9XKxjjJb-U4Ulye3qM')
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: 'Captain Hooker',
        avatar_url:'',
        content:'The message'
    }
}
request.send(JSON.stringify(params));