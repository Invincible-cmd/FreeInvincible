function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  load = false
  index = 1
  season1links = ["https://myvidplay.com/e/6irqzfcqz04y/"];
  seasons = "1"
  episodes = "1"
  selectProvider = createSelect();
  selectProvider.position(40,30);
  selectProvider.class("prselect");
  selectProvider.option("EmbedMaster |lowest ads, multi-server choice, high quality|")
  selectProvider.option("2Embed |little to no ads|");
  selectProvider.option("Vidsrc |more ads|");
  selectSeason = createSelect();
  selectSeason.position(40, 15);
  selectSeason.class("seselect");
  selectSeason.option("Season 1");
  selectSeason.option("Season 2");
  selectSeason.option("Season 3");
  selectSeason.option("Season 4");
  selectEpisode = createSelect();
  selectEpisode.class("epselect");
  selectEpisode.position(77 + 40, 15);
  selectEpisode.option("Episode 1");
  selectEpisode.option("Episode 2");
  selectEpisode.option("Episode 3");
  selectEpisode.option("Episode 4");
  selectEpisode.option("Episode 5");
  selectEpisode.option("Episode 6");
  selectEpisode.option("Episode 7");
  selectEpisode.option("Episode 8");

  selectEpisode.changed(content);
  selectSeason.changed(content);
  selectProvider.changed(content);
}
function content() {
  let iFrame = document.getElementById("vidplay");
  ep = selectEpisode.selected();
  se = selectSeason.selected();
  sp = selectProvider.selected();
  e = ep.replace("Episode ", "");
  s = se.replace("Season ", "");
  iFrame.width = windowWidth/1.2
  iFrame.height = windowHeight/1.2
  iFrame.style.top = windowHeight/10.8 + "px"
  iFrame.style.left = windowWidth/11.8 + "px"
  seasons = s
  episodes = e
  if (sp == "Vidsrc |more ads|") {
    iFrame.src = "https://vidsrc.me/embed/tv?imdb=tt6741278&season=" + seasons + "&episode=" + episodes
    }
  if (sp == "2Embed |little to no ads|") {
    iFrame.src = "https://2embed.top/embed/tv/95557/" + seasons + "/" + episodes
    } 
  if (sp == "EmbedMaster |lowest ads, multi-server choice, high quality|") {  
    iFrame.src = "https://embedmaster.link/tv/tt6741278/" + seasons + "/" + episodes  
  }
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(20);
  fill(40);
  rect(windowWidth/2,windowHeight/2 + 5,windowWidth / 1.2 + 50,windowHeight / 1.2 + 50, 20, 20, 20, 20)
  if (load == false) {
    content()
    load = true
  }
}
