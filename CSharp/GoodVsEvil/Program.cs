static string GoodVsEvil(string good, string evil)
{
    int[] goodPoints = { 1, 2, 3, 3, 4, 10 };
    int[] evilPoints = { 1, 2, 2, 2, 3, 5, 10 };

    int goodSum = good.Split(' ').Select((x, i) => int.Parse(x) * goodPoints[i]).Sum();
    int evilSum = evil.Split(' ').Select((x, i) => int.Parse(x) * evilPoints[i]).Sum();

    return goodSum.CompareTo(evilSum) switch
    {
        > 0 => "Battle Result: Good triumphs over Evil",
        < 0 => "Battle Result: Evil eradicates all trace of Good",
        _ => "Battle Result: No victor on this battle field",
    };
}

Console.WriteLine(GoodVsEvil("1 1 1 1 1", "1 2 3"));
