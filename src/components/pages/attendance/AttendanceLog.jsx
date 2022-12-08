import './attendance.css'
import '../../../App.css'
const AttendancePage = () => {
    return (
        <div className='main-container'>
            <div className="attendance-container">
         {/* <h1>AttendancePage</h1> */}
         <iframe src="http://localhost/api/employee-system/emp_att.php" className="att_frame" scrolling='y'></iframe>

        </div>
        </div>
    )
}
export default AttendancePage