
let styleMode = localStorage.getItem('styleMode');
       const styleToggle = document.querySelector('.style-button ')
    
       const enableDarkStyle = () => {
        document.body.classList.add('darkstyle');
        localStorage.setItem('styleMode','dark')
       }

       const disableDarkStyle = () => {
        document.body.classList.remove('darkstyle');
        localStorage.setItem('styleMode',null);
       }

       

       styleToggle.addEventListener('click',() => {
        styleMode = localStorage.getItem('styleMode');
        if(styleMode !== 'dark'){
            enableDarkStyle();
            
           
        }else{
            disableDarkStyle();
            
            
           
        }
       });

       if (styleMode === 'dark'){

        enableDarkStyle();
       
   
}



       

