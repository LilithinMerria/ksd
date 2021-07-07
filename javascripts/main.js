const sectionData = {
  title: "Kapaya Studio Design",
  team: "Our Team",
  picture: {
      Rene: "../images/rene.jpg",
      Yves: "../images/art.jpg",
      Eric: "../images/eric1.jpg"
  }
};

const mainSection = `
  
  <div id="deco-div"></div>

  <h1>${sectionData.title}</h1>

  <div id="ksd-project-div">
    <div id="animation" class="ksd-project">
    
    </div>

    <div id="web-design" class="ksd-project">
    
    </div>
  </div>

  <div id="team">
    <h1>${sectionData.team}</h1>
  </div>

  <div id="img-co-founders"> 
    <div>
      <img src="${sectionData.picture.Rene}" alt="René Kapaya Co Founder and Artist">
      <h3>René Kapaya</h3>
      <p>Co Founder and Artist</p>
    </div>

    <div>
      <img src="${sectionData.picture.Yves}" alt="Yves Arthur Co Founder and Developer">
      <h3>Yves Arthur</h3>
      <p>Co Founder and Developer</p>
    </div>

    <div>
      <img src="${sectionData.picture.Eric}" alt="Éric Kapaya Co Founder and Marketing">
      <h3>Éric Kapaya</h3>
      <p>Co Founder and Marketing</p>
    </div>
  
  </div>


`
const main = document.createElement('section');
main.setAttribute('id', 'main-section');
main.classList.add('content-wrapper');
main.innerHTML = mainSection;

export default main;