async function getUsers() {
    try {
        const reponse = await fetch("");
        const data = reponse.json();

        console.log(data);
    } catch (error) {
        console.log(error)
    }
    
}

const add = (a, b) => {
    return a + b;
}

function sum() {
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
}

console.log(sum())