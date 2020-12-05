import { addField } from "./addField";

export enum FieldName {
  BirthYear = "byr",
  IssueYear = "iyr",
  ExpirationYear = "eyr",
  Height = "hgt",
  HairColor = "hcl",
  EyeColor = "ecl",
  PassportID = "pid",
  CountryID = "cid",
}

export interface ValidPassport {
  birthYear: string;
  issueYear: string;
  expirationYear: string;
  height: string;
  hairColor: string;
  eyeColor: string;
  passportID: string;
  countryID?: string;
}

export type Passport = Partial<ValidPassport>;

export const getPassports = (data: string) => {
  const passports: Passport[] = [];
  let passport: Passport = {};
  data.split("\n").forEach((line) => {
    if (!line) {
      passports.push(passport);
      passport = {};
      return;
    }

    line.split(" ").forEach((field) => {
      const fieldName = field.split(":")[0] as FieldName;
      const fieldValue = field.split(":")[1];

      passport = addField({ fieldName, fieldValue, passport });
    });
  });

  // Hacky: push last passport
  passports.push(passport);

  return passports;
};
