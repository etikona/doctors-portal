
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({ date, setDate }) => {

  return (
    <div className="hero min-h-screen "><font></font>
      <div className="hero-content flex-col lg:flex-row-reverse"><font></font>
        <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" /><font></font>
        <div><font></font>
          <DayPicker
            mode="single"
            selected={date}
            onDayClick={setDate}
          />
        </div><font></font>
      </div><font></font>
    </div>
  );
};

export default AppoinmentBanner;