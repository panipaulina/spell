function countDamage(spell) {  
  var isFe = spell.indexOf('fe'),   
      isAi = spell.lastIndexOf('ai'),
      result = 0;    
  
  //spell existing conditions
  if (isAi > isFe && isFe >= 0 && isAi > 1) {
    console.log('spell correct! string cutting positions: ' + isFe + ' and ' + isAi);
    result = 3;
    
    //extracting chars between fe / ai
    var spellBody = spell.substring(isFe + 2, isAi);
    console.log(spellBody);
    
    //checking if spell body has subspells
    var isJe = spellBody.indexOf('je'),
        isJee = spellBody.indexOf('jee'),
        isDain = spellBody.indexOf('dain'),
        isAin = spellBody.indexOf('ain'),
        isDai = spellBody.indexOf('dai'),
        isNe = spellBody.indexOf('ne'),
        isRestAi = spellBody.indexOf('ai');
    
    if (isJee >= 0) {
      result += 3;
      var sBnoJee = spellBody.replace('jee', '');
      console.log(sBnoJee);
      spellBody = sBnoJee;
    }
    
    if (isJe >= 0) {
      result += 2;
      var sBnoJe = spellBody.replace('je', '');
      console.log(sBnoJe);
      spellBody = sBnoJe;
    }     
    
    if (isDain >= 0) {
      result += 8;
      var sBnoDain = spellBody.replace('dain', '');
      console.log(sBnoDain);
      spellBody = sBnoDain;
    }
    
    if (isAin >= 0) {
      result += 3;
      var sBnoAin = spellBody.replace('ain', '');
      console.log(sBnoAin);
      spellBody = sBnoAin;
    }
    
    if (isDai >= 0) {
      result += 5;
      var sBnoDai = spellBody.replace('dai', '');
      console.log(sBnoDai);
      spellBody = sBnoDai;
    }
    
    if (isNe >= 0) {
      result += 2;
      var sBnoNe = spellBody.replace('ne', '');
      console.log(sBnoNe);
      spellBody = sBnoNe;
    }
    
    if (isRestAi >= 0) {
      result += 2;
      var sBnoRestAi = spellBody.replace('ai', '');
      console.log(sBnoRestAi);
      spellBody = sBnoRestAi;
    }
    
    //single letters cutting
    var finalSpell= spellBody.length;
    result -=  finalSpell;
   
    } else {
      
      //spell uncorrect
      result === 0;
      console.log('spell uncorrect = zero');
  }  
  
  console.log('damage = ' + result);  
}

countDamage('oijfedainonjeeai');
console.log('----------');
countDamage('oijfejejeeainjdaineaisfse');
console.log('----------');
countDamage('fejejeedainaindaineaiai');