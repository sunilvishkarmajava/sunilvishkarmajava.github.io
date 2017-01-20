<<<<<<< HEAD
/**
 * Created by sujit on 1/6/2017.
 */
var el = document.getElementById("toggle_show");
if(el)
	{
el.addEventListener("click",function(){
	var stylemenu=document.getElementById("menu_items").style.display;
    if(stylemenu!=="block"){
        document.getElementById("menu_items").style.display="block";
    }
    if(stylemenu!=="none")
    {
        document.getElementById("menu_items").style.display="none";
    }
})
}
=======
/**
 * Created by sujit on 1/6/2017.
 */
var el = document.getElementById("toggle_show");
if(el)
	{
el.addEventListener("click",function(){
	var stylemenu=document.getElementById("menu_items").style.display;
    if(stylemenu!=="block"){
        document.getElementById("menu_items").style.display="block";
    }
    if(stylemenu!=="none")
    {
        document.getElementById("menu_items").style.display="none";
    }
})
}
>>>>>>> origin/master
