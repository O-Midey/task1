const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Change this to your preferred port

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
  const utcTime = new Date().toISOString();

  // GitHub repository information
  const githubRepoUrl = "https://github.com/username/repo";
  const githubFileUrl = `${githubRepoUrl}/blob/main/file_name.ext`;

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
  console.log(`Server is running on port ${port}`);
});
