import React, { useEffect, useState } from "react";
import "../Volunteers/Volunteers.css";
import LogoImageRequest from "../../assets/images/logoImageRequest.png";
import Apositive from '../../assets/images/apositive.png'
import Opositive from '../../assets/images/oposblood.png'
import ABpositive from '../../assets/images/abpositive.png'
import Bpositive from '../../assets/images/bpositove.png'
import Anegative from '../../assets/images/Anegative.png'
import Bnegative from '../../assets/images/bnegative2.png'
import ABnegative from '../../assets/images/abnegative.png'
import Onegative from '../../assets/images/onegative.png'
import { MdOutlineVolunteerActivism, MdOutlineBloodtype } from "react-icons/md";
import {GoLocation} from 'react-icons/go'
import axios from "axios";
import Loader from "../../Loader/Loader";

const Volunteers = () => {

  const [volunteers, setVolunteers] = useState([]);
   const [loading, setLoading] = useState(true);
  
  const ImageFunction = (blood) => {
    let image;
    if (blood == "A+") {
      image = Apositive;
    } else if (blood == "A-") {
      image = Anegative;
    } else if (blood == "B+") {
      image = Bpositive;
    } else if (blood == "B-") {
      image = Bnegative;
    } else if (blood == "O-") {
      image = Onegative;
    } else if (blood == "O+") {
      image = Opositive;
    } else if (blood == "AB+") {
      image = ABpositive;
    } else if (blood == "AB-") {
      image = ABnegative;
    }
     return <img src={image} />;
  }

  const fetchVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/getAllUsers");
      setVolunteers(res.data.users);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  console.log(volunteers)
  
 useEffect(() => {
   fetchVolunteers();
   

   setTimeout(() => {
     setLoading(false);
   }, 3000);
 }, []);

 if (loading) {
   return <Loader />;
 }

  return (
    <div className='volunnteers-container'>
      <div className='volunteers-title-container '>
        {/* <div className="image-center">

        </div> */}
        <h1>Our Volunteers</h1>
        <h4>Roll up your sleeves and join the movement!</h4>
      </div>
      <div className='table-volunteers'>
        <table>
          <thead>
            <tr>
              <th>
                <MdOutlineVolunteerActivism /> Volunteer
              </th>
              <th>
                <GoLocation /> Location
              </th>
              <th>
                <MdOutlineBloodtype /> Blood Group
              </th>
            </tr>
          </thead>
          <tbody>
            {volunteers &&
              volunteers.map((item) => {
                return (
                  <tr key={item._id}>
                    <td className='td-image'>
                      {" "}
                      {item.details_id.image ? (
                        <img
                          src={item.details_id.image}
                          className='image-user-volunteer'
                        />
                      ) : (
                        <img
                          className='td-image'
                          src={LogoImageRequest}
                          alt='No Image'
                        />
                      )}
                      <div>
                        {item.details_id.firstName} {item.details_id.lastName}
                      </div>
                    </td>
                    <td>{item.details_id.location} </td>
                    <td>{ImageFunction(item.details_id.blood_type)}</td>
                  </tr>
                );
              })}
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteers;
