let cl = console.log;

let a = info1.innerText;
cl(a);
info1.innerHTML =` <strong>I love javascript</strong>`;

let b = info2.innerText;
cl(b);
info2.innerHTML = `<strong>How are you?</strong>`;

let c = info3.innerText;
cl(c);
info4.innerHTML =`<strong>Hello css</strong>`;

let d = info4.innerText;
cl(d);
info4.innerHTML = `<strong>Hello node.js</strong>`;

let e = info5.innerText;
cl(e);
info5.innerHTML = `<strong>Hello Bootstrap</strong>`;

let f = info6.innerText;
cl(f);
info6.innerHTML = `<strong>Hello React</strong>`;

let g = info7.innerText;
cl(g);
info7.innerHTML = `<strong>Hello HTML</strong>`;

let h = info8.innerText;
cl(h);
info8.innerHTML = `<strong>Hello Angular</strong>`;

let i = info9.innerText;
cl(i);
info9.innerHTML = `<strong>Hello mangoDB</strong>`;

let j = info10.innerText;
cl(j);
info10.innerHTML = `<strong>Hello Linux</strong>`;

// classList

let get = info1.classList
cl(get)
info1.classList.add('demo1')

let get2 = info2.classList
cl(get2);
info2.classList.add('demo1','demo2')
info2.classList.remove('demo1')

let get3 = info3.classList
cl(get3);
info3.classList.add('yes','no')
info3.classList.remove('no')

let get4 = info4.classList
cl(get4)
info4.classList.add('true','false')
info4.classList.remove('true')

let get5 = info5.classList
cl(get5)
info5.classList.add('positve','negative')
info5.classList.remove('positive')


let get6 = info6.classList
cl(get6)
info6.classList.add('hi')
info6.classList.remove('hi')

let get7 = info7.classList
cl(get7)
info7.classList.add('x','xx')
info7.classList.remove('x')

let get8 = info8.classList
cl(get8)
info8.classList.add('xyz','yy')
info8.classList.remove('yy')

let get9 = info9.classList
cl(get9)
info9.classList.add('yz')
info9.classList.remove('yz')

let get10 = info10.classList
cl(get10)
info10.classList.add('mmmm','nnnn')
info10.classList.remove('nnnn')


let get01 = info1.classList
info1.classList.toggle('demo1')
cl(get01)
