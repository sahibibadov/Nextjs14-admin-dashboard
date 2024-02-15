import { Card } from "@tremor/react";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardItem = () => {
  return (
    <Card
      decoration="left"
      decorationColor="gray"
      className="flex cursor-pointer items-start gap-3 rounded-2xl bg-white/5 ring-0 backdrop-blur-sm transition-all hover:bg-white/50 dark:bg-transparent"
    >
      <MdSupervisedUserCircle size={24} color="gray" />
      <div>
        <h3 className="text-lg  text-tremor-content">Total Users</h3>
        <p className="text-3xl font-bold text-dark-tremor-content-inverted">
          2000
        </p>
      </div>
    </Card>
  );
};

export default CardItem;
