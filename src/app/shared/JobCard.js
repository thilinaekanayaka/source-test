import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGbp, faMapMarkerAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export default function JobCard(props) {
  return (
    <div style={{
      backgroundColor: props.backgroundColor,
      maxWidth: 300,
      borderRadius: 25,
      color: props.textColor,
      padding: 30
    }}>
      <p style={{
        color: '#084ea3',
        backgroundColor: 'white',
        maxWidth: 85,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <FontAwesomeIcon icon={faCode} style={{ height: 15, width: 15, padding: 5 }} />
        Python
      </p>
      <p style={{ fontSize: 25, fontWeight: 600 }}>Software Engineer</p>
      <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ height: 16, width: 16, padding: '0 10px 0 0' }} />
        London
      </p>
      <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faMoneyBill} style={{ height: 16, width: 16, padding: '0 10px 0 0' }} />
        <FontAwesomeIcon icon={faGbp} style={{ height: 12, width: 12 }} />
        65,000
      </p>
      <p style={{ paddingTop: 10 }}>Lorem ipsum dolor sit amet, sed do eiusmod ut labore et dolore magna aliqua.</p>
      <button style={{
        width: '100%',
        border: 'none',
        padding: 15,
        color: '#084ea3',
        borderRadius: 25,
        fontSize: 15,
        cursor: 'pointer'
      }}>
        View this job
      </button>
      <p style={{fontSize: 12, fontWeight: 200}}>Posted on 29/06/2023</p>
    </div>
  )
}
