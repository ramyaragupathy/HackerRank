function solve(grades){
    newGrades = [];
    grades.forEach(function(grade, gradeIndex){
        if(grade>=38){
            if (grade%5 >2){
                newGrades.push(grade+ 5 - grade%5);
            } else {newGrades.push(grade);}
        } else {newGrades.push(grade);}  
    });
    
    return newGrades;
}

var grades = [73, 67, 38, 33];
    
var result = solve(grades);
console.log(result.join("\n"));