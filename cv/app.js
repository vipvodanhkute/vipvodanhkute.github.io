$(document).ready(() => {
    $('#c2').on("click", c2);
    $('#c3').on("click", c3);
    $('#c4').on("click", c4);
    $('#c5').on("click", c5);
    $('#c6').on("click", c6);
    $('#c7').on("click", c7);
    $('#c8').on("click", c8);
    $('#c9').on("click", c9);
    $('#c10').on("click", c10);
})
function c2(e) {
    e.preventDefault();
    var c2a = $("#c2a").val().split("\n");
    n = c2a.length;
    if(c2a[0]!=n-1){
        $("#c2b").html("Du lieu khong dung")
    }else{
    let arr = [];
    count = 1;
    for (let i = 1; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < c2a[i].length; j++) {
            if (c2a[i].charAt(j) == c2a[i].charAt(j + 1)) {
                count++;
            } else {
                arr[i].push(count);
                arr[i].push(c2a[i].charAt(j));
                count = 1;
            }
        }
    };
    var result = "";
    for (let i = 1; i < arr.length; i++) {
        result += `${arr[i].join("")}\n`;
    }

    $("#c2b").html(result);
}
};
function c3(e) {
    e.preventDefault();
    var c3a = $("#c3a").val();
    var c3Arr = c3a.split("\n");
    var result = "";
    n = c3Arr.length;
    console.log(parseInt(c3Arr[0]));
    console.log(c3Arr.length);
    if(parseInt(c3Arr[0])!=c3Arr.length-1){
        $("#c3b").html("Du lieu khong dung");
    }else{
        $("#c3b").html("dung");
    for (let i = 1; i < n; i++) {
        c3Arr[i] = c3Arr[i].split("");
        var hs;
        m = c3Arr[i].length;
        for (j = 1; j < m; j++) {
            if (j !== m - 1) {
                console.log("j" + j);
                hs = Math.pow(10, i);
                if (parseInt(c3Arr[i].join("")) > hs) {
                    console.log("so " + parseInt(c3Arr[i].join("")));
                    console.log(parseInt(c3Arr[i][m - j]));
                    if (parseInt(c3Arr[i][m - j]) >= 5) {
                        c3Arr[i][m - j] = 0;
                        c3Arr[i][m - j - 1] = parseInt(c3Arr[i][m - j - 1]) + 1;
                    } else {
                        c3Arr[i][m - j] = 0;
                        c3Arr[i][m - j - 1] = 0;
                    }
                } else {
                }
            } else {
                if (parseInt(c3Arr[i][1]) >= 5) {
                    c3Arr[i][0] = parseInt(c3Arr[i][0]) + 1;
                    c3Arr[i][1] = 0;
                } else {
                    c3Arr[i][1] = 0
                }
            }
        }
    }
    for (let i = 1; i < c3Arr.length; i++) {
        result +=c3Arr[i].join("")+"\n";
    }
    $("#c3b").html(result);
}

}
function c4(e) {
    e.preventDefault();
    var c4a = $("#c4a").val();
    var c4Arr = c4a.split("\n");
    var result = [];
    if (c4Arr.length - 1 != c4Arr[0]) {
        $("#c4b").html("Dữ liệu không đúng");
    } else {
        for (let i = 1; i <= c4Arr[0]; i++) {
            n = c4Arr[i].length;
            for (let j = 0, k = n - 1; j <= n / 2, k >= n / 2; j++ , k--) {
            }
            for (let j = 0, k = n - 1; j <= n, k >= 0; j++ , k--) {
                if (c4Arr[i].charAt(j) != c4Arr[i].charAt(k)) {
                    result[i] = "N0";
                    break;
                } else {
                    result[i] = "YES";
                }
            }
        }
        var y = ""
        result.forEach((x) => {
            y +=x+"\n"
        })
        $("#c4b").html(y);
    }
}
function c5(e){
    e.preventDefault();
    var c5a=$("#c5a").val();
    var c5Arr=c5a.split("\n");
    n=c5Arr.length;
    var a=[];
    var scl=c5Arr[0].split(" ");
    var r=scl[0];
    var c=scl[1];
    var o=r*c;
    var i=0;
    while(i<o){
        a.push(0);
        i++
    }
    for(let i=1;i<=r;i++){
        for(let j=0;j<c;j++){
            if(c5Arr[i].charAt(j)=="S"){
                let x=(i-1)*c+j;
                a[x]=1;
            }
        }
    }
    for(let i=0;i<r;i++){
        let tam=0;
        for(let j=0;j<c;j++){
            let x=i*c+j;
            if(a[x]==1){
                tam++;
                break;
            }
        }
        if(tam==0){
          for(let j=0;j<c;j++){
             let x=i*c+j;   
             a[x]=2;
          }  
        }

    }
    for(let i=0;i<c;i++){
        let tam=0;
        for(let j=0;j<r;j++){
            let x=i+j*4;
            if(a[x]==1){
                tam++
                //break;
        }    
        // console.log("tam "+tam);
        // if(tam==0){
        //     for(let j=1;j<=r;j++){
        //         let x=i+j*4-r-1;
        //         a[x]=2;
        //     }
        //     console.log('iii'+i);
        // }
   }
   if(tam==0){
    for(let j=0;j<r;j++){
        let x=i+j*4;
        a[x]=2;  
    }
}
}
    var count=0;
    a.forEach(x=>{
        if(x==2){
            count++
        }
    })
    $("#c5b").html(count);
}
function c6(e){
    e.preventDefault();
    var c6a=$("#c6a").val();
    var c6Arr=c6a.split(" ");
    if(c6Arr.length!=2){
        $("#c6b").html("Du lieu khong dung");
    }else{
    var result=[];
    var str="";
    var x=c6Arr[1]%(c6Arr[0]-1);
    var y=c6Arr[1]/(c6Arr[0]-1);
    if(x==0){
        result.push(eval(c6Arr[0]*y-1));
        result.push(eval(c6Arr[0]*y));
    }else{
        result.push(eval(Math.floor(y)*c6Arr[0]+1));
        result.push(parseInt(Math.ceil(y))-1+parseInt(c6Arr[1]));
    }
    for(let i=0;i<=1;i++){
        str+=result[i]+"\n"
    }
    $("#c6b").html(str);
}
}
function c7(e){
    e.preventDefault();
    var c7a=$("#c7a").val();
    var c7Arr=c7a.split("\n");
    var arr=[];
    var result=""
    console.log(c7Arr[0]*3+1);
    console.log(c7Arr.length);
    if((c7Arr[0]*3+1)!=c7Arr.length){
        $("#c7b").html("Dữ liệu đầu vào không đúng");
    }else{
        for(let i=1;i<=c7Arr[0];i++){
            console.log(i);
            console.log(c7Arr[i*i+2]);
            arr.push(c7Arr[i*i+2].split("").map(t=>{
                for(let j=1;j<c7Arr[i*i+1];j++){
                    console.log(c7Arr[i*i+1]);
                    t+=t;
                }
                return t
            }))
        }
        for(let i=0;i<arr.length;i++){
            result+=`${i+1}\n${arr[i].join("")}\n`
        }
        $("#c7b").html(result);
    }
    
}
function c8(e){
    e.preventDefault();
    var c8a=$("#c8a").val();
    if(isNaN(c8a)){
        $("#c8b").html("du lieu khong dung")
    }else{
    var str="moo";
    for(i=1;i<c8a;i++){
        var o="";
        for(j=1;j<=i;j++){
            o+="o";
        }
        o+="oo";
        str=str+"m"+o+str;
    }
    $("#c8b").html(str.charAt(c8a-1));
}
}
function c9(e) {
    e.preventDefault();
    var x = [];
    var result="";
    var c9a = $("#c9a").val().split("\n");
    if(isNaN(c9a[0])){
        $("#c9b").html("Du lieu khong dung")
    }else {
        for (i = 0; i < c9a[1].split(" ").length; i++) {
            console.log(i);
            var count = 0;;
            for (j = 1; j <= c9a[1][i] / 2; j++) {
                ;
                if (c9a[1][i] % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                x.push("YES");
            } else {
                x.push("NO");
            }
        }
        x.forEach(y=>{
            result+=y+"\n"
        })
        $("#c9b").html(result);
    }
}
function c10(e) {
    e.preventDefault();
    var X = parseInt($("#c10a").val());
    var tongst = 0;
    var result;
    for (i = 1; i <= X; i++) {
        tongst += tongst + i;
        console.log(i);
        console.log(tongst);
        if (tongst >= X) {
            result = i;
            break;
        }
    }
    $("#c10b").html(i);
    ;
}
