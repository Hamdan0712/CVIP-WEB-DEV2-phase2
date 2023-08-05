
    let htmlCode=document.querySelector('.htmlCode');
    let cssCode=document.querySelector('.cssCode');
    let jsCode=document.querySelector('.jsCode');
    let output=document.querySelector('.output');

    
    const run=function(){
        output.contentDocument.body.innerHTML=htmlCode.value+"<style>"+  cssCode.value +"</style>";

        output.contentWindow.eval(jsCode.value)

    }
    
    htmlCode.addEventListener('keypress',run);
    cssCode.addEventListener('keypress',run);
    jsCode.addEventListener('keypress',run);