	
	
	
						function Login()
						{

						var EmailVal=document.getElementById('email').value;
						var PassVal=document.getElementById('password').value;
						test(EmailVal,PassVal);
						}	

						function test(EmailVal,PassVal)
						{

						var dbRef= new Firebase("https://benisonapraisal.firebaseio.com/");
						firebase.auth().signInWithEmailAndPassword(EmailVal, PassVal)
						.then(function(firebaseUser) 
						{
						// Success 
						localStorage.setItem("Email",EmailVal);
						func();
						})
						.catch(function(error) 
						{
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						alert(errorMessage);
						});
						}
						function func()
						{
						window.location.href="Partials/dashboard.html";
						}
						function Forgot_pass()
						{
							
							var auth = firebase.auth();
							var emailAddress = document.getElementById('email').value;
							

							auth.sendPasswordResetEmail(emailAddress).then(function() {
							  // Email sent.
							}, function(error) {
							  console.log("Unable to set the password");
							});
							alert("Email sent to"+emailAddress);
							
						}

						document.getElementById('password').onkeydown = function(event) {
						if (event.keyCode == 13) {
                                Login();
                            }

                            }

