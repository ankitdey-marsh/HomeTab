const sites_tab=[
    {
        Name:"Google",
        icon:"ri-google-fill",
        link:"https://www.google.com/"
    },
    {
        Name:"Youtube",
        icon:"ri-youtube-fill",
        link:"https://www.youtube.com"
    },
    {
        Name:"Twitch",
        icon:"ri-twitch-fill",
        link:"https://www.twitch.tv/"
    },
    {
        Name:"Twitter",
        icon:"ri-twitter-fill",
        link:"https://www.twitter.com"
    },
    {
        Name:"Github",
        icon:"ri-github-fill",
        link:"https://www.github.com"
    },
    {
        Name:"Youtube Music",
        icon:"ri-music-fill",
        link:"https://music.youtube.com/"
    }
]

const addTilesOfSites=()=>{
    for(const sitesnames of sites_tab){
        let newsite=document.createElement('a');
        newsite.classList.add("sites");
        let icon_img=document.createElement('i');
        icon_img.classList.add(sitesnames.icon);
        icon_img.classList.add("icons");
        newsite.href=sitesnames.link;
        newsite.append(icon_img);
        let p=document.createElement('p');
        let link_name=document.createTextNode(sitesnames.Name);
        p.append(link_name);
        p.classList.add("text_decor");
        newsite.append(p);
        let box=document.querySelector("#box");
        box.appendChild(newsite);
    }
}




addTilesOfSites();