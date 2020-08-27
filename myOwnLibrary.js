function isTouching(b1,b2) {
    if(b1.x - b2.x < b1.width/2 + b2.width/2
       && b2.x - b1.x < b2.width/2 + b1.width/2
       && b1.y - b2.y < b1.height/2 + b2.height/2
       && b2.y - b1.y < b2.height/2 + b1.height/2){
         return true;
  
    }
  
    else{
    return false;
    }
  }
  
  
  function bounceOff(b1,b2) {
     if( b1.x - b2.x < b1.width/2 + b2.width/2
     && b2.x - b1.x < b2.width/2 + b1.width/2) {
    b2.velocityX = b2.velocityX * (-1);
    b1.velocityX = b1.velocityX * (-1);
  }
  if (b1.y - b2.y < b1.height/2 + b2.height/2
    && b2.y - b1.y < b2.height/2 + b1.height/2){
    b2.velocityY = b2.velocityY * (-1);
    b1.velocityY = b1.velocityY * (-1);
  }
  }