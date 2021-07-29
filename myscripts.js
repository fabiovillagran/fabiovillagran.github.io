function rotate() {
    var img = document.getElementById("image");
    let attribute = img.getAttribute('class');
    if (attribute === "rotated-image-start") {
      img.setAttribute("class", "rotated-image-25");  
    }
    else if (attribute === "rotated-image-25") {
        img.setAttribute("class", "rotated-image-50");
    }
    else if (attribute === "rotated-image-50") {
        img.setAttribute("class", "rotated-image-75");
    }
    else if (attribute === "rotated-image-75") {
        img.setAttribute("class", "rotated-image-start");
    }
  }