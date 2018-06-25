function table() {
    let num;
    num = parseInt(document.querySelector("input").value);
    for (let i=1; i<=10; i++) {
        document.write ("<br>",num," * ",i," = ",num*i);
    }
}




