function calculateResult() {
    const marksElements = document.querySelectorAll('.marks');
    let totalMarksObtained = 0;
    const totalMaxMarks = 800; // Maximum marks for 8 subjects, each with 100 marks

    marksElements.forEach((element) => {
        totalMarksObtained += parseFloat(element.value);
    });

    const percentage = (totalMarksObtained / totalMaxMarks) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    document.getElementById('finalResult').innerText = `Total Marks Obtained: ${totalMarksObtained}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
}
