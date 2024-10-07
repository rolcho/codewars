// 1 2 3 4 5 6 7 8 9 10 11 12
// 1 2 - no sets
// 1 2 3 - [1,2] [3] - sum: 3 all sum: 6
// 1 2 3 4 - [1,4] [2,3] - sum: 5 all sum: 10
// 1 2 3 4 5 - no sets - sum: 7.5 all sum: 15
// 1 2 3 4 5 6 - no sets - sum: 10.5 all sum: 21
// 1 2 3 4 5 6 7 - [7,6,1] [2,3,4,5] - sum: 14 all sum: 28
// 1 2 3 4 5 6 7 8 - [8,7,1,2] [3,4,5,6] - sum: 18 all sum: 36
// 1 2 3 4 5 6 7 8 9 - no sets - sum: 22.5 all sum: 45
// 1 2 3 4 5 6 7 8 9 10 - no sets - sum: 27.5 all sum: 55
// 1 2 3 4 5 6 7 8 9 10 11 - [11,10,9,1,2] [3,4,5,6,7,8] - sum: 33 all sum: 66

namespace TwoSets;

class TwoSets
{
    public static List<List<int>> CreateTwoSets(int n)
    {
        List<List<int>> sets = new List<List<int>>();
        List<int> set1 = new List<int>();
        List<int> set2 = new List<int>();

        int sum = n * (n + 1) / 2;

        if (sum % 2 != 0)
            return sets;

        int target = sum / 2;
        int setSum = 0;

        for (int i = n; i >= 1; i--)
        {
            if (setSum + i > target)
                break;
            set1.Add(i);
            setSum += i;
        }

        for (int i = 1; i <= n; i++)
        {
            if (setSum + i > target)
                break;
            set1.Add(i);
            setSum += i;
        }

        setSum = 0;
        for (int i = set1[set1.Count - 1] + 1; i <= n; i++)
        {
            if (setSum + i > target)
                break;
            set2.Add(i);
            setSum += i;
        }

        sets.Add(set1);
        sets.Add(set2);
        return sets;
    }

    static void Main(string[] args)
    {
        for (int i = 0; i <= 10; i++)
        {
            var result = TwoSets.CreateTwoSets(i);
        }
    }
}
