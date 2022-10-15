function gradingStudents(grades) {
for (let index = 0; index < grades.length; index++) {
    if ((grades[index]>=40) && ((((grades[index]%5)==3) || ((grades[index]%5)==4)))) {
        grades[index]=grades[index]+(5-(grades[index]%5));        
    } 
    
    else if ((grades[index]>=40) && ((((grades[index]%5)==1) || ((grades[index]%5)==2)))) {
        grades[index]=grades[index]-((grades[index]%5));
    }

} return grades;
}
 console.log(gradingStudents([4,73,67,38,33]));