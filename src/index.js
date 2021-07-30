import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Home from './home.svg'
import Chart from './chart.svg'
import AboutMe from './about-me.svg'

document.getElementById("illustration-home").src=Home;
document.getElementById("chart").src=Chart;
document.getElementById("about-me").src=AboutMe;

function openEmail(){
    window.location.href = "mailto:s.claret.v@gmail.com";
}