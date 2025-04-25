import { Outlet } from "react-router";
import TabBar from "./TabBar.tsx";

const mainStyle: React.CSSProperties = {minHeight: '90vh'}

export function Layout() {
  return (
    <>
      <main style={mainStyle} className="layout-body">
        <Outlet />
      </main>
      <TabBar/>
    </>
  );
}
