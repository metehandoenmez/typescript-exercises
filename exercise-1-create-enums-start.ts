/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {
  EUR = "Euro",
  USD = "Dollar",
}

// Update the type for the `currency` property in this interface to use
// the `Currency` enum.

interface Country {
  name: string;
  currency: Currency;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
  {
    name: "France",
    currency: Currency.EUR,
  },
  {
    name: "United States of America",
    currency: Currency.USD,
  },
  {
    name: "Italy",
    currency: Currency.EUR,
  },
  {
    name: "New Zealand",
    currency: Currency.USD,
  },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

enum LanguageStatus {
  PRI = "primary",
  SEC = "secondary",
}

const countryLanguages = [
  { language: "Spanish", status: LanguageStatus.PRI },
  { language: "English", status: LanguageStatus.SEC },
];

// ----

export {};
