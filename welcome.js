let check = (event)=>{
    event.preventDefault();
    let name = document.getElementById("name").value ;
    if(name === "")
    {
        alert("Enter your name");
        return;
    }
    localStorage.setItem("name",name);
    window.location.href = "./quiz.html"
}