namespace SplitString;

public class SplitString
{
    public static string[]? Solution(string str)
    {
        if (string.IsNullOrEmpty(str))
            return null;

        foreach (char c in str)
        {
            Console.WriteLine(c);
        }

        return null;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(SplitString.Solution("Hello, World!"));
    }
}
