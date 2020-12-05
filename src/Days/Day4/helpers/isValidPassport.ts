import { Passport, ValidPassport } from "./getPassports";

export const isValidPassport = (
  passport: Passport | ValidPassport
): passport is ValidPassport => {
  let isVal = true;
  const missingFields = [];
  if (!passport.birthYear) {
    isVal = false;
    missingFields.push("birthyear");
  }
  if (!passport.issueYear) {
    isVal = false;
    missingFields.push("issueyear");
  }
  if (!passport.expirationYear) {
    isVal = false;
    missingFields.push("expirationyear");
  }
  if (!passport.height) {
    isVal = false;
    missingFields.push("height");
  }
  if (!passport.eyeColor) {
    isVal = false;
    missingFields.push("eyecolor");
  }
  if (!passport.hairColor) {
    isVal = false;
    missingFields.push("haircolor");
  }
  if (!passport.passportID) {
    isVal = false;
    missingFields.push("passportid");
  }

  return isVal;
};
