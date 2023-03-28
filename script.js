function newAttribute(x){
    const a = [];
    const number = 1440 / x;
    const random = Math.floor(Math.random() * 10) * 32;
    a.push(`M0`);
    a.push(`${random}L0`)
    for (let i = 0; i < x; i++) {
        const random1 = Math.floor(Math.random() * 10) * 32;
        a.push(random1+'L'+((i + 1) * number));
        a.push(random1+'L'+((i + 1) * number));
    }
    for (let i = 1; i < x; i++) {
        if(x > 1){
            a.push('360L' + number * i);
            a.push('360L' + number * i);
        }
    }
    a.push(`320L0`)
    a.push(`320L0`)
    a.push(`320Z`)
    document.getElementById('demo').setAttribute('d', a);

    const path1 = `path fill="#0099ff" id="demo" class="wave2" fill-opacity="1" d="${a}"`;
    document.getElementById('code2').innerHTML = path1;

}

function newAttribute1(x){
    const a = [];
    const number = 1440 / x;
    const random = Math.floor(Math.random() * 10) * 32;
    a.push(`M0`);
    for (let i = 0; i < x; i++) {
        const random1 = Math.floor(Math.random() * 10) * 32;
        a.push(random1+'L'+((i + 1) * number));
    }
    a.push(`${random}L1440`);
    for (let i = 1; i < x; i++) {
        if(x > 1){
            a.push('360L' + number * i);
        }
    }
    a.push(`320L0`)
    a.push(`320Z`)
    document.getElementById('demo').setAttribute('d', a);

    const path1 = `path fill="#0099ff" id="demo" class="wave2" fill-opacity="1" d="${a}"`;
    document.getElementById('code2').innerHTML = path1;
}


