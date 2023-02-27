## Background

This project was built using React, Tone and Firebase.

A hosted version of this project can be found [here](http).

loop-lab is a website whereby a user can make beats and select different sounds samples. You can toggle between a keyboard and piano which register click or keypress to play together with a customisable sequencer. You can save and view your past beats for the sequencer when you log in and import them.

## Getting Started

### Prerequisites

This project requires [npm](https://www.npmjs.com/get-npm) (v19.1.0 or newer) to run locally. Install if necessary.

## Setting up your own local version

Clone this repo:

```bash
git clone https://github.com/${username}/loop-lab.git

cd loop-lab
```

Run the following commands in your terminal to install the project's dependencies and run it:

```bash
npm install

npm start
```

## Step 2 - Setting up your recorder

### Recording Your Loops

To record audio from our app you will need to install a dedicated recording software, this is a guide for ubuntu (windows users can follow this guide without installing anything, and here is a guide for mac users).

Firstly you need to install Audio Recorder

Open your terminal with:

```
ctrl + alt + t
```

Enter the following:

```bash
sudo add-apt-repository ppa:audio-recorder/ppa
sudo apt-get update && sudo apt-get install audio-recorder
```

Using the settings change to your preferred format (FLAC or WAV for professional standard, MP3 if you're concerned about speed/size).

Select the route to date audio from the additional settings button at the bottom of the app.

Hit record.

Navigate to the folder you specified in the previous step and drag and drop your file into whichever DAW (digital audio workstation) you prefer, a couple of free ones below.

You can record audio from [audacity](https://www.audacityteam.org/download/linux/) or [reaper](https://www.reaper.fm/download.php).

Once your audio has been dragged in you should be able to see it on screen, you can now trim it down to suit and use it to insert different loops and create your own music (pro tip: start with your drums and just keep adding until you're happy!).

---
