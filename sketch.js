function setup() {
  noCanvas();
  index = 1
  seasons = "1"
  episodes = "1"
  selectSeason = createSelect();
  selectSeason.position(0,0)
  selectSeason.class("seselect")
  selectSeason.option("Season 1");
  selectSeason.option("Season 2");
  selectSeason.option("Season 3");
  selectEpisode = createSelect();
  selectEpisode.class("epselect")
  selectEpisode.position(0, 50)
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

function draw() {
}

function content() {
  let iFrame = document.getElementById("vidplay");
  ep = selectEpisode.selected();
  se = selectSeason.selected();
  e = ep.replace("Episode ", "")
  s = se.replace("Season ", "")
  seasons = s
  episodes = e
  iFrame.src = "https://vidsrc.me/embed/tv?imdb=tt6741278&season=" + seasons + "&episode=" + episodes
  
}

