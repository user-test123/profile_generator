const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", answer => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  let name = answer;

  rl.question("What do you listen to while doing that? :) ", answer => {
    // TODO: Log the answer in a database
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    let listening = answer;

    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.) ",
      answer => {
        // TODO: Log the answer in a database
        // console.log(`Thank you for your valuable feedback: ${answer}`);
        let meal = answer;

        rl.question("Which sport is your absolute favourite? ", answer => {
          // TODO: Log the answer in a database
          // console.log(`Thank you for your valuable feedback: ${answer}`);
          let sport = answer;

          rl.question(
            "What is your superpower? In a few words, tell us what you are amazing at! ",
            answer => {
              // TODO: Log the answer in a database
              // console.log(`Thank you for your valuable feedback: ${answer}`);
              let superPower = answer;
              rl.close();
              console.log(
                name +
                  " loves listening to " +
                  listening +
                  " while coding, devouring " +
                  meal +
                  " for brunch, prefers " +
                  sport +
                  " over any other sport, and is amazing at " +
                  superPower +
                  " at inopportune times. "
              );
            }
          );
        });
      }
    );
  });
});
