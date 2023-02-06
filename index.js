const tvAdvisor = {
    title: "TV Show Advisor",
    tools: ["CSS","JavaScript","React"],
    desc: "A search machine for tv shows with a slick minimalistic design. After submiting a correct request application generates a detailed page of the show and a list of recommandations.<br>A single-page application that dynamically generates pages based on third-party API with the use of modern function components and react hooks. This project display my ability to deal with asychronous requests and databases.",
    img: "./pics/tv_small.jpg",
    link: "https://tv-show-adviser-two.vercel.app/"
};
const memoGame = {
    title: "the Memory Game",
    tools: ["CSS","JavaScript","React"],
    desc: "The cards are placed face down. In rows and columns. A player turns over two cards, one at a time. The object of the game is to collect all pairs as soon as possible <br>The application was created with help of react framework and demonstrates an advanced use of react hooks and JavaScript.",
    img: "./pics/memo_small.png",
    link:"https://memo-game-six.vercel.app/"
};
const SimonGame = {
    title: "the Simon Game",
    tools: ["CSS","Vanilla JavaScript"],
    desc: "The Simon is a classic memory game. The application creates a series of tones and lights and requires a player to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over.",
    img: "./pics/simon.jpg",
    link:"https://simon-game-red-eta.vercel.app/"
};
const projects = [tvAdvisor, memoGame, SimonGame];

window.addEventListener("resize", () =>{ if(window.innerWidth<600 ){console.log(window.innerWidth);} });

//COMPONENTS
function gallery(array) {
    let gallery = [...array];
    let list = [];
    for (let i = 0; i < gallery.length; i++) {
        const project = gallery[i];
        list.push(
            `
            <div id='${(i)+"project"}' class="singleProject ${i%2===0 ? "odd" : ""}">
                <div class="singleProject_frame">
                <h3 href="${project.link}" class="title">${project.title}</h3>
                    <img style="display:${window.innerWidth>600 ? "none" : "block"}" src="${project.img}" class="thumb"></img>
                    <p class="shortDescription">${project.tools.map( tool => { return '<tag>'+tool+'</tag>'}).join("")}</p>
                    <p>${project.desc}</p>
                    <button class="singleProject_frame_btn" type="button" target="_blank" onclick="window.open('${project.link}')" >
                        <img class="eye" src="eye.svg.png" height="20px" width="20px">
                        take a peek
                    </button>
                </div>
                <a style="display:${window.innerWidth<600 ? "none" : "block"}"><img src="${project.img}" class="view"></img></a>
                <div class="projectGap" >
                    <button style="display:${i===gallery.length-1 ? "none" : "block"}" class="next" type="button" onclick="smoothScroll(document.getElementById('${(i+1)+"project"}'))">↓</button>
                    <button style="display:${i!==gallery.length-1 ? "none" : "block"}" class="next" type="button" onclick="smoothScroll(document.getElementById('${"about"}'))">↑</button>
                    </div> 
            </div>
            `
        )
    }
    list.unshift(`<h2>PROJECTS</h2>`)
    return list
}
    
document.getElementById("Projects").innerHTML=gallery(projects).join("");

//ANIMATIONS
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 8);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}