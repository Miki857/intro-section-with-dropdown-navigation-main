function openSideMenu(){
    document.querySelector(".sideMenu__container").classList.remove("hidden");
}

function closeSideMenu(){
    document.querySelector(".sideMenu__container").classList.add("hidden");
}

function showDropDownOptions(element){
    let domElement = document.querySelector("." + element);
    if(domElement.style.display == "" || domElement.style.display == "none"){
        domElement.style.display = "flex";
        domElement.style.position = "static";
    }else{
        domElement.style.display = "none";
        domElement.style.position = "absolute";
    }
}