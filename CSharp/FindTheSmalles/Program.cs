namespace FindTheSmallest;

class Program
{
    public static long[] Smallest(long n)
    {
        long[] GetDigits(long n)
        {
            List<long> digits = new List<long>();
            while (n > 0)
            {
                digits.Insert(0, n % 10);
                n /= 10;
            }
            return digits.ToArray();
        }

        long[] digits = GetDigits(n);

        return digits;
    }

    static string Array2String(long[] list)
    {
        return "[" + string.Join(", ", list) + "]";
    }

    static void Main(string[] args)
    {
        Console.WriteLine(Array2String(Smallest(261235)));
    }
}
