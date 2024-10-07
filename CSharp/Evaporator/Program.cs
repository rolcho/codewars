static int Evaporator(double content, double evap_per_day, double threshold)
{
    int days = 0;
    double thresholdAmount = threshold / 100 * content;
    while (content > thresholdAmount)
    {
        content -= content * evap_per_day / 100;
        days++;
    }
    return days;
}

Console.WriteLine(Evaporator(10, 10, 5));
Console.WriteLine(Evaporator(10, 10, 10));
