const navData = {
  title: "KapayaSD",
  navigation: {
    first: "Home",
    second: "Animation",
    third: "Web Design"
  }
};

const nav = `
  <div id="navigation">
    <div id="nav-title">
      <h1>${navData.title}</h1>
    </div>

    <div id="nav-list">
      <ul>
        <li>${navData.navigation.first}</li>
        <li>${navData.navigation.second}</li>
        <li>${navData.navigation.third}</li>
      </ul>
    </div>
  </div>

  

`
const header = document.createElement('header');
header.innerHTML = nav;
header.classList.add('content-wrapper');


export default header;