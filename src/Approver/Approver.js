import './Approver.css';
import greenTick from '../assets/green-tick.svg';
import unTick from '../assets/un-tick.svg';
import moment from 'moment';

const Approver = ({approver}) => {
  const full_name = `${approver.approver.first_name} ${approver.approver.last_name}`
  return (
    <div className="display-flex justify-space-between container">
      <div className="approver-data display-flex">
        <div className="circle"></div>
        <div className="profile-pic" style={{ backgroundImage: `url(${approver.approver.profile_picture})` }}></div>
        <div className="approver-info">
          <div className="display-flex">
            <div className="user-name">{full_name}</div>
            <div className="user-email">({approver.approver.email})</div>
          </div>
          <div className="approved-date">
            {
              approver.status === 'created' ? 
                `Approved ${moment(approver.last_updated_date).format("MMM D, YYYY")}` : 
                `Last notified ${moment(approver.last_notified_time).format("MMM D, YYYY")}`
            }
          </div>
        </div>
      </div>
      <div className="approver-status">
        {
          approver.status === 'created' ? 
            <img className="approver-green" src={greenTick} alt="Green"/> : 
            <img className="approver-green" src={unTick} alt="Green"/>
        }
      </div>
    </div>
  )
}

export default Approver