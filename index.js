let srt = "Jo";
let arr = srt.split('');
if(arr[2] === "a" || "o" || "u" || "i" || "y" || "e"){
    let newArr = arr.slice(0, 3);
    console.log(newArr.join(""))
}else if(srt.length < 4){
    console.log(str);
}else{
    let newArr = arr.slice(0, 2);
    console.log(newArr.toString())
}


function explode(s){
    const explode2 = s => s.replace(/\d/g, d => d.repeat(d));
    console.log(explode2)
}

explode("321")
