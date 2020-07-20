const imageHead=document.getElementById('imageHead');
const paragraph1=document.getElementById('paragraph1');
const list1=document.getElementById('list1');

var AWBWlink=document.createElement('a');
AWBWlink.href='https://awbw.amarriner.com';
AWBWlink.innerText='https://awbw.amarriner.com';
var nameIntro='"CoinCidenCe" is the name I came up with when I started to play on AWBW';
paragraph1.append(nameIntro+' ');
paragraph1.append(AWBWlink);
paragraph1.append(' .');

var item1=document.createElement('li');
var item2=document.createElement('li');
item1.innerText="SC"
item2.innerText="Quake";

list1.appendChild(item1);
list1.appendChild(item2);
