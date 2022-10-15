const message = 'A2@dd4';


function minimumNumber(n, password) {
  let missingChars = 0;
  if (!password.match("(?=.*[A-Z])")){
    console.log("Pwd does not contains upper case");
    missingChars++;
  }
  if (!password.match('(?=.*[!@&#$*])')){
    console.log("Pwd does not contains special chars");
    missingChars++;
  }
  
  if(!password.match('(?=.*[a-z])')){
      console.log("Pwd does not contain lower case");
      missingChars++;
  }
  
  if(!password.match('\\d')){
      console.log("Pwd does not contain digits");
      missingChars++;
  }
  
  if(password.length + missingChars < n){
      missingChars++;
  }
  console.log(missingChars);
}

// Log to console
minimumNumber(6,message);