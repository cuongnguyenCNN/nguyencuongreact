
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <div className="landing-page">
      <Outlet />
    </div>
  );
}

export default LandingLayout;