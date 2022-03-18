let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function()
{
    signIn.classList.add("active"); 
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function()
{
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}

function getdata(){
    const full_Name = document.getElementById("fname").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("pass").value;

    alert(`Full Name = ${full_Name}
Email = ${Email}
Password = ${Password}`);
}

function get_data(){
    // const full_Name = document.getElementById("fname").value;
    const Email = document.getElementById("Email").value;
    const Password = document.getElementById("Pass").value;

    alert(`
Email = ${Email}
Password = ${Password}`);
}