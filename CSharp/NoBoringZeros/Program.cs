namespace NoBoringZeros;

class Program
{
    public static int NoBoringZeros(int n)
    {
        if (n == 0)
            return 0;
        while (n % 10 == 0)
            n /= 10;
        return n;
    }

    static void Main(string[] args) { }
}
