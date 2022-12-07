const fetchBanks = () =>{
    const url = `https://brasilapi.com.br/api/banks/v1`

    fetch(url)
    .then(response => response.json())
    .then(Banks => {
        console.log(Banks)
    })
}
fetchBanks()