using System.Text;

static string JustifyText(string str, int len)
{
    string DistributeWords(List<string> words, int length)
    {
        int spaces = length - words.Sum(w => w.Length);
        int gaps = words.Count - 1;
        if (gaps == 0)
        {
            return words[0];
        }

        int normalSpace = spaces / gaps;
        int extraSpace = spaces % gaps;

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < words.Count; i++)
        {
            sb.Append(words[i]);
            if (i < words.Count - 1)
            {
                if (i < extraSpace)
                {
                    sb.Append(' ', normalSpace + 1);
                }
                else
                {
                    sb.Append(' ', normalSpace);
                }
            }
        }
        return sb.ToString();
    }

    List<string> words = str.Split(" ").ToList();
    List<string> justified = new List<string>();
    List<string> currentLine = new List<string>();
    int currentWidth = 0;

    foreach (string word in words)
    {
        if (currentWidth + word.Length + currentLine.Count > len)
        {
            justified.Add(DistributeWords(currentLine, len));
            currentWidth = 0;
            currentLine = new List<string>();
        }

        currentLine.Add(word);
        currentWidth += word.Length;
    }
    justified.Add(string.Join(' ', currentLine));
    return string.Join('\n', justified);
}

Console.WriteLine(JustifyText("123 45 6 789", 7));
