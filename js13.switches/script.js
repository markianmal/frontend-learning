let day = 3;

switch (day) {
    case 1:
        console.log("it is mo");
        break;

    case 2:

        console.log("it is tu");
        break;

    case 3:
        console.log("it is we");
        break;
    /*breaks needed for executing only one case without them code will execute right case and all next cases*/

    case 4:
        console.log("it is th");
        break;

    case 5:
        console.log("it is fr");
        break;
    case 6:
        console.log("it is se");
        break;
    case 7:
        console.log("it is su");
        break;

    default:
        console.log(`${day} is not a day`)
        break;
}