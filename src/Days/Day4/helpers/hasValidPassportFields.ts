import { Passport } from "./getPassports";

export const isValidBirthYear = (input: string) => {
  const year = parseInt(input);

  if (isNaN(year)) {
    return false;
  }

  return year >= 1920 && year <= 2002;
};

export const isValidIssueYear = (input: string) => {
  const year = parseInt(input);

  if (isNaN(year)) {
    return false;
  }

  return year >= 2010 && year <= 2020;
};

export const isValidExpirationYear = (input: string) => {
  const year = parseInt(input);

  if (isNaN(year)) {
    return false;
  }

  return year >= 2020 && year <= 2030;
};

export const isValidHeight = (input: string) => {
  const lastTwoCharacters = input.slice(-2);
  const upToLastTwoCharacters = input.slice(-input.length, -2);

  if (lastTwoCharacters !== "cm" && lastTwoCharacters !== "in") {
    return false;
  }

  if (lastTwoCharacters === "cm") {
    const height = parseInt(upToLastTwoCharacters);
    if (isNaN(height)) {
      return false;
    }

    return height >= 150 && height <= 193;
  }

  if (lastTwoCharacters === "in") {
    const height = parseInt(upToLastTwoCharacters);
    if (isNaN(height)) {
      return false;
    }

    return height >= 59 && height <= 76;
  }

  return false;
};

export const isValidHairColor = (input: string) => {
  // Refactor to regex
  if (input.charAt(0) !== "#") {
    return false;
  }

  const restOfChars = input.slice(1).split("");

  return restOfChars.every((char) =>
    [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ].includes(char)
  );
};

export const isValidEyeColor = (input: string) => {
  return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input);
};

export const isValidPassportId = (input: string) => {
  if (input.length !== 9) {
    return false;
  }

  return input
    .split("")
    .every((char) =>
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
    );
};

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
