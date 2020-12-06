export interface PolicyAndPasswords {
  policy: {
    min: number;
    max: number;
    requiredCharacter: string;
  };
  password: string;
}
