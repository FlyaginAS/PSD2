'use strict';
function showBlock(block) {
    block.style.display='block';
}
function hideBlock(block){
    block.style.display='none';
}

let site=document.querySelector('.site');
let portfolio=document.querySelector('.portfolio');
let about=document.querySelector('.about');
//console.log( site, portfolio, about);
let siteContent=document.querySelector('.site-content');
let portfolioContent=document.querySelector('.portfolio-content');
let aboutContent =document.querySelector('.about-content');
//console.log(siteContent, portfolioContent, aboutContent);
site.addEventListener('click', function () {
    showBlock(siteContent);
    hideBlock(portfolioContent);
    hideBlock(aboutContent);
});
portfolio.addEventListener('click', function () {
    showBlock(portfolioContent);
    hideBlock(siteContent);
    hideBlock(aboutContent);
});
about.addEventListener('click', function () {
    showBlock(aboutContent);
    hideBlock(siteContent);
    hideBlock(portfolioContent);
});