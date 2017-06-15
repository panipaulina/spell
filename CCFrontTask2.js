exports.damage = function(spell) {  
  var isFe = spell.indexOf('fe'),
      isFeMore = spell.match(/fe/gi),
      isAi = spell.lastIndexOf('ai'),
      result = 0;    
  
  //spell existing conditions
  if (isAi > isFe && isFeMore.length === 1 && isFe >= 0 && isAi > 1) {
    console.log('spell correct! string cutting positions: ' + isFe + ' and ' + isAi);
    result = 3;
    
    //extracting chars between fe / ai
    var spellBody = spell.substring(isFe + 2, isAi);
    console.log(spellBody);
    
    //checking if spell body has subspells
    var isJee = spellBody.match(/jee/gi),
        isJe = spellBody.match(/je/gi),        
        isAin = spellBody.match(/ain/gi),
        isDai = spellBody.match(/dai/gi),
        isNe = spellBody.match(/ne/gi),
        isRestAi = spellBody.match(/ai/gi);
    
    if (isJee !== null) {
      result += 3 * isJee.length;
      var sBnoJee = spellBody.replace(/jee/g, '');
      console.log(sBnoJee);
      spellBody = sBnoJee;
    }
    
    if (isJe !== null) {
      result += 2 * isJe.length;
      var sBnoJe = spellBody.replace(/je/g, '');
      console.log(sBnoJe);
      spellBody = sBnoJe;
    }     
          
    if (isAin !== null) {
      result += 3 * isAin.length;
      var sBnoAin = spellBody.replace(/ain/g, '');
      console.log(sBnoAin);
      spellBody = sBnoAin;
    }
    
    if (isDai !== null) {
      result += 5 * isDai.length;
      var sBnoDai = spellBody.replace(/dai/g, '');
      console.log(sBnoDai);
      spellBody = sBnoDai;
    }
    
    if (isNe !== null) {
      result += 2 * isNe.length;
      var sBnoNe = spellBody.replace(/ne/g, '');
      console.log(sBnoNe);
      spellBody = sBnoNe;
    }
    
    if (isRestAi !== null) {
      result += 2 * isRestAi.length;
      var sBnoRestAi = spellBody.replace(/ai/g, '');
      console.log(sBnoRestAi);
      spellBody = sBnoRestAi;
    }
    
    //single letters cutting
    var finalSpell= spellBody.length;
    result -=  finalSpell;
    
    // damage to 0 if negative
    if (result < 0) {
      result = 0;
    }
   
    } else {
      
      //spell uncorrect
      result === 0;
      console.log('spell uncorrect');
  }  
  
  console.log('damage = ' + result);
  return result;
}

//countDamage('oijfedainodaindaindainnenenenjeejeeai');
//console.log('----------');
//countDamage('oijfejejeesrfgsdrgftjhxdgtrfhgfjfvgcgthfcgtdxrainjdaineaisfse');
//console.log('----------');
//countDamage('feaioooai');