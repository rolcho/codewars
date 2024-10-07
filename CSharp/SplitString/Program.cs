namespace SplitString;

public class SplitString
{
    public static string[]? Solution(string str)
    {
        if (string.IsNullOrEmpty(str))
            return null;

        if (str.Length % 2 != 0)
            str += "_";

        List<string> pairs = [];

        for (int i = 0; i < str.Length; i += 2)
        {
            pairs.Add($"{str[i]}{str[i + 1]}");
        }

        return [.. pairs];
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(SplitString.Solution("Hello, World!"));
    }
}
