namespace ArrayPlusOne;

public class ArrayPlusOne
{
    public static int[]? UpArray(int[] num)
    {
        if (num.Length == 0)
            return null;

        List<int> numbers = new List<int>();
        int increment = 1;
        int i = num.Length - 1;

        while (i >= 0)
        {
            if (num[i] < 0 || num[i] > 9)
            {
                return null;
            }
            if (num[i] == 9 && increment == 1)
            {
                numbers.Insert(0, 0);
                increment = 1;
            }
            else
            {
                numbers.Insert(0, num[i] + increment);
                increment = 0;
            }
            i--;
        }

        if (increment == 1)
        {
            numbers.Insert(0, 1);
        }
        return numbers.ToArray();
    }
}

class Program
{
    static void Main(string[] args)
    {
        ArrayPlusOne.UpArray(
            [
                9,
                2,
                2,
                3,
                3,
                7,
                2,
                0,
                3,
                6,
                8,
                5,
                4,
                7,
                7,
                5,
                8,
                0,
                7,
                5,
                3,
                2,
                6,
                7,
                8,
                4,
                2,
                4,
                2,
                6,
                7,
                8,
                7,
                4,
                5,
                2,
                1,
            ]
        );
    }
}
