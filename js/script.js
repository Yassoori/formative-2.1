const result = document.getElementById("result");

//function: find max value of a number list
function findMax(aNums) {
    let iMax = aNums[0];

    for(let iCount=0; iCount<aNums.length; iCount++) {
        if(iMax > aNums[iCount]) {
            iMax = aNums[iCount];
        }
    }

    return iMax;
}

//-----------------------------------------

//Input: Get 3 grades for each student
let iSize = parseInt(prompt(`Class size?`));
let aGradesPhysics = [];
let aGradesChemistry = [];
let aGradesBiology = [];
let aAverageGrades = [];

//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for(let iCount=0; iCount<iSize; iCount++) {
    let iGradePhysics = parseInt(prompt(`Student ${iCount+1}: Grade for Physics out of 100`));
    aGradesPhysics.push(iGradePhysics);
    console.log(`agradephysics is ${aGradesPhysics}`);

    let iGradeChemistry = parseInt(prompt(`Student ${iCount+1}: Grade for Biology out of 100`));
    aGradesChemistry.push(iGradeChemistry);
    console.log(`agradechem is ${aGradesChemistry}`);


    let iGradeBiology = parseInt(prompt(`Student ${iCount+1}: Grade for Chemistry out of 100`));
    aGradesBiology.push(iGradeBiology);
    console.log(`agradebio is ${aGradesBiology}`);


    let fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / 3;
    aAverageGrades.push(fAverage);
    console.log(`the faverage was ${fAverage}`);

    console.log(`the average grade was ${aAverageGrades}`);
}

// processing: calculate average grade for each student and find top grade in class
// let aAverageGrades = [];

// for(let iCount=0 iCount<iSize; iCount++) {
//     let fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / 3;
//     aAverageGrades.push(fAverage);
// }
// !lines above moved

let iTopGrade = findMax(aAverageGrades);

//output: list result for each student and top grade

for(let iCount=0; iCount < aAverageGrades.length; iCount++) {
    if(aAverageGrades[iCount] < 50) {

        result.innerHTML +=`Student ${iCount+1}: Fail<br>`;

    } else if(aAverageGrades[iCount] > 50 && aAverageGrades[iCount] < 80) {

        result.innerHTML +=`Student ${iCount+1}: Pass<br>`;

    } else {

        result.innerHTML +=`Student ${iCount+1}: Pass with Distinction<br>`;
    }
// } 
// !line above moved

result.innerHTML +=`<h1>The top overall grade is ${iTopGrade}</h1>`;
}

// a Grade means just a particular grade of a student in a subject
// f Grade is the the average grade of a student over all subjects
// aAverageGrades is the array of the average grades of each student over all subjects