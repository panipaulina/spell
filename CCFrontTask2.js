exports.damage = function(spellString) {
  var spellRegex = /fe((fe|jee|je|ain|ai|dai|ne|[a-z])*)ai/g;

  var ssScoring = [
    {score: 1, r: /^fe/},
    {score: 2, r: /^je/},    
    {score: 2, r: /^ai/},
    {score: 2, r: /^ne/},
    {score: 3, r: /^jee/},
    {score: 3, r: /^ain/},
    {score: 5, r: /^dai/},
    {score:-1, r: /^[a-z]/, noMatch: true}
  ];

  function damage2(spellString) {  
    console.log('--------------');
    console.log('spellString: ' + spellString);
    
    var result = spellString.match(spellRegex) ;

    var acc = 0;
    if(result && result.length>0){
      for(var r = 0; r<result.length; r++){
        var spell = result[r];
        console.log('Spell: ' + spell);
        
        var trimmedSpell = spell.substring(2, spell.length -2);
              
        if(trimmedSpell.match(/fe/)) {
          acc = 0
          console.log('No match found!');

        } else {
          var damage = countPartDamage(trimmedSpell,['fe'],0);
          damage.matched.push('ai')
          damage.score += 3;
          acc += damage.score;
          console.log('Matched:' + damage.matched.join('-'));

        }
      }  
    } 
    acc = acc < 0 ? 0 : acc;
    console.log('Score:  ' + acc);
    
    return acc;
  }

  function countPartDamage(spell,matched,acc){ 
    // Find best match
    var bestBranch = null;
    
    for(var s = 0; s < ssScoring.length; s++){
      var ssScore = ssScoring[s];
      var m       = spell.match(ssScore.r);
      
      if(m && m.length>0){
        var t = spell.replace(ssScore.r,'');
        var newBranch = countPartDamage(t,ssScore.noMatch ? matched : matched.concat(m), acc+ssScore.score);
        
        if(!bestBranch || newBranch.score > bestBranch.score){
          bestBranch = newBranch;
        }
      }
    }
      
    if(bestBranch != null){
      return { matched: bestBranch.matched, score: bestBranch.score };
    } else {
      return { matched: matched, score: acc };
    }  
  }
  return damage2(spellString);   
}