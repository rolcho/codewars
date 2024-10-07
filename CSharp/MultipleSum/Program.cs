static int MultipleSum(int value)
{
    int sum = 0;
    for (int i = 3; i < value; i += 3)
    {
        sum += i;
    }
    for (int i = 5; i < value; i += 5)
    {
        if (i % 3 != 0)
            sum += i;
    }
    return sum;
}

Console.WriteLine(MultipleSum(10));
