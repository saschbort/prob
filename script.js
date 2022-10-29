async function getResponse() {
let response = await feteh( "https://dzen.ru/news?issue_tld=ru")
let content = await response.json()
content = content.splice(1, 10)

let list = document.querySelector('.posts')
Let key;

//for in
for (key=0 key<10 key++) {
list.innerHTML += "<li class="post"><h4>${content[key].title}</h4><img src="${content[key]-url}" width="300"></li>"
}
getResponse()
console.log(getResponse)