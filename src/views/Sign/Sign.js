import"./Sign.css";
export default function Sign (){
return(

    <>
    
    <div className="sign-main-container">
     <div className="sign-container">
      <p className="sign-heading-1">Hello Again</p>
      <p className="sign-heading-2">Enter your credentials to acces your account.</p>
      <input type="email" className="sign-input" placeholder="Enter your email">
      </input>

      <input type="password" className="sign-input" placeholder="Enter your password">
      </input>
       <a className="sign-btn" href="../../components/Login/Login.js">SIGNUP</a> 

     </div>

</div>
    </>
)
}