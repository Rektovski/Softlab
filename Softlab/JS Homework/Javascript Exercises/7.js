const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

ans="";

for(i=0;i<text.split(" ").length;++i){
    ans+=text.split(" ")[i].split("")[0].toUpperCase();
}

console.log(ans);
