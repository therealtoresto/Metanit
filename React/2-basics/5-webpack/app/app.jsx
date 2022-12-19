const ReactDOM = require('react-dom/client');
const React = require('react');
const Header = require('./components/header.jsx');
const Article = require('./components/article.jsx');

const header = 'Lorem, ipsum.';
const article = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Voluptatum quae quasi amet obcaecati nisi numquam totam provident laborum 
    beatae. Atque rem odio quaerat consequatur ad.`;

ReactDOM.createRoot(document.getElementById('app'))
    .render(
        <div>
            <Header text={header} />
            <Article content={article} />
        </div>
    );