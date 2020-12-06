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
