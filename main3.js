 document.body.style.padding='0px'
 document.body.style.margin = "0 auto"
 document.body.style.boxSizing = 'border-box'

 const mainDiv = document.createElement('div')
 mainDiv.style.maxWidth = '1440px'
 mainDiv.style.margin = '0 auto'
 mainDiv.style.padding = '10px';
 mainDiv.style.background = '#87509C';

 const header = document.createElement('div')

 header.style.display = 'flex';
 header.style.maxWidth = '1200px'
 header.style.margin = '0 auto'
 header.style.flexDirection = 'column';
 header.style.gap = '113px';

// Создание header элемента
const nav = document.createElement('nav');
nav.style.height = '151px'
nav.style.maxWidth = '1011.02px'
nav.style.alignItems = 'center'
nav.style.display = 'flex'
nav.style.justifyContent = 'center'
nav.style.gap = '483px'

// Добавление логотипа в header
const logo = document.createElement('img');
logo.src = './assets/logo (1).svg'; 
logo.alt = 'Логотип';
nav.appendChild(logo);

// Добавление списка ul в header
const ul = document.createElement('ul');
ul.style.display = 'flex'
ul.style.alignItems = 'center'
ul.style.gap = '24px'

const listItemTexts = ['HOME', 'HOME', 'HOME', 'HOME', 'HOME'];
listItemTexts.forEach(text => {
  const li = document.createElement('li');
  li.textContent = text;
  li.style.listStyle = 'none'
  li.style.fontSize = '16px'
  li.style.color = '#fff'
  ul.appendChild(li);
});
nav.appendChild(ul);
const info = document.createElement('div');
info.style.maxWidth = '1200px';
info.style.display = 'flex';
info.style.flexDirection = 'column';
info.style.justifyContent = 'center';
info.style.alignItems = 'center'; 
info.style.gap = '56px';

const infoTitle = document.createElement('h1')
infoTitle.textContent = 'Hi there! We are the new kids on the block and we build awesome websites and mobile apps.'
infoTitle.style.fontSize = '42px';
infoTitle.style.textShadow = '4px 4px 4px rgb(0, 0, 0,25%)';
infoTitle.style.color= '#fff';

const infoBtn = document.createElement('button')
infoBtn.textContent = 'WORK WITH US!'
infoBtn.style.display='flex';
infoBtn.style.alignItems= 'center';
infoBtn.style.justifyContent = 'center';
infoBtn.style.width = '293px';
infoBtn.style.height = '76px';
infoBtn.style.background = '#EB7D4B';
infoBtn.style.color = '#fff';
infoBtn.style.fontSize = '18px';
infoBtn.style.border = 'none';
infoBtn.style.boxShadow='4px 4px 4px 0px rgba(0, 0, 0, 25%)';

info.appendChild(infoTitle)
info.appendChild(infoBtn)
header.appendChild(nav);
header.appendChild(info)
mainDiv.appendChild(header)

document.body.appendChild(mainDiv)