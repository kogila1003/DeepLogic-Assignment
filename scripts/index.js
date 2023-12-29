
function latestNews(){
    fetch("http://localhost:3000/getTimeStories",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            getLatestNews(res)
        })
    })
}

latestNews()

function getLatestNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews');

        let news = document.createElement('h4');
        news.innerText = e.selection2;

        let link2 = document.createElement('a');
        link2.innerText = e.selection2_url;
        link2.href = e.selection2_url;
        let news1 = document.createElement('p');
        news1.innerText = e.time;

        div.append(news, link2,news1)
        document.getElementById('right_div').append(div)
    })

}

function homeNews(){
    fetch("http://localhost:3000/homenews",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            gethomeNews(res)
        })
    })
}

homeNews()

function gethomeNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        let title = document.createElement('h4');
        title.innerText = e.name;

        let title1= document.createElement('h5');
        title1.innerText=e.text;

        let link1 = document.createElement('a');
        link1.innerText = e.url;
        link1.href = e.url;


        div.append(title,title1, link1)
        document.getElementById('left_div').append(div)
    })

}