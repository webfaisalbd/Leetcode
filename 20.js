// Valid parenthesis leetcode problem

var isValid = function(s) {
    
    let store=[];
    for(let i=0;i<s.length;i++){
      if(s[i]=='('){
            store.push(')')
        }
        else if(s[i]=='{'){
            store.push('}')
        }
        else if(s[i]=='['){
            store.push(']')
        }
        else if(store.pop()!=s[i]){
                return false;
            }
    }
    // if store.length is empty then its value is zero. and not zero means true 
    return !store.length;
};

// console.log(isValid(['[','{','(',')','}',']']));
// console.log(isValid(['[','{',')','}',']']));