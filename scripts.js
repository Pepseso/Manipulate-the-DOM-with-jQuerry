let names = ["Pepa", "Hanka", "Tomas", "Ludva", "Katka"];
names.forEach(element => {
    if (element==="Pepa") {
        $(".list").append("<li><strong>"+ element+"</strong></li>") 
    } else {
        $(".list").append("<li>"+ element +"</li>")  
    }
});
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("h1").append(" "+additionalBlock.title);
  $(".article").append("<br>"+additionalBlock.text);