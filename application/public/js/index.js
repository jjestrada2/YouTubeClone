var container = document.getElementById('main-content') ;
var counter = document.getElementById('photos-counter');
var searchButton = document.getElementById('search-button');
/*
if(searchButton){
    searchButton.addEventListener('click',function(ev){
        var searchText = document.getElementById('search-text').value;
        if(!searchText) return;
        const searchUrl = `/posts/search?key=${searchText}`
        fetch(searchUrl)
            .then((resp)=> resp.json())
            .then((data) =>{
                console.log(data);
            })

    });

}*/
    

var photosCounter = 0;
var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
/*
function fadeOut(ev){
    const element = ev.currentTarget;
    var opacity = 1;
    var interval = setInterval(function(){
        if(opacity>0){
            opacity-=0.1;
            element.style.opacity = opacity;
        }else{
            clearInterval(interval);
            element.remove();
            counter.innerHTML = `<p>There are ${--photosCounter} photo(s) being shown`;
            
        }
    },50);
}

*/

function buildCardHTML(data){
    return `<article class = "video-container">
    <a href="#" class="thumbnail" data-duration="12:43">
        <img class = "thumbnail-image" src="${data.thumbnailUrl}" alt = "some photo"/>
    </a>
    <div class="video-bottom-section">
        <a href="#">
            <img class="channel-icon" src = "${data.thumbnailUrl}"/>
        </a>
    </div>
    <div class="video-details">
        <a href="#" class="video-title">${data.title}</a>
        <a href="#" class=" video-channel-name">Channel name</a>
        <div class="video-metadata">
            <span>12k views</span>
            ·
            <span>1 week </span>
        </div>
    </div>
</article>`;
}

fetch(url)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        var htmlString ='';
        
        data.forEach(photo => {
            photosCounter +=1;
            htmlString += buildCardHTML(photo);
        });
        container.innerHTML = htmlString;
        
        [...document.getElementsByClassName('video-container')].forEach(function(article){
            article.addEventListener('click',function(ev){
                
                fadeOut(ev);
            })
        });

        counter.innerHTML = `<p>There are ${photosCounter} photo(s) being shown`;
    })