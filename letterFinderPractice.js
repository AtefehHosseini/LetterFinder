function letterFinder(word,letterToMatch){
    
    var condition1=typeof(word)=='string'&& word.length>=2
    
    var conditio2=typeof(letterToMatch)=='string'&& letterToMatch.length>=1 
        
        if(condition1==true && conditio2==true){
        for(var i=0; i<word.length;i++){
            if(word[i]==letterToMatch){
                console.log("The letter is match with "+letterToMatch+" and in index of "+i)
            }else{
                console.log("There is no match letter in index "+i)
            }
        }
    }else{
        console.log("Please pass in correct arguments.")
    }
    }
    letterFinder('Atefeh', 'A')
    