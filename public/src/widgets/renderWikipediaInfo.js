
export default function setupTooltip(){
    let tooltipIsRendered = false
    document.getElementById("wikipedia-info").addEventListener('mouseover', () => {
        if(!tooltipIsRendered){
            fetch("https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=equilibrium%20price")
            .then(response => response.text())
            .then(result => {
                document.getElementById('wikipedia-extract').innerText += JSON.parse(result).query.pages["227572"].extract;
                tooltipIsRendered = true;
            })
        }
    })
}