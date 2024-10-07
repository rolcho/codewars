using System.Text;

static string CleanString(string s)
{
    var sb = new StringBuilder();

    foreach (char c in s)
    {
        if (c == '#')
        {
            if (sb.Length > 0)
            {
                sb.Remove(sb.Length - 1, 1);
            }
        }
        else
        {
            sb.Append(c);
        }
    }

    return sb.ToString();
}

Console.WriteLine(CleanString("#ab#c"));
