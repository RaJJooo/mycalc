document.addEventListener('DOMContentLoaded', function(){
    const modeswitchbutton=document.getElementById('switch');

    const normalbuttons1=document.querySelectorAll('.normalr1');
    const scientificbuttons1=document.querySelectorAll('.scientificr1');

    const normalbuttons2=document.querySelectorAll('.normalr2');
    const scientificbuttons2=document.querySelectorAll('.scientificr2');

    const normalbuttons3=document.querySelectorAll('.normalr3');
    const scientificbuttons3=document.querySelectorAll('.scientificr3');

    const normalbuttons4=document.querySelectorAll('.normalr4');
    const scientificbuttons4=document.querySelectorAll('.scientificr4');

    const normalbuttons5=document.querySelectorAll('.normalr5');
    const scientificbuttons5=document.querySelectorAll('.scientificr5');

    const radButton = document.getElementById('rad1');
    radButton.addEventListener('click', function() {
        isRadians = !isRadians;
        radButton.textContent = isRadians ? 'RAD' : 'DEG';
    });
    
    const normalbutton6=document.getElementById('bigequal');
    const scientificbutton6=document.getElementById('smallequal');

    modeswitchbutton.addEventListener('click',function(){
        if( modeswitchbutton.textContent === 'ALT'){
            normalbuttons1.forEach(btn => btn.style.display = 'none');
            scientificbuttons1.forEach(btn => btn.style.display = '');

            normalbuttons2.forEach(btn => btn.style.display = 'none');
            scientificbuttons2.forEach(btn => btn.style.display = '');

            normalbuttons3.forEach(btn => btn.style.display = 'none');
            scientificbuttons3.forEach(btn => btn.style.display = '');

            normalbuttons4.forEach(btn => btn.style.display = 'none');
            scientificbuttons4.forEach(btn => btn.style.display = '');

            normalbuttons5.forEach(btn => btn.style.display = 'none');
            scientificbuttons5.forEach(btn => btn.style.display = '');

            normalbutton6.style.display = 'none';
            scientificbutton6.style.display = 'inline';

            modeswitchbutton.textContent = 'alt';
        }
        else
        {
            normalbuttons1.forEach(btn => btn.style.display = 'flex');
            scientificbuttons1.forEach(btn => btn.style.display = 'none');

            normalbuttons2.forEach(btn => btn.style.display = 'flex');
            scientificbuttons2.forEach(btn => btn.style.display = 'none');

            normalbuttons3.forEach(btn => btn.style.display = 'flex');
            scientificbuttons3.forEach(btn => btn.style.display = 'none');

            normalbuttons4.forEach(btn => btn.style.display = 'flex');
            scientificbuttons4.forEach(btn => btn.style.display = 'none');

            normalbuttons5.forEach(btn => btn.style.display = 'flex');
            scientificbuttons5.forEach(btn => btn.style.display = 'none');

            normalbutton6.style.display = 'inline';
            scientificbutton6.style.display = 'none';

            modeswitchbutton.textContent = 'ALT';
        }
        });
});

let input=document.querySelector('input');
let buttons=document.querySelectorAll('button');
let string="";
buttons.forEach(item=>{
    item.onclick=()=>{
        if(item.innerHTML=='=')
        {
            string=eval(string);
            input.value=string;
        }
        
        else if(item.innerHTML=='DEL')
        {
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else if(item.innerHTML=='AC')
        {
            string="";
            input.value=string;
        }
        else if(item.innerHTML=='ALT')
        {
            input.value=string;
        }
        else if(item.innerHTML=='π')
        {
            string+=(Math.PI.toFixed(6));
            input.value=string;
        }
        else if(item.innerHTML=='log')
        {
            string = Math.log10(parseFloat(string));
            input.value = string;
        }
        else if(item.innerHTML=='ln')
        {
            string = Math.log(parseFloat(string));
            input.value = string;
        }
        else if(item.innerHTML=='x²')
        {
            string = Math.pow(parseFloat(string), 2);
            input.value = string;
        }
        else if(item.innerHTML=='x³')
        {
            string = Math.pow(parseFloat(string), 3);
            input.value = string;
        }
        else if(item.innerHTML=='sin')
        {
            string = Math.sin(parseFloat(string) * Math.PI / 180).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='cos')
        {
            string = Math.cos(parseFloat(string) * Math.PI / 180).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='tan')
        {
            string = Math.tan(parseFloat(string) * Math.PI / 180).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='sin⁻¹')
        {
            string = (Math.asin(parseFloat(string)) * 180 / Math.PI).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='cos⁻¹')
        {
            string = (Math.acos(parseFloat(string)) * 180 / Math.PI).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='tan⁻¹')
        {
            string = (Math.atan(parseFloat(string)) * 180 / Math.PI).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='√')
        {
            string = Math.sqrt(parseFloat(string)).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='∛')
        {
            string = Math.cbrt(parseFloat(string)).toFixed(6);
            input.value = string;
        }
        else if(item.innerHTML=='n√')
        {
            calculateanyroot();
        }
        else if(item.innerHTML=='|x|')
        {
            if(string>0)
                input.value=string;
            else
            input.value=string*-1;
        }
        else if(item.innerHTML=='10^x')
        {
            string = Math.pow(10,string);
            input.value = string;
        }
        else if(item.innerHTML=='x!')
        {
            let f=1;
            for(let i=string;i>=1;i--)
            {
                f*=i;
            }
            input.value=f;
        }
        // else if(item.innerHTML=='rad')
        // {
        //     string+=
        //     input.value = string;
        // }
        else if(item.innerHTML=='x<sup>y</sup>')
        {
            input.value=string+"^";
            string+=Math.pow(x,y);
            input.value = string;
        }
        else
        {
            string+=item.innerHTML;
            input.value=string;
        }  
    }
})
function calculateanyroot(){
    let [base, root] = string.split(',');
    string = Math.pow(parseFloat(base), 1 / parseFloat(root)).toFixed(6);
    input.value = string;
}
