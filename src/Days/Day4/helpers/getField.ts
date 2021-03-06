import { FieldName, Passport } from "../Day4.types";
import { throwUnreachableCase } from "../../../helpers/throwUnreachableCase";

export const getField = (options: {
  fieldName: FieldName;
  fieldValue: string;
}): Pick<Passport, keyof Passport> => {
  const { fieldName, fieldValue } = options;

  switch (fieldName) {
    case FieldName.BirthYear:
      return { birthYear: fieldValue };
    case FieldName.IssueYear:
      return { issueYear: fieldValue };

    case FieldName.ExpirationYear:
      return { expirationYear: fieldValue };

    case FieldName.Height:
      return { height: fieldValue };

    case FieldName.HairColor:
      return { hairColor: fieldValue };

    case FieldName.EyeColor:
      return { eyeColor: fieldValue };

    case FieldName.PassportID:
      return { passportID: fieldValue };

    case FieldName.CountryID:
      return { countryID: fieldValue };

    default:
      return throwUnreachableCase(fieldName);
  }
};
