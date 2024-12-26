using System.Text;

namespace RomanNumbers;

class Program
{
    static readonly Dictionary<int, string> romanNumbers =
        new()
        {
            { 1, "I" },
            { 4, "IV" },
            { 5, "V" },
            { 9, "IX" },
            { 10, "X" },
            { 40, "XL" },
            { 50, "L" },
            { 90, "XC" },
            { 100, "C" },
            { 400, "CD" },
            { 500, "D" },
            { 900, "CM" },
            { 1000, "M" },
        };

    public static string ToRoman(int n)
    {
        var s = new StringBuilder();
        while (n > 0)
        {
            foreach (var (value, numeral) in romanNumbers.OrderByDescending(kvp => kvp.Key))
            {
                while (n >= value)
                {
                    s.Append(numeral);
                    n -= value;
                }
            }
        }
        return s.ToString();
    }

    public static int FromRoman(string romanNumeral)
    {
        int sum = 0;
        for (int i = 0; i < romanNumeral.Length; i++)
        {
            if (
                i + 1 < romanNumeral.Length
                && romanNumbers.ContainsValue($"{romanNumeral[i]}{romanNumeral[i + 1]}")
            )
            {
                sum += romanNumbers
                    .Single(x => x.Value == $"{romanNumeral[i]}{romanNumeral[i + 1]}")
                    .Key;
                i++;
                continue;
            }
            sum += romanNumbers.Single(x => x.Value == $"{romanNumeral[i]}").Key;
        }
        return sum;
    }

    public static void Main()
    {
        Console.WriteLine(FromRoman("MCMXC"));
        Console.WriteLine(ToRoman(1666));
    }
}
