// npx babel 3-index.jsx --out-file index.js
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(
    <h1>Hi, universe!</h1>
);