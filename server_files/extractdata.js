export function extract_data() {
    fetch('https://data.princegeorgescountymd.gov/resource/sphi-rwax.json')
        .then((data) => data.json())
        .then((data) => {

            console.log(data)

            const market_names = [];

            // Retriveing all market names and storing them in an array
            Object.entries(data).map((item) => {
                market_names.push(item[1]["market_name"])
            })

            console.log(market_names)
        })
}
