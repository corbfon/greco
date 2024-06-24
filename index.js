#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const simpleGit = require("simple-git");
const { program } = require("commander");

const git = simpleGit();

program
  .option("-c, --csv <path>", "path to the CSV file")
  .option("-d, --dest <path>", "destination folder")
  .parse(process.argv);

const options = program.opts();

if (!options.csv || !options.dest) {
  console.error(
    "Both CSV file path (-c, --csv) and destination folder (-d, --dest) must be specified."
  );
  process.exit(1);
}

const csvFilePath = options.csv;
const destinationFolder = options.dest;

// Ensure the destination folder exists
if (!fs.existsSync(destinationFolder)) {
  throw new Error(`No destination folder found for ${destinationFolder}`);
}

// Function to clone repositories
async function cloneRepositories(repoList) {
  for (const repoUrl of repoList) {
    try {
      const repoName = path.basename(repoUrl, ".git");
      const repoPath = path.join(destinationFolder, repoName);
      console.log(`Cloning ${repoUrl} into ${repoPath}`);
      await git.clone(repoUrl, repoPath);
    } catch (error) {
      console.error(`Failed to clone ${repoUrl}:`, error);
    }
  }
}

// Read and parse the CSV file
const repoList = [];
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    const repoUrl = row["Github Link"]; // Replace with the actual column name in your CSV file
    repoList.push(repoUrl);
  })
  .on("end", async () => {
    console.log("CSV file successfully processed.");
    await cloneRepositories(repoList);
    console.log("All repositories have been cloned.");
  })
  .on("error", (error) => {
    console.error("Error reading CSV file:", error);
  });
