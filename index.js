const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time with a +/-2 minute window
  const utcTime = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

  // GitHub repository information
  const githubRepoUrl = "https://github.com/O-Midey/task1";
  const githubFileUrl = `${githubRepoUrl}/blob/main/index.js`;

  // Response JSON
  const response = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
