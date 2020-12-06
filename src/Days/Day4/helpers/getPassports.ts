import { getField } from "./getField";
import { Passport, FieldName } from "../Day4.types";

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

      passport = { ...passport, ...getField({ fieldName, fieldValue }) };
    });
  });

  // Hacky: push last passport
  passports.push(passport);

  return passports;
};
