import { Passport } from "../Day4.types";
import { isValidBirthYear } from "./isValidBirthYear";
import { isValidIssueYear } from "./isValidIssueYear";
import { isValidExpirationYear } from "./isValidExpirationYear";
import { isValidHeight } from "./isValidHeight";
import { isValidEyeColor } from "./isValidEyeColor";
import { isValidHairColor } from "./isValidHairColor";
import { isValidPassportId } from "./isValidPassportId";

export const hasValidPassportFields = (passport: Passport) => {
  const {
    birthYear,
    issueYear,
    expirationYear,
    height,
    eyeColor,
    hairColor,
    passportID,
  } = passport;

  let isVal = true;
  const invalidFields = [];

  if (birthYear && !isValidBirthYear(birthYear)) {
    isVal = false;
    invalidFields.push("birthyear " + birthYear);
  }

  if (issueYear && !isValidIssueYear(issueYear)) {
    isVal = false;
    invalidFields.push("issueyear " + issueYear);
  }

  if (expirationYear && !isValidExpirationYear(expirationYear)) {
    isVal = false;
    invalidFields.push("expirationyear " + expirationYear);
  }

  if (hairColor && !isValidHairColor(hairColor)) {
    isVal = false;
    invalidFields.push("hairColor " + hairColor);
  }

  if (eyeColor && !isValidEyeColor(eyeColor)) {
    isVal = false;
    invalidFields.push("eyeColor " + eyeColor);
  }

  if (height && !isValidHeight(height)) {
    isVal = false;
    invalidFields.push("height " + height);
  }

  if (passportID && !isValidPassportId(passportID)) {
    isVal = false;
    invalidFields.push("passportID " + passportID);
  }

  if (!isVal) {
    // console.log({ isVal, invalidFields, passport });
  }

  return isVal;
};
