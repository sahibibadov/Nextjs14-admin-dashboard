import CardItem from "@/components/dashboard/card/card";
import ChartItem from "@/components/dashboard/chart/chart";
import Transactions from "@/components/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-3 px-5">
      <div className="flex gap-3">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <Transactions />
      <ChartItem />
    </section>
  );
};

export default Dashboard;
