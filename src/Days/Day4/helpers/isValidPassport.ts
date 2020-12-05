import { Passport, ValidPassport } from "./getPassports";

export const isValidPassport = (
  passport: Passport | ValidPassport
): passport is ValidPassport => {
  const isVal =
    (passport as ValidPassport).birthYear !== undefined &&
    (passport as ValidPassport).issueYear !== undefined &&
    (passport as ValidPassport).expirationYear !== undefined &&
    (passport as ValidPassport).height !== undefined &&
    (passport as ValidPassport).eyeColor !== undefined &&
    (passport as ValidPassport).hairColor !== undefined &&
    (passport as ValidPassport).passportID !== undefined;

  if (!isVal) {
    const missingFields = [];
    if (!passport.birthYear) {
      missingFields.push("birthyear");
    }
    if (!passport.issueYear) {
      missingFields.push("issueyear");
    }
    if (!passport.expirationYear) {
      missingFields.push("expirationyear");
    }
    if (!passport.height) {
      missingFields.push("height");
    }
    if (!passport.eyeColor) {
      missingFields.push("eyecolor");
    }
    if (!passport.hairColor) {
      missingFields.push("haircolor");
    }
    if (!passport.passportID) {
      missingFields.push("passportid");
    }
    /*
    console.log({
      isVal,
      passport,
      missingFields,
      numOfFields: Object.keys(passport).length,
    });*/
  } else {
    // console.log({ isVal, passportlength: Object.keys(passport).length });
  }
  return isVal;
};
