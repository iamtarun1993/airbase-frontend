import './RequestData.css';
import excel from '../assets/excel.svg';

const RequestData = ({data}) => {
  return (
    <div>
      <div className="row-container">
        <div className="row-title">Requested by</div>
        <div className="row-data">
          <img className="requester-profile-pic" src={data.requested_by.profile_picture} alt="" />
          <span className="requester-name">
            {data.requested_by.first_name}{" "}
            {data.requested_by.last_name}
          </span>
        </div>
      </div>

      <div className="row-container">
        <div className="row-title">Cost</div>
        <div className="row-data">${data.cost}</div>
      </div>

      <div className="row-container-same-line hide-small">
        <div class="display-flex">
          <div className="row-container-1">
            <div className="row-title">Renewal Frequency</div>
            <div className="row-data row-data-1">{data.renewal_frequency_in_months} Month</div>
          </div>

          <div className="row-container-1">
            <div className="row-title">Annual Cost</div>
            <div className="row-data">${data.cost * 12}</div>
          </div>
        </div>
      </div>
      
      <div className="row-container hide-large">
        <div className="row-title">Renewal Frequency</div>
        <div className="row-data">{data.renewal_frequency_in_months} Month</div>
      </div>

      <div className="row-container hide-large">
        <div className="row-title">Annual Cost</div>
        <div className="row-data">${data.cost * 12}</div>
      </div>

      <div className="row-container">
        <div className="row-title">Expense Account</div>
        <div className="row-data">{data.expense_account}</div>
      </div>

      <div className="row-container hide-small">
        <div className="row-title">File</div>
        <div className="row-data">
          <img src={excel} alt="Excel" height="16px" />
          <span className="requester-name">Receipt-Github-Nov.xls</span>
        </div>
      </div>

      <div className="row-container hide-small">
        <div className="row-title">Description</div>
        <div className="row-data">{data.service.description}</div>
      </div>

      <div className="row-container-2 hide-large">
        <div className="row-title">Description</div>
        <div className="row-data row-data-2">{data.service.description}</div>
      </div>
    </div>
  )

}

export default RequestData