let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')


menu.onclick = () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('move')
}

document.addEventListener("DOMContentLoaded", function(){
    var searchinput =
    document.querySelector('.search-input');
    searchinput.addEventListener('keypress',
    function(event){
        if(event.key === 'Enter'){
            search();
        }
    });
});

var movies = [
    { 
        title: "The Marvels", 
        year: "2023", 
        rating: 8.1
        
    },
    { 
        title: "Aquaman And The Lost Kingdom", 
        year: "1972", 
        rating: 9.2
    },
    { 
        title: "The Dark Knight", 
        year: "2008", 
        rating: 9.0
    },
    { 
        title: "Evil Dead Rise", 
        year: "1972", 
        rating: 9.2
    },
    { 
        title: "60 Minutes", 
        year: "1972", 
        rating: 9.2
    },
    { 
        title: "Fantastic Beasts:The Secrets of Dumbledore", 
        year: "2022", 
        rating: 6.2
    },
    { 
        title: "Freelance", 
        year: "2023", 
        rating: 5.4
    },
    { 
        title: "The Lost City ", 
        year: "2022", 
        rating: 6.1
    },
    { 
        title: "Aquaman And The Lost Kingdom", 
        year: "1972", 
        rating: 9.2
    },
    { 
        title: "Aquaman And The Lost Kingdom", 
        year: "1972", 
        rating: 9.2
    },
];

function displayMovieDetails(title) {
    // Replace spaces in the movie title with underscores
    var formattedTitle = title.replace(/ /g, "_");
    
    // Construct the path to the HTML file for the download page
    var downloadPageUrl = "/downloads/" + formattedTitle + ".html";
    
    // Redirect the user to the download page for the selected movie
    window.location.href = downloadPageUrl;
}

function search() {
    var query = document.querySelector('.search-input').value.trim();
   if (query === ''){
    alert('The fuck fill in the box first');
    return;
   }
    var searchResultsContainer = document.querySelector('.search-results');
    searchResultsContainer.innerHTML = '';

    movies.forEach(function(movie) {
        if (movie.title.toLowerCase().includes(query.toLowerCase())) {
            var resultElement = document.createElement('div');
            resultElement.classList.add('movie-result');

            var titleElement = document.createElement('h3');
            titleElement.textContent = movie.title;

            var yearElement = document.createElement('p');
            yearElement.textContent = "Year: " + movie.year;

            var ratingElement = document.createElement('p');
            ratingElement.textContent = "Rating: " + movie.rating;

            // Add click event listener to the resultElement
            resultElement.addEventListener('click', function() {
                displayMovieDetails(movie.title);
            });

            resultElement.appendChild(titleElement);
            resultElement.appendChild(yearElement);
            resultElement.appendChild(ratingElement);

            searchResultsContainer.appendChild(resultElement);

           
        }
    });

}
