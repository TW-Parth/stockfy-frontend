import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 2400,
    amt: 1000,
  },
  {
    name: 'Page B',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    amt: 2100,
  },
];
// const data = {predicted_mean: [550.0970689666153, 376.8863278657291, 640.8839001933206, 717.4782302393254, 691.3909348485439, 815.7318875664392, 776.9524728466279, 729.1825522412747, 1149.8787467537, 633.943190992099, 1291.3414570094476, 1417.1693364236835], dates: ["2017-01-01", "2017-02-01", "2017-03-01", "2017-04-01", "2017-05-01", "2017-06-01", "2017-07-01", "2017-08-01", "2017-09-01", "2017-10-01", "2017-11-01", "2017-12-01"]}
const Dashboard = () => {


  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await getDashboardData();
  //     console.log(res);
  //   }
  // }, [])

  return (<ResponsiveContainer height={250} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={'preserveStart'} />
        <YAxis interval={'preserveStart'} />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>)
};

export default Dashboard;
