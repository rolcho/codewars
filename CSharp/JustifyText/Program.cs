// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Last line should not terminate in '\n'
// '\n' is not included in the length of a line.
// Gaps between words can't differ by more than one space.
// Lines should end with a word not a space.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Lines with one word do not need gaps ('somelongword\n').

using System.Text;

static string JustifyText(string str, int len)
{
    Span<string> getWordsInParagraphs(string p) => p.Split(" ").AsSpan();
    Span<string> paragraphs = str.Split("\n").AsSpan();
    string[][][] splittedText = [];
    int paragraphIndex = 0;
    int lineIndex = 0;
    var sb = new StringBuilder();

    foreach (var p in paragraphs)
    {
        var words = getWordsInParagraphs(p);
        int charInLine = 0;
        int wordInLine = 0;
        for (int wordIndex = 0; wordIndex < words.Length; wordIndex++)
        {
            int wordLength = words[wordIndex].Length;
            
            if (charInLine + wordLength + wordInLine > len)
            {
                lineIndex++;
                charInLine = 0;
                wordInLine = 0;
            }

            _ = splittedText[paragraphIndex][lineIndex].Append(words[wordIndex]);
            charInLine += wordLength;
            wordInLine++;
        }
    }

    return "";
}

JustifyText("Lorem ipsum dolor sit amet", 10);
