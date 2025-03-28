// Happy Birthday Tucker Animation
// A fun ASCII art birthday animation that can be run in the console

function celebrateBirthday(name) {
  const cake = [
    "      ,,,,,,,,,,,,,",
    "     |~____________~|",
    "     |              |",
    "     |  ~        ~  |",
    "     |  HAPPY      ~|",
    "     |~  BIRTHDAY   |",
    "     |  ~  TUCKER  ~|",
    "     |___.___.___.___|",
    "    /|###|###|###|###|\\",
    "   / |###|###|###|###| \\",
    "  /__|___|___|___|___|\\"
  ];

  const candles = [
    "    🔥    🔥    🔥    🔥  ",
    "    |     |     |     |  ",
    "    |     |     |     |  "
  ];

  const messages = [
    "Wishing you a fantastic day, Tucker! 🎉",
    "May your code always compile on the first try! 💻",
    "Hope your day is as awesome as a bug-free release! 🚀",
    "Another year of being amazing! 🌟"
  ];

  // Clear console and show initial animation
  console.clear();
  
  // Animation frames for blowing out candles
  const frames = 5;
  let currentFrame = 0;
  
  const animation = setInterval(() => {
    console.clear();
    
    // Print appropriate candle frame based on animation progress
    if (currentFrame < frames) {
      const candleFrame = candles.map((line, i) => {
        if (i === 0) {
          // Gradually replace fire emojis with smoke
          return line.replace(/🔥/g, (match, offset) => {
            return offset / 4 < currentFrame ? "💨" : "🔥";
          });
        }
        return line;
      });
      
      // Print candles and cake
      candleFrame.forEach(line => console.log(line));
      cake.forEach(line => console.log(line));
    } else {
      // After candles are blown, just show cake
      cake.forEach(line => console.log(line));
    }
    
    // Show random birthday message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log("\n" + randomMessage);
    
    // End animation after blowing out candles and showing a few messages
    currentFrame++;
    if (currentFrame > frames + 5) {
      clearInterval(animation);
      console.log("\nHappy Birthday, Tucker! From your favorite codebase 💖");
    }
  }, 800);
}

// Run the animation
celebrateBirthday("Tucker");