function newAttribute2(x){
    if(x > 1){
        const a = [];
        let number = null;
        if(x === '19'){
            number = (1440 / (x - 1)) / 6;
        }else{
            number = (1440 / x) / 6;
        }
        const number2 = number * 2;
        const y = (1440 / number2) - 1;

        const random = Math.floor(Math.random() * 10) * 32;
        const random1 = Math.floor(Math.random() * 10) * 32;
        let randomRandom = null;
        let random1Random = null;
    
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
      
        if(random === 0){
            randomRandom = Math.floor(Math.random() * 160);
        }else if(random === 32){
            // randomRandom = Math.floor(Math.random() * 176);
            randomRandom = randomIntFromInterval(16, 176);
        }else if(random === 64){
            // randomRandom = Math.floor(Math.random() * 192);
            randomRandom = randomIntFromInterval(32, 192);
        }else if(random === 96){
            // randomRandom = Math.floor(Math.random() * 208);
            randomRandom = randomIntFromInterval(48, 208);
        }else if(random === 128){
            // randomRandom = Math.floor(Math.random() * 224);
            randomRandom = randomIntFromInterval(64, 224);
        }else if(random === 160){
            // randomRandom = Math.floor(Math.random() * 240);
            randomRandom = randomIntFromInterval(80, 240);
        }else if(random === 192){
            // randomRandom = Math.floor(Math.random() * 256);
            randomRandom = randomIntFromInterval(96, 256);
        }else if(random === 224){
            // randomRandom = Math.floor(Math.random() * 272);
            randomRandom = randomIntFromInterval(112, 272);
        }else if(random === 256){
            // randomRandom = Math.floor(Math.random() * 288);
            randomRandom = randomIntFromInterval(128, 288);
        }else if(random === 288){
            // randomRandom = Math.floor(Math.random() * 304);
            randomRandom = randomIntFromInterval(144, 304);
        }else{
            randomRandom = randomIntFromInterval(160, 320);
        }
        if(random1 === 0){
            random1Random = Math.floor(Math.random() * 160);
        }else if(random1 === 32){
            random1Random = randomIntFromInterval(16, 176);
        }else if(random1 === 64){
            random1Random = randomIntFromInterval(32, 192);
        }else if(random1 === 96){
            random1Random = randomIntFromInterval(48, 208);
        }else if(random1 === 128){
            random1Random = randomIntFromInterval(64, 224);
        }else if(random1 === 160){
            random1Random = randomIntFromInterval(80, 240);
        }else if(random1 === 192){
            random1Random = randomIntFromInterval(96, 256);
        }else if(random1 === 224){
            random1Random = randomIntFromInterval(112, 272);
        }else if(random1 === 256){
            random1Random = randomIntFromInterval(128, 288);
        }else if(random1 === 288){
            random1Random = randomIntFromInterval(144, 304);
        }else{
            random1Random = randomIntFromInterval(160, 320);
        }

        const random2 = random < randomRandom ? ((randomRandom - random) / 2) + random : ((random - randomRandom) / 2) + randomRandom;
        const random3 = random1 < random1Random ? ((random1Random - random1) / 2) + random1 : ((random1 - random1Random) / 2) + random1Random;
        const random4 = random < randomRandom ? (randomRandom - random) + randomRandom : randomRandom - (random - randomRandom);
        const random5 = random1 < random1Random ? (random1Random - random1) + random1Random : random1Random - (random1 - random1Random);

        a.push(`M0`);
        a.push(`${random}L${number}`);
        a.push(`${random2}C${number2}`);
        a.push(`${randomRandom}`);
        a.push(`${number2 * 2}`)
        a.push(`${random4}`);
        for(let i = 1; i < y - 2; i++){
            const random320 = Math.floor(Math.random() * 320);
            if (i === 1) {
                a.push(`${number2 * (i + 2)}`);
            }else if((i + 1) % 3 === 0){
                a.push(`C${number2 * (i + 2)}`);
            }else{
                a.push(`${random320}`);
                a.push(`${number2 * (i + 2)}`);
            }
        
        }
        a.push(`${random5}`);
        a.push(`${1440 - number2}`);
        a.push(`${random1Random}`);
        a.push(`${1440 - number}`);
        a.push(`${random3}L1440`);
        a.push(`${random1}L1440`);
        a.push(`320L${1440 - number}`);
        for(let i = y - 1; i >= 0 ; i--){
            if((i-1) % 3 === 0){
                a.push('320C'+`${number2 * (i + 1)}`);
            }else{
                a.push(`${320}`);
                a.push(`${number2 * (i + 1)}`);
            }
        }
        a.push(`${320}`)
        a.push(`${number}`)
        a.push(`320L0`);
        a.push(`320Z`);

        for(let i = 1; i < y; i++){
            if(i % 3 === 0){
                const index = a.indexOf(`C${number2 * (i + 1)}`); 
                if (index !== -1) {
                const x = parseInt(a[Math.floor(i * 1.666666666666667)]);
                const y = parseInt(a[Math.floor((i * 1.666666666666667) + 3)]);
                
                a[index] = x > y ? (((x - y) / 2) + y) + `C${number2 * (i + 1)}` : (((y - x) / 2) + x) + `C${number2 * (i + 1)}`;
                }
            }
        }
        document.getElementById('demo').setAttribute('d', a);

        const path1 = `path fill="#0099ff" id="demo" class="wave2" fill-opacity="1" d="${a}"`;
        document.getElementById('code2').innerHTML = path1;
        
    }else{
        newAttribute1('1');
    }
}




document.getElementById('random_button').addEventListener("click", function(){
    const range = document.getElementById('points').value;
    const random = Math.floor(Math.random() * 10) * 32;
    const random1 = Math.floor(Math.random() * 10) * 32;
    let randomRandom = null;
    let random1Random = null;

    if(document.getElementById('wave1').getAttribute('class') === 'active-wave'){
        newAttribute(range);
    }else if(document.getElementById('wave2').getAttribute('class') === 'active-wave'){
        newAttribute1(range);
    }else{
        newAttribute2(range);
    }

});

document.getElementById('points').addEventListener('input', function(){
    const newValue = document.getElementById('points').value;   
    if(document.getElementById('wave1').getAttribute('class') === 'active-wave'){
        newAttribute(newValue);
    }else if(document.getElementById('wave2').getAttribute('class') === 'active-wave'){
        newAttribute1(newValue);
    }else{
        newAttribute2(newValue);
    }
});

