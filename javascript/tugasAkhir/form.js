function buat_login(){
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);

    var p = document.createElement("p");
    p.innerHTML = "SILAHKAN MENDAFTAR";
    p.className = "tulisan_login"
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);

    var form = document.createElement("form");
    element.appendChild(form);

    var label1 =document.createElement("label");
    label1.innerHTML ="Nama User";
    form.appendChild(label1);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.name ="nama";
    input1.className ="form_login";
    input1.placeholder = "Nama User..";
    form.appendChild(input1);

    var label2 =document.createElement("label");
    label2.innerHTML ="Nomor Handphone";
    form.appendChild(label2);
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.name ="hp";
    input2.className ="form_login";
    input2.placeholder = "Nomor Handphone.";
    form.appendChild(input2);

    var label3 =document.createElement("label");
    label3.innerHTML ="Username";
    form.appendChild(label3);
    var input3 = document.createElement("input");
    input3.type = "text";
    input3.name ="username";
    input3.className ="form_login";
    input3.placeholder = "Username atau email.";
    form.appendChild(input3);

    var label4 =document.createElement("label");
    label4.innerHTML ="Password";
    form.appendChild(label4);
    var input4 = document.createElement("input");
    input4.type = "text";
    input4.name ="password";
    input4.className ="form_login";
    input4.placeholder = "Password.";
    form.appendChild(input4);

    var tombol = document.createElement("button");
    tombol.innerHTML = "Daftar sekarang"
    tombol.className = "tombol_login";
    form.appendChild(tombol);


}