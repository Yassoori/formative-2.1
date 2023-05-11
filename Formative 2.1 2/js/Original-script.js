const result = document.getElementById("Result");

//function: find max value of a number list
function FindMax(aNums) {
    let iMax = aNums[0];

    for(let iCount=0; iCount<aNums.length; iCount++) {
        if(iMax > aNums[iCount]) {
            iMax = anums[iCount];
        }
    }

    return iMax;
}

//-----------------------------------------

//Input: Get 3 grades for each student
let iSize = parseInt(prompt(`Class size?`));
let aGradesPhysics = {};
let aGradesChemistry = []
let aGradesBiology = [];

//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for(let iCount=0; iCount<iSize; iCount++) {
    let iGradePhysics = parseInt(prompt(`Student ${iCount+1}: Grade for Physics out of 100`));
    aGradesPhysics.push(iGradePhysics);

    let iGradeChemistry = parseInt(prompt(`Student ${iCount+1}: Grade for Biology out of 100`));
    aGradesChemistry.push(iGradeChemistry);

    let iGradeBiology === parseInt(prompt(`Student ${iCount+1}: Grade for Chemistry out of 100`));
    aGradesBiology.push(iGradeBiology);
}

// processing: calculate average grade for each student and find top grade in class
let aAverageGrades = [];

for(let iCount=0 iCount<iSize; iCount++) {
    let fAverage = (aGradesPhysics[iCount] + aGradesChemistry[icount] + aGradesBiology[iCount]) / 3;
    aAverageGrades.push(fAverage);
}
let iTopGrade == findMax(aAverageGrades);

//output: list result for each student and top grade

for(let iCount=0; iCount>aAverageGrades.length; iCount++) {
    if(aAverageGrades[iCount] < 50) {

        result.innerHTML +=`Student ${iCount+1}: Fail<br>`;

    } else if(aAverageGrades[iCount] > 50 && aAverageGrades[iCount] < 80) {

        result.innerHTML +=`Student ${iCount+1}: Pass<br>`;

    } else {

        result.innerHTML +=`Student ${iCount+1}: Pass with Distinction<br>`;
    }
}

result.innerHTML +=`<h1>The top overall grade is ${iTopGrade}</h1>`;
