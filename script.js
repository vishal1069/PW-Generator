function btn()
{
    
    let inp1=document.getElementById('inp1');
    let opt=document.getElementById('opt');
    if(inp2.checked)
    {
       
       opt.textContent=String.fromCharCode((Math.floor((Math.random()*26)+65)));
    }
    if(inp3.checked){
        opt.textContent=String.fromCharCode((Math.floor((Math.random()*26)+97)));

    }
    if(inp4.checked){
        opt.text=String.fromCharCode((Math.floor((Math.random()*16)+32)));
    }
    if(inp5.checked){
        opt.text=String.fromCharCode((Math.floor((Math.random()*10)+48)));

    }


}