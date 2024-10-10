using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace TrafficLightsOneCar;

class Program
{
    // . = Road
    // C = Car
    // G = GREEN traffic light
    // O = ORANGE traffic light
    // R = RED traffic light

    private interface IRoadItem
    {
        public void NextState();
    }

    private class Road : IRoadItem
    {
        public void NextState() { }
    }

    private class Light : IRoadItem
    {
        public int LampState { get; private set; }

        public Light(int lampState)
        {
            LampState = lampState;
        }

        public void NextState()
        {
            if (LampState == 10)
            {
                LampState = 0;
            }
            else
            {
                LampState++;
            }
        }
    }

    private class Car : IRoadItem
    {
        public int Position { get; private set; }

        public Car(int position)
        {
            this.Position = position;
        }

        public void NextState()
        {
            Position++;
        }
    }

    public static string[] TrafficLights(string road, int n)
    {
        string roadToString(List<IRoadItem> road)
        {
            var sb = new StringBuilder();
            foreach (IRoadItem item in road)
            {
                if (item is Car car)
                {
                    sb.Append('C');
                    continue;
                }

                if (item is Light light)
                {
                    char lampChar = light.LampState switch
                    {
                        < 5 => 'G',
                        > 5 => 'R',
                        _ => 'O',
                    };
                    sb.Append(lampChar);
                }
                sb.Append('.');
            }
            return sb.ToString();
        }

        string[] roadStates = new string[n + 1];
        roadStates[0] = road;

        char[] initalRoad = road.ToCharArray();
        List<IRoadItem> roadItems = new List<IRoadItem>();

        for (int i = 0; i < road.Length; i++)
        {
            IRoadItem roadItem = initalRoad[i] switch
            {
                'C' => new Car(i),
                'G' => new Light(0),
                'O' => new Light(5),
                'R' => new Light(6),
                _ => new Road(),
            };
            roadItems.Add(roadItem);
        }
    }

    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
