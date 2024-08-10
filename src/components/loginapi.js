import { GoogleLogin } from "@react-oauth/google";

const clientId = "878932012742-8bdtofe9imcer9nojlprsl99rim6g2df.apps.googleusercontent.com";

function Login() {

    const onSuccess = (response) => {
        console.log(response);
    };  

    const onFailure = (response) => {
        console.log(response);
    };

  return (
    <div className="App">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  );
}

export default Login;