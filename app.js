const studentName = document.getElementById('StudentName');
const Grade1 = document.getElementById('Grade1');
const Grade2 = document.getElementById('Grade2');
const Grade3 = document.getElementById('Grade3');
const message = document.getElementById('message');
function calculateAverage() {
    const name = studentName.value;
    const grade1 = parseFloat(Grade1.value);
    const grade2 = parseFloat(Grade2.value);
    const grade3 = parseFloat(Grade3.value);
    let average = (grade1 + grade2 + grade3) / 3;
    average = average.toFixed(2);
    if (average >= 70) {
        message.textContent = `Congratulations ${name}, you have passed with an average of ${average}.`;
}else {
        message.textContent = `Sorry ${name}, you have failed with an average of ${average}.`;
    }
}
