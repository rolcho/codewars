static string StringsSum(string s1, string s2)
{
    // Write your solution here.
    return (
        (string.IsNullOrEmpty(s1) ? 0 : int.Parse(s1))
        + (string.IsNullOrEmpty(s2) ? 0 : int.Parse(s2))
    ).ToString();
}
Console.WriteLine(StringsSum("1", ""));
