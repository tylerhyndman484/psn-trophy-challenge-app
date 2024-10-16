import { exchangeCodeForAccessToken, exchangeNpssoForCode, exchangeRefreshTokenForAuthTokens } from "psn-api";

const npsso = "mKoGjaOHf3zyMlms8tlcDrPdVTmrfSM5ElWYvigvEnXFZBDbm7yMgg3Cejvy4yHX";

const accessCode = await exchangeNpssoForCode(npsso);
const authorization = await exchangeCodeForAccessToken(accessCode);


// Link Playstation Accountç
// Display all unobtained trophies in their dashboard
// Randomize a unobtained trophy from their trophy list
// Challenge friends to a challenge
// Ability to track the head to head progress in real time
// Leaderboard & Progress Tracking
// Put trophies in the app when they complete milestones
// Multiplayer Mode - allow friends to team up and see which teams can obtain the most trophies in a certian amount of time
// Learn how to call the API

const btn = document.getElementById("link-psn-btn");

function alertMessage() {
    alert("Redirecting to Playstation Login...");
  }

const Redirecting = () => {
  btn.addEventListener('click', alertMessage);
  // authorization code for PSN Account
}

Redirecting();
