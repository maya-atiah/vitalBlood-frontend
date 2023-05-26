import React, { useEffect, useState } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import '../DonationList/DonationList.css'

const DonationsList = () => {

  
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const token = secureLocalStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:8000/api/donation/getDonationsByUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      setDonations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const acceptDonationRequest = async (donationRequestId, requestId) => {
    const token = secureLocalStorage.getItem("token");

    try {
      const response = await axios.post(
        `http://localhost:8000/api/donation/acceptDonationRequest/${donationRequestId}`,
        {
          requestId,
          status: "accepted",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedRequest = response.data;
      // Update the donations state to reflect the changes
      setDonations((prevDonations) =>
        prevDonations.map((donation) => {
          if (donation._id === donationRequestId) {
            return {
              ...donation,
              request_id: donation.request_id.map((request) => {
                if (request._id === requestId) {
                  return {
                    ...request,
                    status: updatedRequest.status,
                  };
                }
                return request;
              }),
            };
          }
          return donation;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const rejectDonationRequest = async (donationRequestId, requestId) => {
    const token = secureLocalStorage.getItem("token");

    try {
      const response = await axios.post(
        `http://localhost:8000/api/donation/acceptDonationRequest/${donationRequestId}`,
        {
          requestId,
          status: "rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedRequest = response.data;
      // Update the donations state to reflect the changes
      setDonations((prevDonations) =>
        prevDonations.map((donation) => {
          if (donation._id === donationRequestId) {
            return {
              ...donation,
              request_id: donation.request_id.map((request) => {
                if (request._id === requestId) {
                  return {
                    ...request,
                    status: updatedRequest.status,
                  };
                }
                return request;
              }),
            };
          }
          return donation;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="donation-List-container">
     
      {donations.length > 0 ? (
        <table className='donations-table'>
          <thead>
            <tr>
           
              <th>Donor</th>
              <th>Receiver Email</th>
              <th>Receiver Phone</th>
              <th>Receiver Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) =>
              donation.request_id.map((request) => (
                <tr key={request._id}>
                  
                  <td>
                    {request.donor_id.details_id.firstName}{" "}
                    {request.donor_id.details_id.lastName}
                  </td>
                  <td>{request.donor_id.details_id.email}</td>
                  <td>{request.donor_id.details_id.phoneNumber}</td>
                  <td>{request.donor_id.details_id.location}</td>
                  <td>{request.status}</td>
                  <td>
                    {request.status !== "accepted" && (
                      <button
                        className='action-button accept-button'
                        onClick={() =>
                          acceptDonationRequest(donation._id, request._id)
                        }
                      >
                        Accept
                      </button>
                    )}
                    {request.status !== "rejected" && (
                      <button
                        className='action-button reject-button'
                        onClick={() =>
                          rejectDonationRequest(donation._id, request._id)
                        }
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DonationsList;