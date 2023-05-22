import en from 'react-phone-number-input/locale/en.json';

export const getCountryName = (country: string) => {
  let countryList: any = en;
  let selectedCountry: string = countryList[country];
  return selectedCountry;
};

export const getCountryCode = (country: string) => {
  let countryList: any = en;
  return Object.keys(en).find((key: any) => countryList[key] === country);
};
