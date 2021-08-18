import Approver from '../Approver/Approver';
import './Approvers.css'

const Approvers = ({approvers}) => {
  console.log(approvers)
  const approvedReports = approvers.filter((approver) => {
    return approver.status === 'created' ;
  })

  const pendingReports = approvers.filter((approver) => {
    return approver.status === 'accepted';
  })

  return (
    <div className="approvers-container">
      <div className="approved-block">
        <div className="heading">Approved</div>
        {approvedReports.map(approvedReport => {
          return <Approver key={approvedReport.approver.email} approver={approvedReport} />
        })}
      </div>

      <div className="pending-block">
        <div className="heading">Pending</div>
        {pendingReports.map(approvedReport => {
          return <Approver key={approvedReport.approver.email} approver={approvedReport} />
        })}
      </div>

    </div>
  )
}

export default Approvers;