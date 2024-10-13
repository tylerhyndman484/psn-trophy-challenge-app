import { exchangeCodeForAccessToken } from "psn-api";
import { exchangeNpssoForCode } from "psn-api";
import { exchangeRefreshTokenForAuthTokens } from "psn-api";
import { getUserTrophyProfileSummary } from "psn-api";

// Link Playstation Account
// Display all unobtained trophies in their dashboard
// Randomize a unobtained trophy from their trophy list
// Challenge friends to a challenge
// Ability to track the head to head progress in real time
// Leaderboard & Progress Tracking
// Put trophies in the app when they complete milestones
// Multiplayer Mode - allow friends to team up and see which teams can obtain the most trophies in a certian amount of time

// <-------- PSN API CODE -------->
const myNpsso = "sy8U3WgDURAxUAPLy24sE5LdWCa8KQLh03K0Iz16plopgom5qayKaq5pPzG4NAeE";
const accessCode = await exchangeNpssoForCode(myNpsso);
const authorization = await exchangeCodeForAccessToken(accessCode);


const trophyTitlesResponse = await getUserTitles({ accessToken: authorization.accessToken },"me");


    //<------- REFRESHING ACCESS TOKEN --------->```

// We'll take the `expiresIn` value and convert it to an
// ISO date string (eg- "2021-11-02T01:02:03.246Z").
// This conversion makes the expiration date easy to store
// and easy to compare to the current date when used later.
const now = new Date();
const expirationDate = new Date(
  now.getTime() + authorization.expiresIn * 1000
).toISOString();

// ... some time later ...

// Since `expirationDate` is already an ISO date string,
// doing a comparison to see if it's expired is a one-liner.
const isAccessTokenExpired = new Date(expirationDate).getTime() < now.getTime();

if (isAccessTokenExpired) {
  // We'll use our refresh token to get a new access token.
  // Assuming success, this function returns an auth object
  // with the same shape as the response from `exchangeCodeForAccessToken()`.
  const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(
    authorization.refreshToken
  );

  // Like above, we can now convert `updatedAuthorization.expiresIn` to
  // an ISO date string to be ready for a future `isAccessTokenExpired` comparison.

}       //<------- REFRESHING ACCESS TOKEN ------> 

// <-------- PSN API CODE -------->
