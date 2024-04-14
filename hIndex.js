/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 1 && citations[0] === 0) return 0;
      if (citations.length === 1) return 1;
  
      const sorted = citations.sort((a, b) => a - b);
      let h = citations.length;
  
      for (let i = 0; i < sorted.length; i += 1) {
          const curr = sorted[i];
  
          const repeats = sorted.length - i;
  
          if (repeats >= curr) {
              h = curr;
          } else if (repeats > h) {
              h = repeats;
          }
      }
  
      return h;
  };

  const citations = [3,0,6,1,5];

  console.log(hIndex(citations));