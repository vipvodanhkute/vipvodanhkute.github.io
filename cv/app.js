$(document).ready(() => {
    $('#c2').on("click", c2);
    $('#c3').on("click", c3);
    $('#c4').on("click", c4);
    $('#c7').on("click", c7);
    $('#c8').on("click", c8);
    $('#c9').on("click", c9);
    $('#c10').on("click", c10);
})
function c2(e) {
    e.preventDefault();
    var c2a = $("#c2a").val().split(" ");
    n = c2a.length;
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
        result += arr[i] + "<br>"
    }
    console.log(arr);
    console.log(arr[1].toString());
    $("#c2b").html(result);
};
function c3(e) {
    e.preventDefault();
    var c3a = $("#c3a").val();
    var c3Arr = c3a.split(" ");
    var result = "";
    n = c3Arr.length;
    for (let i = 1; i < n; i++) {
        c3Arr[i] = c3Arr[i].split("");

        var hs;
        m = c3Arr[i].length;
        for (j = 1; j < m; j++) {
            if (j !== m - 1) {
                console.log("j" + j);
                hs = Math.pow(10, i);
                console.log("he so " + hs);
                console.log(parseInt(c3Arr[i].join("")));
                if (parseInt(c3Arr[i].join("")) > hs) {
                    console.log("so " + parseInt(c3Arr[i].join("")));
                    console.log(parseInt(c3Arr[i][m - j]));
                    if (parseInt(c3Arr[i][m - j]) >= 5) {
                        console.log("so n-i " + c3Arr[i][m - j]);
                        console.log("so n-i-1 " + c3Arr[i][m - j - 1]);
                        c3Arr[i][m - j] = 0;
                        c3Arr[i][m - j - 1] = parseInt(c3Arr[i][m - j - 1]) + 1;
                        console.log(c3Arr[i].join(""));
                    } else {
                        console.log("so n-i " + c3Arr[i][m - j]);
                        console.log("so n-i-1 " + c3Arr[i][m - j - 1]);
                        c3Arr[i][m - j] = 0;
                        c3Arr[i][m - j - 1] = 0;
                        console.log(c3Arr[i].join(""));
                    }
                } else {
                    console.log(c3Arr[i].join(""));
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
        result += " " + c3Arr[i].join("");
    }
    $("#c3b").html(result);

}
function c4(e) {
    e.preventDefault();
    var c4a = $("#c4a").val();
    var c4Arr = c4a.split(" ");
    var result = [];
    if (c4Arr.length - 1 != c4Arr[0]) {
        console.log("thieu du lieu");
    } else {
        for (let i = 1; i <= c4Arr[0]; i++) {
            n = c4Arr[i].length;
            for (let j = 0, k = n - 1; j <= n / 2, k >= n / 2; j++ , k--) {
                console.log(c4Arr[i].charAt(j));
            }
            for (let j = 0, k = n - 1; j <= n, k >= 0; j++ , k--) {
                console.log("j " + j);
                console.log("k " + k);
                console.log(c4Arr[i].charAt(j));
                console.log(c4Arr[i].charAt(k));
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
            y += " " + x
        })
        $("#c4b").html(y);
        console.log(result);
        console.log(c4Arr);
    }
}
function c7(e){
    e.preventDefault();
}
function c8(e){
    e.preventDefault();
    var c8a=$("#c8a").val();
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
function c9(e) {
    e.preventDefault();
    var x = [];
    var result="";
    var c9a = $("#c9a").val().split(" ");
    console.log(c9a);
    if (c9a[0] != c9a.length - 1) {
        console.log("Thieu du lieu")
    } else {
        for (i = 1; i < c9a.length; i++) {
            console.log(i);
            var count = 0;;
            for (j = 1; j <= c9a[i] / 2; j++) {
                ;
                if (c9a[i] % j == 0) {
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
            result+=y+" "
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
        console.log(tongst);
        tongst += tongst + i;
        if (tongst >= X) {
            result = i;
            break;
        }
    }
    $("#c10b").html(i);
    ;
}
