//repeating code limited amount of times

for (let i = 20; i >= 1; i--) {

    if (i == 14) {
        continue;//важлтво щоб воно було тут
    }

    console.log(i);

    if (i == 13) {
        console.log("Lucky thirteen");
    }

    if (i == 15) {
        console.log("Skips num 14");
    }




    if (i == 6) {
        break;
    }
}

console.log("Heppy new year");