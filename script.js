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
        // console.log(a);
        document.getElementById('demo').setAttribute('d', a);
        console.log(x);
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

    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        newAttribute(range);
    }else if(document.getElementById('wave2').getAttribute('class') === 'active'){
        newAttribute1(range);
    }else{
        newAttribute2(range);
    }
    // function randomIntFromInterval(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }
  
    // if(random === 0){
    //     randomRandom = Math.floor(Math.random() * 160);
    // }else if(random === 32){
    //     // randomRandom = Math.floor(Math.random() * 176);
    //     randomRandom = randomIntFromInterval(16, 176);
    // }else if(random === 64){
    //     // randomRandom = Math.floor(Math.random() * 192);
    //     randomRandom = randomIntFromInterval(32, 192);
    // }else if(random === 96){
    //     // randomRandom = Math.floor(Math.random() * 208);
    //     randomRandom = randomIntFromInterval(48, 208);
    // }else if(random === 128){
    //     // randomRandom = Math.floor(Math.random() * 224);
    //     randomRandom = randomIntFromInterval(64, 224);
    // }else if(random === 160){
    //     // randomRandom = Math.floor(Math.random() * 240);
    //     randomRandom = randomIntFromInterval(80, 240);
    // }else if(random === 192){
    //     // randomRandom = Math.floor(Math.random() * 256);
    //     randomRandom = randomIntFromInterval(96, 256);
    // }else if(random === 224){
    //     // randomRandom = Math.floor(Math.random() * 272);
    //     randomRandom = randomIntFromInterval(112, 272);
    // }else if(random === 256){
    //     // randomRandom = Math.floor(Math.random() * 288);
    //     randomRandom = randomIntFromInterval(128, 288);
    // }else if(random === 288){
    //     // randomRandom = Math.floor(Math.random() * 304);
    //     randomRandom = randomIntFromInterval(144, 304);
    // }else{
    //     randomRandom = randomIntFromInterval(160, 320);
    // }
    // if(random1 === 0){
    //     random1Random = Math.floor(Math.random() * 160);
    // }else if(random1 === 32){
    //     random1Random = randomIntFromInterval(16, 176);
    // }else if(random1 === 64){
    //     random1Random = randomIntFromInterval(32, 192);
    // }else if(random1 === 96){
    //     random1Random = randomIntFromInterval(48, 208);
    // }else if(random1 === 128){
    //     random1Random = randomIntFromInterval(64, 224);
    // }else if(random1 === 160){
    //     random1Random = randomIntFromInterval(80, 240);
    // }else if(random1 === 192){
    //     random1Random = randomIntFromInterval(96, 256);
    // }else if(random1 === 224){
    //     random1Random = randomIntFromInterval(112, 272);
    // }else if(random1 === 256){
    //     random1Random = randomIntFromInterval(128, 288);
    // }else if(random1 === 288){
    //     random1Random = randomIntFromInterval(144, 304);
    // }else{
    //     random1Random = randomIntFromInterval(160, 320);
    // }
    // // M0,32L120,57C240,82,480,132,720,206C960,280,1200,186,1320,139L1440,92L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z
    // // console.log(random + ' ' + randomRandom);
    // // console.log(random1 + ' ' + random1Random);
    // const random2 = random < randomRandom ? ((randomRandom - random) / 2) + random : ((random - randomRandom) / 2) + randomRandom;
    // const random3 = random < randomRandom ? (randomRandom - random) + randomRandom : randomRandom - (random - randomRandom);
    // const random4 = random1 < random1Random ? (random1Random - random1) + random1Random : random1Random - (random1 - random1Random);
    // const random5 = random1 < random1Random ? ((random1Random - random1) / 2) + random1 : ((random1 - random1Random) / 2) + random1Random;
    // const random6 = random3 < random4 ? ((random4 - random3) / 2) + random3 : ((random3 - random4) / 2) + random4;

    // const test = `M0,${random}L120,${random2}C240,${randomRandom},480,${random3},720,${random6}C960,${random4},1200,${random1Random},1320,${random5}L1440,${random1}L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z`;
    // // console.log(test);
    // document.getElementById('demo').setAttribute('d', test);

    // if(document.getElementById('wave1').getAttribute('class') === 'active'){
    //     newAttribute(range);
    // }else{
    //     newAttribute1(range);
    // }

});

document.getElementById('points').addEventListener('input', function(){
    const newValue = document.getElementById('points').value;   
    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        newAttribute(newValue);
    }else if(document.getElementById('wave2').getAttribute('class') === 'active'){
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

    if(document.getElementById('wave2').getAttribute('class') === 'active'){
        document.getElementById('wave2').classList.remove('active');
        document.getElementById('wave1').classList.add('active');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave3').getAttribute('class') === 'active'){
        document.getElementById('wave3').classList.remove('active');
        document.getElementById('wave1').classList.add('active');
        document.getElementById('random_button').click();
    }
});

document.getElementById('wave2').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave1'){
        document.getElementById('demo').classList.remove('wave1');
        document.getElementById('demo').classList.add('wave2');
    }else if(document.getElementById('demo').getAttribute('class') === 'wave3'){
        document.getElementById('demo').classList.remove('wave3');
        document.getElementById('demo').classList.add('wave2');
    }

    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        document.getElementById('wave1').classList.remove('active');
        document.getElementById('wave2').classList.add('active');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave3').getAttribute('class') === 'active'){
        document.getElementById('wave3').classList.remove('active');
        document.getElementById('wave2').classList.add('active');
        document.getElementById('random_button').click();
    }
});

document.getElementById('wave3').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave1'){
        document.getElementById('demo').classList.remove('wave1');
        document.getElementById('demo').classList.add('wave3');
    }else if(document.getElementById('demo').getAttribute('class') === 'wave2'){
        document.getElementById('demo').classList.remove('wave2');
        document.getElementById('demo').classList.add('wave3');
    }

    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        document.getElementById('wave1').classList.remove('active');
        document.getElementById('wave3').classList.add('active');
        document.getElementById('random_button').click();
    }else if(document.getElementById('wave2').getAttribute('class') === 'active'){
        document.getElementById('wave2').classList.remove('active');
        document.getElementById('wave3').classList.add('active');
        document.getElementById('random_button').click();
    }
});
document.getElementById('color').addEventListener('input', function(){
    newValue = document.getElementById('color').value;
    document.getElementById('demo').setAttribute('fill', newValue);
});

document.getElementById('number').addEventListener('input', function(){
    newValue = document.getElementById('number').value;
    document.getElementById('demo').setAttribute('fill-opacity', newValue);
});