import useSidebarContext from "../contexts/SidebarContext";
import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Heading1 from "../components/Headings/Heading1";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import useReportContext from "../contexts/ReportContext";

// Chart Size Maintainance
defaults.maintainAspectRatio = false;
defaults.responsive = true;
// Chart Heading Maintainance
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function Report() {
  const { isSidebarVisible } = useSidebarContext();
  const {
    totalLeadsInPipeline,
    closedLeadsLastWeek,
    leadCountByStatus,
    leadCountByAgent,
  } = useReportContext();
  console.log(leadCountByStatus);

  if (
    totalLeadsInPipeline &&
    closedLeadsLastWeek &&
    leadCountByStatus &&
    leadCountByAgent
  ) {
    return (
      <Container className="w-full max-w-[1600px] mx-auto flex">
        <Sidebar />
        <Container
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <Header />
          <main className="w-full h-fit p-6 bg-surface-primary text-black">
            <Container className="flex justify-between items-center">
              <Heading1
                main="Reports & Analytics"
                sub="Insights into your sales performance"
              />
            </Container>

            <Container className="mt-6 grid gap-6 grid-cols-2 max-md:grid-cols-1">
              <div className="min-h-[350px] col-span-1 max-lg:col-span-2 p-6 bg-surface-secondary border border-border-default rounded-lg">
                <Pie
                  data={{
                    labels: ["Lead In Pipline", "Leads Closed last-week"],
                    datasets: [
                      {
                        label: "Lead",
                        data: [
                          totalLeadsInPipeline?.totalLeadsInPipeline,
                          closedLeadsLastWeek?.length,
                        ],
                        backgroundColor: ["#16A249", "#2463EB"],
                        borderRadius: 5,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "Pipeline Overview",
                      },
                    },
                  }}
                />
              </div>
              <div className="min-h-[350px] col-span-1 max-lg:col-span-2 p-6 bg-surface-secondary border border-border-default rounded-lg">
                <Pie
                  data={{
                    labels: leadCountByStatus?.map((lead) => lead._id),
                    datasets: [
                      {
                        label: "Lead Status",
                        data: leadCountByStatus?.map((lead) => lead.count),
                        backgroundColor: [
                          "#2463EB",
                          "#F59F0A",
                          "#16A249",
                          "#6B21BB",
                          "#EF4343",
                        ],
                        borderRadius: 5,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "Lead Status Distribution",
                      },
                    },
                  }}
                />
              </div>
              <div className="min-h-[350px] col-span-2 p-6 bg-surface-secondary border border-border-default rounded-lg">
                <Bar
                  data={{
                    labels: leadCountByAgent?.map((lead) => lead.agentName),
                    datasets: [
                      {
                        label: "Active Leads",
                        data: leadCountByAgent?.map(
                          (lead) => lead.pipelineLeadCount
                        ),
                        borderRadius: 5,
                        backgroundColor: ["#2463EB"],
                        borderColor: ["2463EB"],
                      },
                      {
                        label: "Closed Deals",
                        data: leadCountByAgent?.map(
                          (lead) => lead.closedLeadCount
                        ),
                        borderRadius: 5,
                        backgroundColor: ["#16A249"],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "Agent Performance",
                      },
                    },
                  }}
                />
              </div>
            </Container>
          </main>
        </Container>
      </Container>
    );
  }
}
