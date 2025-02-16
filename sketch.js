function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  index = 1
  seasons = "1"
  episodes = "1"
  selectSeason = createSelect();
  selectSeason.position(40, 15)
  selectSeason.class("seselect")
  selectSeason.option("Season 1");
  selectSeason.option("Season 2");
  selectSeason.option("Season 3");
  selectEpisode = createSelect();
  selectEpisode.class("epselect")
  selectEpisode.position(77 + 40, 15)
  selectEpisode.option("Episode 1");
  selectEpisode.option("Episode 2");
  selectEpisode.option("Episode 3");
  selectEpisode.option("Episode 4");
  selectEpisode.option("Episode 5");
  selectEpisode.option("Episode 6");
  selectEpisode.option("Episode 7");
  selectEpisode.option("Episode 8");

  selectEpisode.changed(content);

}
function content() {
  let iFrame = document.getElementById("vidplay");
  ep = selectEpisode.selected();
  se = selectSeason.selected();
  e = ep.replace("Episode ", "")
  s = se.replace("Season ", "")
  iFrame.width = windowWidth/1.2
  iFrame.height = windowHeight/1.2
  iFrame.style.top = windowHeight/10.8 + "px"
  iFrame.style.left = windowWidth/11.8 + "px"
  seasons = s
  episodes = e
  iFrame.src = "https://vidsrc.me/embed/tv?imdb=tt6741278&season=" + seasons + "&episode=" + episodes

  
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(20);
  fill(40);
  rect(windowWidth/2,windowHeight/2 + 5,windowWidth / 1.2 + 50,windowHeight / 1.2 + 50, 20, 20, 20, 20)
  content()
  window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
  });
}


