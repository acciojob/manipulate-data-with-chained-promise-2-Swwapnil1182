//your JS code here. If required.

function initialPromise() { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4])
        }, 3000)
    })
}

function filterEvenPromise(arr) {
    return new Promise((resolve) => {
        const evenNumbers = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                evenNumbers.push(arr[i])
            }
        }

        setTimeout(() => {
            document.getElementById('output').textContent = evenNumbers.join(",")
            resolve(evenNumbers)
        }, 1000)
    })
}

function multiplyPromise(arr){
    return new Promise((resolve)=>{
        const multiplied=[];
        for(let i=0;i<arr.length;i++){
            multiplied.push(arr[i]*2)
        }

        setTimeout(()=>{
            document.getElementById('output').textContent = multiplied.join(",")
                resolve(multiplied)
        },2000)
    })
}

initialPromise()
    .then(result => filterEvenPromise(result))
    .then(filtered => multiplyPromise(filtered))