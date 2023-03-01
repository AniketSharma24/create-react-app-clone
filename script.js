import React from "react";
import ReactDOM from "react-dom/client";
import reactIcon from './assets/logo/reactIcon.png';

window.scrollTo(0,0)

const heading = React.createElement('h1', {
    className: 'heading'
}, 'React Application')

const image = React.createElement('img', {
    src: reactIcon,
    alt: 'react-logo',
    className: 'react-logo'
})

const headline = React.createElement('p', {
    className: 'headline'
}, ['This app is created without utilizing create-react-app npm command. For more information visit: ', React.createElement('a', {
    href: 'https://github.com/AniketSharma24/create-react-app-clone#readme'
}, 'https://github.com/AniketSharma24/create-react-app-clone#readme')]);

const container = React.createElement('div', {
    className: 'container'
}, [image,heading, headline]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
