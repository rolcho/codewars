// https://www.codewars.com/kata/586a1af1c66d18ad81000134

/*
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
6: The decade digit from the year of birth (e.g. for 1987 it would be 8 -> 01-Jan-2000)
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
9–10: The date within the month of birth
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
15–16: Two computer check digits. We will always use "AA"

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
*/

export function driver(data: Array<string>): string {
  const monthMap: { [name: string]: number } = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const [forename, middleName, surname, dateOfBirth, gender] = data;
  const shortName = (
    surname.length < 5 ? surname.padEnd(5, '9') : surname.slice(0, 5)
  ).toUpperCase();
  const dateIncrement = gender === 'F' ? 50 : 0;
  const birth = dateOfBirth.split('-');
  const decade = birth[2].slice(-2)[0].toString();
  const month = (monthMap[birth[1].slice(0, 3)] + dateIncrement)
    .toString()
    .padStart(2, '0');
  const day = birth[0].toString().padStart(2, '0');
  const year = birth[2].slice(-2)[1].toString();
  const initial = forename[0] + (middleName.length > 0 ? middleName[0] : '9');
  const arbitrary = '9';
  const check = 'AA';
  const id =
    shortName + decade + month + day + year + initial + arbitrary + check;
  return id;
}
