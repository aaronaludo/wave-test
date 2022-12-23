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

document.getElementById('random_button').addEventListener("click", function(){
    const range = document.getElementById('points').value;
    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        newAttribute(range);
    }else{
        newAttribute1(range);
    }
});

document.getElementById('points').addEventListener('input', function(){
    const newValue = document.getElementById('points').value;
    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        newAttribute(newValue);
    }else{
        newAttribute1(newValue);
    }
});

document.getElementById('wave1').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave2'){
        document.getElementById('demo').classList.remove('wave2');
        document.getElementById('demo').classList.add('wave1');
    }
    if(document.getElementById('wave2').getAttribute('class') === 'active'){
        document.getElementById('wave2').classList.remove('active');
        document.getElementById('wave1').classList.add('active');
        document.getElementById('random_button').click();
    }
});

document.getElementById('wave2').addEventListener('click', function(){
    if(document.getElementById('demo').getAttribute('class') === 'wave1'){
        document.getElementById('demo').classList.remove('wave1');
        document.getElementById('demo').classList.add('wave2');
    }
    if(document.getElementById('wave1').getAttribute('class') === 'active'){
        document.getElementById('wave1').classList.remove('active');
        document.getElementById('wave2').classList.add('active');
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