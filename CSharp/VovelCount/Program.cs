static int GetVowelCount(string str)
{
    int vowelCount = 0;
    var vowels = new List<char> { 'a', 'e', 'i', 'o', 'u' };
    foreach (char c in str)
    {
        if (vowels.Contains(c))
        {
            vowelCount++;
        }
    }
    return vowelCount;
}

Console.WriteLine(GetVowelCount("hello"));
