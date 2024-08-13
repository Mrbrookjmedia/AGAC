import React, { useEffect } from "react";
// import "../styles/bootstrap/dist/css/bootstrap.min.css";
// import "../styles/font-awesome/css/font-awesome.min.css";
import "../styles/Login.css";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Login button clicked");
    };
    const handleGoogleSignInClick = () => {
        const googleSignInDiv = document.getElementsByClassName('googleSignInDiv')[0];
        if (googleSignInDiv) {
            googleSignInDiv.click();  // Simulate click on Google Sign-In button
        }
    };

    const handleCredentialResponse = (response) => {
        // console.log('Encoded JWT ID token: ' + response.credential);

        // Decode the JWT
        const decoded = decoder(response.credential);
        setUser(decoded);
        // console.log('Decoded:', decoded);

        const logintime = converttodatetime(decoded.iat);
    };

    useEffect(() => {
        // Function to initialize Google Sign-In
        const initializeGoogleSignIn = () => {
            window.google.accounts.id.initialize({
                client_id: '835859117984-tjdbra27sv18gbls6vgbi225vmi3bvpt.apps.googleusercontent.com',
                callback: handleCredentialResponse,
            });

            const googleSignInDiv = document.getElementsByClassName('googleSignInDiv')[0];
            if (googleSignInDiv) {
                window.google.accounts.id.renderButton(googleSignInDiv, { theme: 'outline', size: 'large' });
            } else {
                console.error('Google Sign-In div not found');
            }
        };

        // Check if the Google Sign-In script is loaded
        if (window.google) {
            initializeGoogleSignIn();
        } else {
            // Add an event listener to initialize after the script is loaded
            window.addEventListener('google-loaded', initializeGoogleSignIn);
        }

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('google-loaded', initializeGoogleSignIn);
        };
    }, [handleCredentialResponse]);

    return (
        <section className="_form_05">
            <div className="container">
                <div className="row flex flex-col">
                    <div className="col-12">
                        <div className="_form-05-box">
                            <div className="row" style={{ padding: 0, gap: "5.37rem" }}>
                                <div className="col-sm-5 _lk_nb">
                                    <div className="form-05-box-a">
                                        <div className="_form_05_logo">
                                            <h2>Welcome Back !!</h2>
                                            <p>Login using google to get quick access</p>
                                            <div className="flex" style={{ justifyContent: "center", padding: 40 }}>
                                                <div className='googleSignInDiv' onClick={handleGoogleSignInClick} style={{ justifySelf: "center" }}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-7 _nb-pl">
                                    <div className="_mn_df">
                                        <div className="main-head">
                                            <h2>Login to your account</h2>
                                        </div>

                                        <form onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    required
                                                    aria-required="true"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    required
                                                    aria-required="true"
                                                />
                                            </div>

                                            <div className="checkbox form-group" style={{justifyContent:"center"}}>
                                                {/* <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div> */}
                                                <a href="#">Forgot Password</a>
                                            </div>

                                            <div className="form-group">

                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
