# greco - GitHub Repo Cloner

A CLI tool to clone GitHub repositories listed in a CSV file.

## Table of Contents

- [Installation](#installation)
  - [Download the Repository from GitHub](#download-the-repository-from-github)
  - [Download and Install Node.js](#download-and-install-nodejs)
  - [Install the Package Globally](#install-the-package-globally)
- [Usage](#usage)
  - [Windows](#windows)
  - [macOS](#macos)

## Installation

### Download the Repository from GitHub

1. Navigate to the [GitHub repository](https://github.com/your-username/your-repo-name).
2. Click on the `Code` button.
3. Select `Download ZIP` and unzip the file to your desired location.
4. Alternatively, clone the repository using Git:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

### Download and Install Node.js

1. Visit the [Node.js download page](https://nodejs.org/en/download/package-manager).
2. Download the installer for your operating system (Windows or macOS).
3. Run the installer and follow the instructions to install Node.js and npm (Node Package Manager).

### Install the Package Globally

1. Open your terminal (Command Prompt on Windows, Terminal on macOS) in the directory of the cloned repository.
2. Install the package globally using npm:

```bash
npm install
npm install -g .
```

## Usage

### Windows

1. Open Command Prompt.
2. Run the tool with the following command:

```bash
gh-repo-cloner -c path\to\your\file.csv -d path\to\your\destination\folder
```

### MacOS

1. Open Terminal.
2. Run the tool with the following command:

```bash
gh-repo-cloner -c /path/to/your/file.csv -d /path/to/your/destination/folder
```

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure Node.js and npm are correctly installed by running node -v and npm -v in your terminal.
- Verify that the CSV file path and destination folder path are correct.
