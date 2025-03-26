namespace NoBoringZeros;

static class Program
{
    public static int NoBoringZeros(int n)
    {
        if (n == 0)
            return 0;
        while (n % 10 == 0)
            n /= 10;
        return n;
    }

    private static void Main(string[] args)
    {
        Console.WriteLine(NoBoringZeros(3000));
    }
}
