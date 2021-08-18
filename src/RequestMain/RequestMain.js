
import Approvers from '../Approvers/Approvers';
import RequestData from '../RequestData/RequestData';
import './RequestMain.css';

const RequestMain = ({data}) => {
  return (
    <div className="request-main">
      <div className="request-header">
        <img className="request-logo" src={data.service.logo} alt="Logo" />
        <div className="header-title">Request for {data.service.name}</div>
      </div>

      <div className="display-flex-block">
        <div className="first-col">
          <div className="requester-container">
            <RequestData data={data}/>
          </div>

          <div className="info-holder">
            <div className="red-text">
            Your company is already paying for Amazon Web Service on a recurring basis.
            </div>
            <div className="info-text">
              (1 instance owneed by John Smith)
            </div>
          </div>

          <div className="footer hide-small">
            <button className="button button-primary">Approve</button>
            <button className="button button-secondary">Deny</button>
          </div>
        </div>

        <div className="second-col">
          <Approvers approvers={data.approvers} ></Approvers>
        </div>

        <div className="footer hide-large">
          <button className="button button-primary">Approve</button>
          <button className="button button-secondary">Deny</button>
        </div>
      </div>
    </div>

  )
}

export default RequestMain