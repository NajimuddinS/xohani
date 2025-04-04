import React, { useState } from "react";
import thumb from "../assets/thumb.png";
import graph from "../assets/graph.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
  width: 800,
};

const Dashboard = () => {
  const [color, setColor] = React.useState("#584CB7");

  const [data, setData] = useState({
    title: "The Psychology of High-Performing Teams",
    description:
      "Discover the science behind team dynamics, motivation, and productivity. Learn how top-performing teams communicate, collaborate, and innovate in high-pressure environments.",
    status: "Active",
    info: "430 people have enrolled till now",
    price: "Price: $ 99",
  });

  const [revenue, setRevenue] = useState([
    { title: "Webinar Revenue", price: "$868", info: "143 Orders" },
    { title: "Affiliate Revenue", price: "$368", info: "32k Visitors" },
    { title: "Subscribers", price: "3,422", info: "$32.48 Average Order" },
    { title: "Monthly active users", price: "3000", info: "Wed, Jul 20" },
  ]);

  const [Affiliates, setAffiliates] = useState([
    {
      title: "Amazon",
      logo: "https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png",
      price: "$ 49",
    },
    {
      title: "Youtube",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
      price: "$ 49",
    },
    {
      title: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/800px-Shopify_logo_2018.svg.png",
      price: "$ 49",
    },
    {
      title: "Tiktok",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png",
      price: "$ 49",
    },
  ]);

  let navigate = useNavigate();

  return (
    <div className="bg-[#e3e6eb]">
      <br />
      <div className="custom-dashboard font-medium">Listing</div>
      <br />
      <div className="custom-dashboard rounded-md mt-5 ml-5 mr-5 gap-5 bg-white p-5 ">
        <button
          onClick={() => {
            navigate("/form");
          }}
          className="bg-[#584CB7] p-4 rounded-md text-white mb-10"
        >
          Go to Form Page
        </button>

        {/* 1st Row */}
        <div className="custom-dashboard flex gap-10">
          <div className="border border-gray-300 rounded-md p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-bold">{data.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex text-[#3A3093]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                  4.8
                </div>
                <button className="bg-[#3A3093] rounded-md p-1 pl-2 pr-2 text-white">
                  Active
                </button>
              </div>
            </div>
            <div>
              <h1>{data.description}</h1>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">{data.info}</p>
              <p className="text-[#3A3093] font-semibold">{data.price}</p>
            </div>
          </div>
          <div className="border border-dashed rounded-md">
            <img className="p-2 w-[700px]" src={thumb} alt="" />
          </div>
        </div>
        {/* 2nd */}
        <div className=" mt-10 flex gap-5">
          <div className="border border-gray-300 rounded-md pt-5 pl-4 pr-4">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Total Views</h1>
              <button className="bg-violet-50 p-3 pl-5 pr-5 rounded-md text-[#3A3093] font-semibold">
                Views{" "}
              </button>
              <button className="bg-violet-50 p-3 pl-5 pr-5 rounded-md text-[#3A3093] font-semibold">
                This Month
              </button>
            </div>
            <div className="pb-5">
              {/* <img src={graph} alt="" /> */}
              <Stack
                direction="column"
                spacing={2}
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <LineChart
                  {...chartsParams}
                  series={[
                    {
                      data: [100000, 80234, 40000, 30000, 20000, 10],
                      label: "Sales Funnel",
                      curve: "linear",
                      color,
                    },
                  ]}
                  xAxis={[
                    {
                      scaleType: "point",
                      data: [
                        "Stage 1",
                        "Stage 2",
                        "Stage 3",
                        "Stage 4",
                        "Stage 5",
                        "Stage 6",
                      ],
                    },
                  ]}
                  yAxis={[
                    {
                      scaleType: "log",
                    },
                  ]}
                />
              </Stack>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-sm text-center">
            <div className="border border-gray-300 rounded-md p-7 gap-5 flex flex-col">
              <p>Total number of attendees</p>
              <h1 className="text-5xl font-bold text-[#3A3093]">500k</h1>
            </div>
            <div className="border border-gray-300 rounded-md p-7 gap-5 flex flex-col">
              <p>Total revenue generated</p>
              <h1 className="text-5xl font-bold text-[#3A3093]">$1,236</h1>
            </div>
          </div>
        </div>
        <br />
        <div className="border border-gray-300 rounded-md flex p-5 justify-between">
          {revenue.map((details, idx) => (
            <div className="p-2" key={idx}>
              <p>{details.title}</p>
              <h1 className="text-xl font-bold text-[#3A3093]">
                {details.price}
              </h1>
              <p className="text-gray-400 text-sm">{details.info}</p>
            </div>
          ))}
        </div>
        <br />
        <h1>Affiliates</h1>
        <br />
        <div className="flex gap-10">
          {Affiliates.map((item, idx) => (
            <div className="border border-gray-300 rounded-md p-10">
              <p className="font-bold text-lg">{item.title}</p>
              <br />
              <img className="w-3xs" src={item.logo} alt="" />
              <br />
              <div className="flex justify-between">
                <p>{item.price}</p>
                <button className="text-[#3A3093]">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="custom-dashboard rounded-md mt-5 ml-5 mr-5 gap-5 bg-white p-5 ">
        <div className="custom-dashboard flex gap-10">
          <div className="border border-gray-300 rounded-md p-3 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-bold">{data.title}</h1>
              <div className="flex gap-10 items-center gap-4">
                <div className="flex text-[#3A3093]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                  4.8
                </div>
                <button className="bg-[#3A3093] rounded-md p-1 pl-2 pr-2 text-white">
                  Active
                </button>
              </div>
            </div>
            <div>
              <h1>{data.description}</h1>
            </div>
            <div className="flex justify-between ">
              <p className="text-gray-400">{data.info}</p>
              <p className="text-[#3A3093] font-semibold">{data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
