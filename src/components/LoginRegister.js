import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginRegister() {

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // Default selected option

  const handleLogin = () => {
    // Your form submission logic here

    // After successful login, navigate to the "Deal" route
    navigate('/deal');
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === 'Restraunt/ Shop') {
      // Perform actions for "Restraunt Owner/ Retailer" option
      console.log('Selected option: Restraunt Owner/ Retailer');
      // Add your logic here
    } else if (selectedOption === 'NGO') {
      // Perform actions for "NGO" option
      console.log('Selected option: NGO');
      // Add your logic here
    }
  };

  const isButtonDisabled = !selectedOption; // Button is disabled if no option is selected

  return (

    <>
{/*---------------------------------1st Modal------------------------------------------------------------------------------------------*/}
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel">Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
{/*---------------------------------login form------------------------------------------------------------------------------------------*/}
        <form>
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input type="email" className="form-control" id="loginEmail" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
              </div>
              <div className="text-center"> 
                <button type="submit" className="btn btn-primary mt-2 custom-button-width" onClick={handleLogin}>Login</button>
              </div>
        </form>
        </div>
        <div className="modal-footer">
            <div className='container text-center'>
                <p>
                    New User?
                </p>
            </div>
            <div className='container text-center'>
                <button className="btn btn-primary custom-button-width " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Register here</button>           
            </div>
        </div>
      </div>
    </div>
  </div>
{/*----------------------------------------------- 2nd Modal-------------------------------------------------------------------------- */}
  <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel2">Choose an Option</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
{/*----------------------------------------------radio button---------------------------------------------------------------------------*/}
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="restrauntOption" value="Restraunt/ Shop" checked={selectedOption === 'Restraunt/ Shop'} onChange={handleOptionChange} />
            <label class="form-check-label" for="flexRadioDefault1">
              Restraunt Owner/ Retailer
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="ngoOption" value="NGO" checked={selectedOption === 'NGO'} onChange={handleOptionChange}/>
            <label className="form-check-label" for="flexRadioDefault2">
              NGO
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary ml-0" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Login</button>
          <button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" disabled={isButtonDisabled}>Next</button>
        </div>
      </div>
    </div>
  </div>
{/*----------------------------------------------- 3rd Modal----------------------------------------------------------------------- */}
  <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel3">Register [{selectedOption}]</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
{/*-----------------------------------------------registration form---------------------------------------------------------------- */}
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="registerFirstName">First Name</label>
                    <input type="text" className="form-control" id="registerFirstName" placeholder="First Name" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="registerLastName">Last Name</label>
                    <input type="text" className="form-control" id="registerLastName" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="registerShopName">{selectedOption} Name</label>
                <input type="text" className="form-control" id="registerShopName" placeholder="Shop Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="registerShopAddress">{selectedOption} Address</label>
                <input type="text" className="form-control" id="registerShopAddress" placeholder="Address"/>
              </div>
              <div className="form-group">
                <label htmlFor="registerContact">Contact. no</label>
                <input type="tel" className="form-control" id="registerContact" placeholder="contact number" maxLength="10" pattern="[0-9]{10}" />
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail">Email</label>
                <input type="email" className="form-control" id="registerEmail" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
              </div>
              <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  I agree with terms and conditions.
                </label>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-success mt-4 custom-button-width">Register</button>
              </div>           
            </form>
        </div>
        <div className="modal-footer">
          <div className='container text-center'>
           <button className="btn btn-primary ml-0 custom-button-width" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Login</button>
          </div>
        </div>   
      </div>
    </div>
  </div>
  <a className="btn custom-btn-color" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login or Register</a>
    
  </>
  )
}