document.getElementById('wave1').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave2'){
        document.getElementById('demo').classList.remove('wave2');
        document.getElementById('demo').classList.add('wave1');
    }else if(document.getElementById('demo').getAttribute('class') === 'wave3'){
        document.getElementById('demo').classList.remove('wave3');
        document.getElementById('demo').classList.add('wave1');
    }

    if(document.getElementById('wave2').getAttribute('class') === 'active-wave'){
        document.getElementById('wave2').classList.remove('active-wave');
        document.getElementById('wave2').classList.add('normal-wave');
        document.getElementById('wave1').classList.remove('normal-wave');
        document.getElementById('wave1').classList.add('active-wave');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave3').getAttribute('class') === 'active-wave'){
        document.getElementById('wave3').classList.remove('active-wave');
        document.getElementById('wave3').classList.add('normal-wave');
        document.getElementById('wave1').classList.remove('normal-wave');
        document.getElementById('wave1').classList.add('active-wave');
        document.getElementById('random_button').click();
    }

    document.getElementById('nice').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="nonzero" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 22L11 22 11 3 22 3 22 21.5172414"></path></svg>`;
    document.getElementById('nice__2').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="nonzero" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 23L1 12.9388611 5.55130912 12.9388611 5.55130912 1 10.0447933 1 10.0447933 9.64319035 14.5085979 9.64319035 14.5085979 14.858897 18.8965816 14.858897 18.8965816 5.5443012 23 5.5443012 23 22.0552669"></path></svg>`;
});

document.getElementById('wave2').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave1'){
        document.getElementById('demo').classList.remove('wave1');
        document.getElementById('demo').classList.add('wave2');
    }else if(document.getElementById('demo').getAttribute('class') === 'wave3'){
        document.getElementById('demo').classList.remove('wave3');
        document.getElementById('demo').classList.add('wave2');
    }

    if(document.getElementById('wave1').getAttribute('class') === 'active-wave'){
        document.getElementById('wave1').classList.remove('active-wave');
        document.getElementById('wave1').classList.add('normal-wave');
        document.getElementById('wave2').classList.remove('normal-wave');
        document.getElementById('wave2').classList.add('active-wave');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave3').getAttribute('class') === 'active-wave'){
        document.getElementById('wave3').classList.remove('active-wave');
        document.getElementById('wave3').classList.add('normal-wave');
        document.getElementById('wave2').classList.remove('normal-wave');
        document.getElementById('wave2').classList.add('active-wave');
        document.getElementById('random_button').click();
    }

    
    document.getElementById('nice').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="M5 16l14-7"></path></svg>`;
    document.getElementById('nice__2').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="nonzero" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 21.3703704L4.66666667 7.51851852 8.33333333 21.3703704 12 4.25925926 15.6666667 19.7407407 19.3333333 1 23 23"></path></svg>`;
});

document.getElementById('wave3').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave1'){
        document.getElementById('demo').classList.remove('wave1');
        document.getElementById('demo').classList.add('wave3');
    }else if(document.getElementById('demo').getAttribute('class') === 'wave2'){
        document.getElementById('demo').classList.remove('wave2');
        document.getElementById('demo').classList.add('wave3');
    }

    if(document.getElementById('wave1').getAttribute('class') === 'active-wave'){
        document.getElementById('wave1').classList.remove('active-wave');
        document.getElementById('wave1').classList.add('normal-wave');
        document.getElementById('wave3').classList.remove('normal-wave');
        document.getElementById('wave3').classList.add('active-wave');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave2').getAttribute('class') === 'active-wave'){
        document.getElementById('wave2').classList.remove('active-wave');
        document.getElementById('wave2').classList.add('normal-wave');
        document.getElementById('wave3').classList.remove('normal-wave');
        document.getElementById('wave3').classList.add('active-wave');
        document.getElementById('random_button').click();
    }

    document.getElementById('nice').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="nonzero" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 13.247l1.833-.876c1.834-.876 5.5-2.63 9.167-2.339 3.667.312 7.333 2.613 9.167 3.801L23 15"></path></svg>'
    document.getElementById('nice__2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" fill-rule="nonzero" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="M1 13.736C2.04 11.933 3.09 5.049 4.146 5c.659.031 1.324 2.817 1.985 5.531.38 1.561.76 3.098 1.138 4.073 1.059 2.574 2.113.935 3.146-.868 1.057-1.803 2.113-3.442 3.146-3.491 1.055.049 2.114 1.688 3.146 4.36 1.052 2.573 2.09 6.178 3.147 5.244 1.05-.869 2.09-6.113 2.618-8.736L23 8.491"></path></svg>'
});
// document.getElementById('color').addEventListener('input', function(){
//     newValue = document.getElementById('color').value;
//     document.getElementById('demo').setAttribute('fill', newValue);
// });

// document.getElementById('number').addEventListener('input', function(){
//     newValue = document.getElementById('number').value;
//     document.getElementById('demo').setAttribute('fill-opacity', newValue);
// });