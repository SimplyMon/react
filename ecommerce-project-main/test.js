const fetch = require("node-fetch");

async function getCurrentTime() {
  try {
    const geoRes = await fetch("http://ip-api.com/json");
    const geoData = await geoRes.json();

    if (geoData.status !== "success") {
      throw new Error("Could not detect location from IP");
    }

    const { query: ip, country, city, timezone } = geoData;
    console.log("Detected IP Info:");
    console.log({ ip, country, city, timezone });

    const timeRes = await fetch(
      `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`
    );
    const timeData = await timeRes.json();

    console.log("\nCurrent Time Info:");
    console.log({
      timezone,
      currentTime: timeData.dateTime,
      dayOfWeek: timeData.dayOfWeek,
    });
  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Run
getCurrentTime();
