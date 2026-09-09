import { useState } from "react"
import './form.css'
import { useNavigate } from "react-router-dom";



 function Form(){

const names = ["amira" , "hager" , "ali"]


const [nameError , setNameError] = useState('')
const [passwordError, setPasswordError] = useState(''); 
const [confirmError, setConfirmError] = useState(''); // جديد!

const[ name ,setName] = useState('')
const[ password ,setPassword] = useState('')
const[ confirm ,setConfirm] = useState('')

const navigate = useNavigate();

const checkMatch = (inputConfirm)=>{
  if(!inputConfirm.trim()){
    setConfirmError('');
    return
  }


  if (inputConfirm !== password) {
    setConfirmError('❌ كلمات المرور غير متطابقة');
  } else {
    setConfirmError('✅ كلمات المرور متطابقة');
  }
  



}
const checkPassword =(inputPassword)=>{
  if (!inputPassword.trim()){
    setPasswordError('');
    return
  }

  const minLength= 5;


  if(inputPassword.length < minLength){
    setPasswordError(`❌ يجب أن يكون ${minLength} أحرف على الأقل`);
  }else{
        setPasswordError(`✅done`);

  }




}

const checkName = (inputName)=>{
if (!inputName.trim()){
  setNameError('');
  return;
}

const isNameTaken = names.includes(inputName.trim());

if (isNameTaken) {
     setNameError('❌ هذا الاسم موجود بالفعل')
  
    }
    else {
      setNameError('✅ الاسم متاح');

}

}

const handleSubmit =(e)=>{
    e.preventDefault();
     if (existingNames.includes(name.trim())) {
      setNameError('❌ لا يمكن التسجيل بهذا الاسم');
      return;
    }
}

    {
return(

     <div className="form-container">
      <h2 className="form-title">Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e)=> checkName(e.target.value)}
            required
          />

          {
            setNameError &&(
    <p className={nameError.includes('✅') ? 'success-message' : 'error-message'}>
                {nameError}
              </p>
            )
          }
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e)=> checkPassword(e.target.value)}
            required
          />

{

  passwordError&& (
    <p className={passwordError.includes('✅') ? 'success-message' : 'error-message'}>

  {passwordError}
 </p>
  )
}
         
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            id="confirm"
            type="password"
            className="form-input"
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            onBlur={(e)=> checkMatch(e.target.value)}
            required
          />

          {confirmError &&
          (
            <p>
              {confirmError}
            </p>
          )}
        </div>

        <button 
        type="submit" 
        onClick={() => navigate('/')}
         className="form-button">
          Sign Up
        </button>
      </form>
    </div>

)


    }
 }

export default Form