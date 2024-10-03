namespace ConsecutiveString;

public class LongestConsecutives
{
    public static string LongestConsec(string[] strarr, int k)
    {
        if (strarr.Length == 0 || k > strarr.Length || k <= 0)
        {
            return "";
        }

        if (strarr.Length <= k)
        {
            return string.Join("", strarr);
        }

        List<string> longestStrings = new List<string>();
        int maxLength = 0;

        for (int i = 0; i < k; i++)
        {
            longestStrings.Add(strarr[i]);
            maxLength += strarr[i].Length;
        }

        List<string> stringWindow = new List<string>(longestStrings);
        int currentLength = maxLength;

        for (int i = k; i < strarr.Length; i++)
        {
            currentLength = currentLength - stringWindow[0].Length + strarr[i].Length;
            stringWindow.RemoveAt(0);
            stringWindow.Add(strarr[i]);
            if (currentLength > maxLength)
            {
                longestStrings = new List<string>(stringWindow);
                maxLength = currentLength;
            }
        }
        return string.Join("", longestStrings);
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(
            LongestConsecutives.LongestConsec(
                ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
                2
            )
        );
    }
}
