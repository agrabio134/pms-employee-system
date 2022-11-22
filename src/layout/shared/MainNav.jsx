import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '../../App.css' 
import AttendancePage from '../../components/pages/attendance/AttendanceLog'
import EditUser from '../../components/pages/edit/EditUser'
import LeaveApplicationPage from '../../components/pages/Leave/Leave'
import LogPage from '../../components/pages/log/Log'
import './mainNav.css'


const MainNav = () => {
  
  
  return (
    <div className="main-nav-container">
      <BrowserRouter>

      <div className='nav-item'>
          <ul>
            <li><Link to="user/">Log</Link></li>
            <li><Link to="user/attendance">Attendance</Link></li>
            <li><Link to="user/:id/edit">Profile</Link></li>
            {/* <li><a href="" class="nav-item" id="add_leave"><span class='icon-field'><i class="fa fa-plus">	</i></span> New Leave Application</a></li> */}
            <li><Link to="user/leave">New Leave Application</Link></li>

            
            <li><a className='logout' href='http://localhost/api/Emp_logout.php'>Logout</a></li>
          </ul>
        </div>

        <div className='nav-item'>
     
            <Routes>
                <Route path="user/" element={<LogPage />}></Route>
                <Route path="user/attendance" element={<AttendancePage />}></Route>
                <Route path="user/:id/edit" element={<EditUser />}></Route>
                <Route path="user/leave" element={<LeaveApplicationPage />}></Route>
                
            </Routes>
        </div>
          
            
      </BrowserRouter>
      
      
    </div>
  )
}

export default MainNav