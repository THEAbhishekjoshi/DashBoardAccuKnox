import AddWidget from "@/components/AddWidget"
import { AppSidebar } from "@/components/AppSidebar"
import TopBar from "@/components/TopBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import WidgetCard from "@/components/WidgetCard"
import Data from "../Dashboard.json"
import { useState } from "react"
import SheetDemo from "@/components/SheetDemo"
const Dashboard = () => {
  // const [dashboardData, setDashboardData] = useState([Data]);
  // console.log("data:", dashboardData)
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <TopBar />
          <div className="flex flex-row items-center mt-4 justify-between">
            <div className="text-[18px] font-bold ml-1">CNAPP Dashboard</div>
            <div><AddWidget /></div>
          </div>
          <div className="ml-2">
            <WidgetCard/>
          </div>
          <div> <SheetDemo/></div>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Dashboard
