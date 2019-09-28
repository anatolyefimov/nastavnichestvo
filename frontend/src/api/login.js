async function login(data) {
    let res = await fetch('/app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    res = await res.json();
    return res;
}

export default login;