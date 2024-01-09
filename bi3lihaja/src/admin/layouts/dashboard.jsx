
import {
  Sidenav,
 
} from "../widgets/layout/sidenav";
import {
  DashboardNavbar,
  
} from "../widgets/layout/dashboard-navbar";

import {

  Configurator,
  
} from "../widgets/layout/configurator";

import {

  Footer,
} from "../widgets/layout/footer";

import { useMaterialTailwindController,setOpenConfigurator } from "../context/index";


export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
      
     
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/admin/layout/dashboard.jsx";

export default Dashboard;
