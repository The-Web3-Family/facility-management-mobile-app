import { FC } from "react";

import Inapp from "./Inapp";
import State from "./State";
import Federal from "./Federal";

interface CardProps {
  activeTab: string;
}

const Card: FC<CardProps> = ({ activeTab }) => {
  if (activeTab === "In-App") return <Inapp />;
  if (activeTab === "Federal") return <Federal />;
  return <State />;
};

export default Card;
