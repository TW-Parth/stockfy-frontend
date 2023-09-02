import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { getDashboardData } from '../../services/dashboard.services';

// const data = [
//   {
//     name: 'Page A',
//     pv: 2400,
//     amt: 1000,
//   },
//   {
//     name: 'Page B',
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     pv: 4300,
//     amt: 2100,
//   },
// ];
const Dashboard = () => {

  const [data , setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getDashboardData();
      let tempData = [];
      for(let i=0; i< data?.message?.dates?.length; i++){
        tempData.push({ name: data?.message?.dates[i] , pv: data?.message?.predicted_mean[i] , amt : data?.message?.predicted_mean[i] })
      }
      setData(tempData);
    }
    getData();
  }, [])

  return (<ResponsiveContainer height={750} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" strokeWidth={5}  />
        <XAxis dataKey="name" interval={'preserveStart'} line />
        <YAxis interval={'preserveStart'} />
        <Line type="monotone" dataKey="pv" stroke="#ffb73f" activeDot={{ r: 8 }} strokeWidth={10} />
      </LineChart>
    </ResponsiveContainer>)
};

export default Dashboard;
