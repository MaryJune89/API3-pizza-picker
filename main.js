document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    let pick = document.querySelector('button').value

    const url = 'https://foodish-api.herokuapp.com/api/images/pizza'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.image)
            document.querySelector('img').src = data.image
            //document.querySelector('h3').innerText = data.category
            //document.querySelector('p').innerText = data.group



        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}