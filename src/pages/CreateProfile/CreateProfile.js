import React from 'react'
import "./CreateProfile.css"
import {ImArrowUp, ImArrowDown} from 'react-icons/im'
import {BsTrashFill} from 'react-icons/bs'
import AppLayout from '../../layout/AppLayout'

const CreateProfile = () => {
  return (
    <AppLayout>
      <div className='createprofile'>

        <div className="header">
            <h1>Create Your Profile</h1>
            <p>All fields are required</p>
        </div>


        <div className="form">
          <form className='profileForms'>

            <div className="name"></div>
              <label className='profileLabel'>FIRST NAME* </label>
              <input type="text" name="firstname" className='profileInput' />

              <label className='profileLabel'>LAST NAME* </label>
              <input type="text" name="lastname" className='profileInput' />


              <label className='profileLabel'>GENDER*</label> 
              <div className="gender">
          
              <label className='genderLabel'> 
                <input type="checkbox" name="gender" className='genders' />Male
              </label>

              <label className='genderLabel' >
                <input type="checkbox" name="gender"className='genders'  />Female
              </label>
          
              <label className='genderLabel'>
                <input type="checkbox" name="gender" className='genders'  />Other
              </label> 
            </div>


            <label className='profileLabel'>PROFILE PICTURE*</label>
            <div className="upload">

              <button className="select">Select File</button>
              <p>Files must be less than 100 MB. Allowed file types:png, gif, jpg, jpeg.</p>
            </div>


            <label className='profileLabel'>COUNTRY OR STATE*  </label>
            <select >
                <option value="0">-None-</option>
                <option value="1">Nigeria</option>
                <option value="2">Ghana</option>
                <option value="3">South Africa</option>
                <option value="4">Ethiopia</option>
                <option value="5">Ugenda</option>
            </select>


            <label className='profileLabel'>TIMEZONE*  </label>
            <select >
                <option value="0">-None-</option>
                <option value="1">Nigeria</option>
                <option value="2">Ghana</option>
                <option value="3">South Africa</option>
                <option value="4">Ethiopia</option>
                <option value="5">Ugenda</option>
            </select>


            <label className='profileLabel'>CITY*  </label>
            <select >
                <option value="0">-None-</option>
                <option value="1">Nigeria</option>
                <option value="2">Ghana</option>
                <option value="3">South Africa</option>
                <option value="4">Ethiopia</option>
                <option value="5">Ugenda</option>
            </select>


            <label className='profileLabel' style={{margin:20}}>BIOGRAPHICS </label>
            <div className="bio">

              <h2 >Bio* </h2>
              <div className="bio-items">
                <div className='arrow'>
                <ImArrowUp/>
                <ImArrowDown/>
                </div>
                <textarea name="" id="textarea" ></textarea>
                <BsTrashFill />
          
              </div>
            </div>

            <label className='profileLabel' style={{margin:20}}>PAST EVENTS</label>
            <div className="bio">

              <h2 >Videos and photos </h2>
              <div className="bio-items">
                <div className='arrow'>
                <ImArrowUp/>
                <ImArrowDown/>
                </div>
                <textarea name="" id="textarea" ></textarea>
                <BsTrashFill />
          
              </div>
            </div>




            <button id='addnew'>+ ADD NEW</button> <br />

            <input type="submit" value="Done" />
          </form>
        </div>

      </div>
    </AppLayout>
  )
}

export default CreateProfile