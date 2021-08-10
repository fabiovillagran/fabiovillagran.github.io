function rotate() {
    var img = document.getElementById("image");
    let attribute = img.getAttribute('class');
    
  //   if ( attribute.indexOf( stringA ) > -1 ) {
  //   // String B contains String A
  // } 
    
  //   if (attribute === "rotated-image-start") {
    if ( attribute.indexOf( "rotated-image-start" ) > -1 ) {
      img.setAttribute("class", "rotated-image-25 img-fluid");  
    }
    else if ( attribute.indexOf( "rotated-image-25" ) > -1 ) {
        img.setAttribute("class", "rotated-image-50 img-fluid");
    }
    else if ( attribute.indexOf( "rotated-image-50" ) > -1 ) {
        img.setAttribute("class", "rotated-image-75 img-fluid");
    }
    else if ( attribute.indexOf( "rotated-image-75" ) > -1 ) {
        img.setAttribute("class", "rotated-image-start img-fluid");
    }
  }