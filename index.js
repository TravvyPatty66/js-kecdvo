// Create the nav element
const nav = document.createElement('nav');

// Set the styles
nav.style.backgroundColor = 'cornflowerblue';
nav.style.fontFamily = 'sans-serif';
nav.style.fontSize = '1.25rem';
nav.style.display = 'flex';
nav.style.alignItems = 'center';

// Create the ul element
const ul = document.createElement('ul');
ul.style.display = 'flex';
ul.style.listStyle = 'none';

// Add the links to the ul
const links = ['Home', 'Portfolio', 'About', 'Contact', 'Privacy Policy'];

for (let link of links) {
  const li = document.createElement('li');
  li.textContent = link;
  li.style.marginRight = '1rem';
  ul.appendChild(li);
}

nav.appendChild(ul);

// Append the nav element to the document body
document.body.appendChild(nav);