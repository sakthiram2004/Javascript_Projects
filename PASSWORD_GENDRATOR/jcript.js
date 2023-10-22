const passwordbox=document.getElementById("Password");
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num="012345689";
const sym="!@#$%^&*()_?/><\|";
const length=12;

const all= upper+lower+num+sym;
function create()
{
    let pass="";
    while(length>pass.length)
    pass+=all[Math.floor(Math.random()*all.length)];
passwordbox.value=pass;
}
function copy()
{
    passwordbox.select();
    document.execCommand("copy");
}
