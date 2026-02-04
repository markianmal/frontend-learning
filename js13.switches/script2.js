let Score = 77;
let letterGrade;

switch (true) {
    case Score >= 90:
        letterGrade = "A";
        break;

    case Score >= 80:
        letterGrade = "B";
        break;

    case Score >= 70:
        letterGrade = "C";
        break;

    case Score >= 60:
        letterGrade = "D";
        break;

    case Score >= 51:
        letterGrade = "E";
        break;


    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade);