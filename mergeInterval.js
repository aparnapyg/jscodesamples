/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let i;
    let mergedInterval = [];
    let prev = intervals[0];
    
    intervals.sort((a, b) => a[0] - b[0]);
    if(intervals.length === 1) { return intervals; }
    if (intervals.length === 0) return mergedInterval;


    for(i = 1; i < intervals.length; i++){
       if(prev[1] < intervals[i][1] && prev[1] >= intervals[i][0] && prev[0] < intervals[i][0]){
         mergedInterval.push([prev[0], intervals[i][1]]);
       } else {
        mergedInterval.push(intervals[i]);
        prev = intervals[i];
       }
    }
    return mergedInterval;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals))