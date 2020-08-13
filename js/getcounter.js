
document.addEventListener('DOMContentLoaded', function(){
    const url = 'https://zop9pzrcnj.execute-api.us-east-1.amazonaws.com/Prod/get-visit';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let count = data.sitecount;
        document.querySelector('#site-visits').innerHTML = `${count} visitors have visited this site.`;
    })
    .catch(error => {
        document.querySelector('#site-visits').innerHTML = 'X'});
});
