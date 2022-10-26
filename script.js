 
 function getapi(){

    let name = document.getElementById("name").value

    fetch (`http://127.0.0.1:5000/apiJairo?name=${name}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)

        let greetings = `hola ${name}, ¿Como estas?`

        document.getElementById("printer").innerHTML += greetings;

    })

    
 } 