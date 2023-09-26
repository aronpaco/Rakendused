function timer() {
    wait(2000);
    console.log("Waited");
}



async function function1() {
    await timer();
    console.log("Awaited")
}

function1();