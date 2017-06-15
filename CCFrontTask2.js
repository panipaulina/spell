function countDamage(spell) {  
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
        isDain = spellBody.match(/dain/gi),
        isAin = spellBody.match(/ain/gi),
        isDai = spellBody.match(/dai/gi),
        isNe = spellBody.match(/dai/gi),
        isRestAi = spellBody.match(/dai/gi);
    
    if (isJee.length > 0) {
      result += 3 * isJee.length;
      var sBnoJee = spellBody.replace('jee', '');
      console.log(sBnoJee);
      spellBody = sBnoJee;
    }
    
    if (isJe.length > 0) {
      result += 2 * isJe.length;
      var sBnoJe = spellBody.replace('je', '');
      console.log(sBnoJe);
      spellBody = sBnoJe;
    }     
    
    if (isDain.length > 0) {
      result += 8 * isDain.length;
      var sBnoDain = spellBody.replace('dain', '');
      console.log(sBnoDain);
      spellBody = sBnoDain;
    }
    
    if (isAin.length > 0) {
      result += 3 * isAin.length;
      var sBnoAin = spellBody.replace('ain', '');
      console.log(sBnoAin);
      spellBody = sBnoAin;
    }
    
    if (isDai.length > 0) {
      result += 5 * isDai.length;
      var sBnoDai = spellBody.replace('dai', '');
      console.log(sBnoDai);
      spellBody = sBnoDai;
    }
    
    if (isNe.length > 0) {
      result += 2 * isNe.length;
      var sBnoNe = spellBody.replace('ne', '');
      console.log(sBnoNe);
      spellBody = sBnoNe;
    }
    
    if (isRestAi.length > 0) {
      result += 2 * isRestAi.length;
      var sBnoRestAi = spellBody.replace('ai', '');
      console.log(sBnoRestAi);
      spellBody = sBnoRestAi;
    }
    
    //single letters cutting
    var finalSpell= spellBody.length;
    result -=  finalSpell;
    
    // damage to 0 if negative
    if (result < 0) {
      result === 0;
    }
   
    } else {
      
      //spell uncorrect
      result === 0;
      console.log('spell uncorrect = zero');
  }  
  
  console.log('damage = ' + result);
}

countDamage('oijfedainodaindaindainnenenenjeejeeai');
console.log('----------');
countDamage('oijfejejeesrfgsdrgftjhxdgtrfhgfjfvgcgthfcgtdxrainjdaineaisfse');
console.log('----------');
countDamage('feaioooai');