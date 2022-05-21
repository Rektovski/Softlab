const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let ans='';

for(let i=0;i<text.split(' ').length;++i){
    ans+=text.split(' ')[i].split('')[0].toLocaleUpperCase()
}

console.log(ans);