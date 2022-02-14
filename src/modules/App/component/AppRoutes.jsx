import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import PublicRoute from "../../Shared/components/Routes/PublicRoute";
import HomeContainer from "../../Home/container/HomeContainer";
import PrivateRoute from "../../Shared/components/Routes/PrivateRoute";
import LogoutContainer from "../../Logout/container/LogoutContainer";
import LoginContainer from "../../Login/container/LoginContainer";
import RegisterContainer from "../../Register/container/RegisterContainer";
import RoleRoute from "../../Shared/components/Routes/RoleRoute";
import {AdminRole, ManagerRole, UserRole} from "../../Shared/constants/RoleNames";
import MoviePageContainer from "../../MoviePage/container/MoviePageContainer";
import MovieSessionPageContainer from "../../MovieSessionsPage/container/MovieSessionPageContainer";
import Dashboard from "../../Dashboard/component/Dashboard";
import NotFound from "../../NotFound/component/NotFound";
import UserManagementContainer from "../../UserManagement/container/UserManagementContainer";
import MovieManagementContainer from "../../MovieManagement/container/MovieManagementContainer";
import CinemaManagementContainer from "../../CinemaManagement/container/CinemaManagementContainer";
import HallManagementContainer from "../../HallManagement/container/HallManagementContainer";
import AdditionalServiceManagementContainer
    from "../../AdditionalServiceManagement/container/AdditionalServiceManagementContainer";
import SessionManagementContainer from "../../SessionManagement/container/SessionManagementContainer";
import BookingContainer from "../../BookingPage/container/BookingContainer";
import ConfirmBookingPageContainer from "../../ConfirmBookingPage/container/ConfirmBookingPageContainer";
import ProfilePageContainer from "../../ProfilePage/container/ProfilePageContainer";

const AppRoutes = ({isAuthenticate, setIsAuthenticate, isLoading}) => {
    return (
        <Routes>
            <Route exact path='/'
                   element={<PublicRoute isAuthenticate={isAuthenticate}
                                         setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                         component={HomeContainer}/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route exact path='/logout'
                   element={<PrivateRoute isAuthenticate={isAuthenticate}
                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                          component={LogoutContainer}/>}/>
            <Route path='/login'
                   element={<PublicRoute isAuthenticate={isAuthenticate}
                                         setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                         component={LoginContainer} restricted={true}/>}/>
            <Route path='/register'
                   element={<PublicRoute isAuthenticate={isAuthenticate}
                                         setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                         component={RegisterContainer} restricted={true}/>}/>
            <Route path='/afisha/'
                   element={<RoleRoute isAuthenticate={isAuthenticate} role={UserRole}
                                       setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                       component={MoviePageContainer} restricted={false}/>}/>
            <Route path='/afisha/movieId=:movieId'
                   element={<RoleRoute isAuthenticate={isAuthenticate} role={UserRole}
                                       setIsAuthenticate={setIsAuthenticate}
                                       isLoading={isLoading}
                                       component={MovieSessionPageContainer}
                                       restricted={false}/>}/>
            <Route path='/afisha/movieId=:movieId/sessionId=:sessionId'
                   element={<RoleRoute isAuthenticate={isAuthenticate} role={UserRole}
                                       setIsAuthenticate={setIsAuthenticate}
                                       isLoading={isLoading}
                                       component={BookingContainer}
                                       restricted={false}/>}/>
            <Route path='/confirm-order/movieId=:movieId/sessionId=:sessionId'
                   element={<RoleRoute isAuthenticate={isAuthenticate} role={UserRole}
                                       setIsAuthenticate={setIsAuthenticate}
                                       isLoading={isLoading}
                                       component={ConfirmBookingPageContainer}
                                       restricted={false}/>}/>
            <Route path='/confirm-order/movieId=:movieId/sessionId=:sessionId'
                   element={<RoleRoute isAuthenticate={isAuthenticate} role={UserRole}
                                       isLoading={isLoading}
                                       setIsAuthenticate={setIsAuthenticate}
                                       component={ConfirmBookingPageContainer}
                                       restricted={false}/>}/>
            <Route path='/profile'
                   element={<PrivateRoute isAuthenticate={isAuthenticate}
                                          isLoading={isLoading}
                                          setIsAuthenticate={setIsAuthenticate}
                                          component={ProfilePageContainer}
                                          restricted={false}/>}/>
            <Route exact path='/dashboard/*'
                   element={<PrivateRoute isAuthenticate={isAuthenticate}
                                          setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                          component={Dashboard} restricted={false}/>}>
                <Route index={true} element={<NotFound/>}/>
                <Route exact path='user-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={AdminRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={UserManagementContainer} restricted={false}/>}/>
                <Route exact path='movie-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={ManagerRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={MovieManagementContainer} restricted={false}/>}/>
                <Route exact path='cinema-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={ManagerRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={CinemaManagementContainer} restricted={false}/>}/>
                <Route exact path='hall-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={ManagerRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={HallManagementContainer} restricted={false}/>}/>
                <Route exact path='additional-service-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={ManagerRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={AdditionalServiceManagementContainer}
                                           restricted={false}/>}/>
                <Route exact path='session-management'
                       element={<RoleRoute isAuthenticate={isAuthenticate} role={ManagerRole}
                                           setIsAuthenticate={setIsAuthenticate} isLoading={isLoading}
                                           component={SessionManagementContainer}
                                           restricted={false}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;