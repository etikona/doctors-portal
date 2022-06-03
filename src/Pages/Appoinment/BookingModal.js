import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const {_id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, 'PP')

const handleBooking = event => {
  event.preventDefault();
  const slot = event.target.slot.value;
  console.log(_id,name,slot);
  const booking = {
    treatmentId: _id,
    treatment: name,
    date: formattedDate,
    slot,
    patient :user.email,
    patientName: user.displayName,
    phone: event.target.phone.value
  }
  
        fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          // to close the modal
          if(data.success){
            toast(`Appionment is set ${formattedDate} at ${slot}`)
          }
          else{
            toast.error(`Already have an  appionment on ${data.booking?.date} at ${data.booking?.slot}`)
          }
          setTreatment(null);
        } )

  
}

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box justify-items-center">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-10">Cavity Protection</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1'>

            <input type="text" disabled value={format(date, 'PP')} className="input mb-4 bg-base-200 w-full max-w-xs" />
            <select name='slot' className="select select-bordered w-full max-w-xs mb-4"><font></font>
       {
         slots.map(slot => <option value={slot}>{slot}</option>)
       }
</select>
            <input type="text" name='name' placeholder="your name" className="input mb-4 input-bordered input-slate-100 w-full max-w-xs" />
            <input type="text" name='Email' placeholder="Email Address" className="input mb-4 input-bordered input-slate-100 w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone number" className="input mb-4 input-bordered input-slate-100 w-full max-w-xs" />
          <input type="submit" className='btn w-full text-white' value="SUBMIT" />
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default BookingModal;