namespace CountCharacters;

public class Kata
{
    public static Dictionary<char, int> Count(string str)
    {
        if (str.Length is 0)
            return [];
        var characters = new Dictionary<char, int>();

        foreach (var character in str)
        {
            if (characters.ContainsKey(character))
            {
                characters[character]++;
            }
            else
            {
                characters.Add(character, 1);
            }
        }
        return characters;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Kata.Count("Hello");
    }
}
