import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PATHROUTES from "../../helpers/PathRoutes";

const ProtectedRoute = ({ canActivate }) => {
  if (!canActivate) {
    return <Navigate to={PATHROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
