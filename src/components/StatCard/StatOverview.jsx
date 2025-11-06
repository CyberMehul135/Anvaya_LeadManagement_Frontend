import Statcard from "./StatCard";
import DollorSymbol from "../../assets/dollar.svg?react";
import LeadsSymbol from "../../assets/twoPeople.svg?react";
import GoalSymbol from "../../assets/target.svg?react";
import RiseSymbol from "../../assets/revenueUp.svg?react";

export default function StatOverview({ leads }) {
  // STATS DATA :
  const totalPiplineValue = leads?.reduce((acc, curr) => {
    return (acc += curr.potentialValue);
  }, 0);
  const closedDeals = leads.filter((lead) => lead.status === "Closed").length;
  const totalLeads = leads.length;
  const activeLeads = totalLeads - closedDeals;
  const revenueClosed = leads.reduce((acc, curr) => {
    return (acc += curr.status === "Closed" ? curr.potentialValue : 0);
  }, 0);

  return (
    <div className="grid gap-4 grid-cols-4  max-lg:grid-cols-2 max-sm:grid-cols-1 mt-6">
      <Statcard
        heading={"Total Pipeline Value"}
        headingSymbol={DollorSymbol}
        value={totalPiplineValue}
        isValueCurrency={true}
        description={"Across all leads"}
      />
      <Statcard
        heading={"Active Leads"}
        headingSymbol={LeadsSymbol}
        value={activeLeads}
        isValueCurrency={false}
        description={"In pipeline"}
      />
      <Statcard
        heading={"Closed Deals"}
        headingSymbol={GoalSymbol}
        value={closedDeals}
        isValueCurrency={false}
        description={"Won this period"}
      />
      <Statcard
        heading={"Revenue Closed"}
        headingSymbol={RiseSymbol}
        value={revenueClosed}
        isValueCurrency={true}
        description={"Total won value"}
      />
    </div>
  );
}
