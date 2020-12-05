import { FieldName, Passport } from "./getPassports";
import { throwUnreachableCase } from "./throwUnreachableCase";

export const addField = (options: {
  fieldName: FieldName;
  fieldValue: string;
  passport: Passport;
}): Passport => {
  const { fieldName, fieldValue, passport } = options;

  switch (fieldName) {
    case FieldName.BirthYear:
      return { ...passport, birthYear: fieldValue };
    case FieldName.IssueYear:
      return { ...passport, issueYear: fieldValue };

    case FieldName.ExpirationYear:
      return { ...passport, expirationYear: fieldValue };

    case FieldName.Height:
      return { ...passport, height: fieldValue };

    case FieldName.HairColor:
      return { ...passport, hairColor: fieldValue };

    case FieldName.EyeColor:
      return { ...passport, eyeColor: fieldValue };

    case FieldName.PassportID:
      return { ...passport, passportID: fieldValue };

    case FieldName.CountryID:
      return { ...passport, countryID: fieldValue };

    default:
      return throwUnreachableCase(fieldName);
  }
};
