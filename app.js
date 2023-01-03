///////////////////////

// Submit functionality

///////////////////////

// The window will load with a parameter of event to be declared later
window.onload = () => {
    // retrieved information from the form ID within the HTML document. Also, made the page "listen" to any events related to the submit event at the paramter of "e"
    // the document fucntion is invoked by a preventDefault()
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()

        // input user interpreted 
        const search = document.querySelector('input[type="search"]').value

        // acquired the information of an API w/ fetch + URL + text to interpret input users request at searchBar
        fetch('https://bible-api.com/' + search).then((response) => {
            // return parameter reponse at json()
            return response.json()
            // then json to print the acquired information from the API
        }).then((json) => {
            console.log(json, 'Successful')

            document.querySelector('#book_name').innerText = json.reference

            // document.querySelector('#chapter').innerText = json.verses.chapter

            // document.querySelector('#verse').innerText = json.verses.verse

            document.querySelector('#text').innerText = json.text
        },
        // in case there is an error
        (errCode) => {
            console.log(errCode, 'This was not successful');
        })
    })
}

////////////////////

// Get Random Verse

////////////////////

// declarations by querySelector from html IDs
let book = document.querySelector("#book_name")
let text = document.querySelector("#text")
let verse = document.querySelector("#verse")
let button = document.querySelector("#vOTD")

// url of Random API
const url = "https://labs.bible.org/api/?passage=random&type=json&callback="

// GetVerse function
getVerse = (result) => {

    // fetch the URL then response
    fetch(url).then((reponse) => {

        // return response to json
        return reponse.json()

        // then json inner function to console.log results of json and 'Successful'
    }).then((json) => {
        console.log(json, 'Successful')

        // dot notation to express random verses by json at the index of 0 '.' name of obj within the array of API
        book.innerText = `Book: ${json[0].bookname} || Chapter: ${json[0].chapter} || Verse: ${json[0].verse}`
        // verse.innerText = json[0].verse
        text.innerText = `${json[0].text}`
    })
}
    
////////////////////////

// Text Appear

////////////////////////

// function of <p> to appear when pressed
textAppear = () => {
    // declared ID as text by let
    let text = document.querySelector("#textAppear")
    
    // used an if statement to generate 'on' and 'off' like usage
    if(text.style.display === "none") {
        // if clicked on it will display by 'block'
        text.style.display = "block"
    
    } else {
        // else it will be turned 'off' by 'none'
            text.style.display = "none"
        }
    }    

