const person ={
    name: 'Tong',
    age: 30,
    sex: 'male'
}

const user = [
    1, function sum(a, b){
        return a + b
    }   
]

const [value, sum] = user

console.log(value) // 1
console.log(sum(2, 3)) // 5