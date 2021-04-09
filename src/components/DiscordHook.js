
export function sendMessage(formData){

    const request = new XMLHttpRequest();
    request.open("POST", 'https://discord.com/api/webhooks/826627333133565963/JlttZ13p4mFq3VNgjOckWbqdHYN3BgFn0TP90A9JVJFKW52rWN6Tnv-I7Q6nRb8GVh3z')
    request.setRequestHeader('Content-type', 'application/json');
    
    request.send(JSON.stringify(formData));
}

