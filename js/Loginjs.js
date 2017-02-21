	
	
	
						function Login()
						{

						var EmailVal=document.getElementById('email').value;
						var PassVal=document.getElementById('password').value;
						test(EmailVal,PassVal);
						}	

						function test(EmailVal,PassVal)
						{

						var dbRef= new Firebase("https://apraisalstaging.firebaseio.com/");
						firebase.auth().signInWithEmailAndPassword(EmailVal, PassVal)
						.then(function(firebaseUser) 
						{
						// Success 
						console.log("seccess");
						localStorage.setItem("Email",EmailVal);
						func();
						})
						.catch(function(error) 
						{
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						console.log('Unable to Login ,Check Login details and try again!');
						console.log(errorMessage);
						});
						}
						function func()
						{
						window.location.href="Partials/dashboard.html";
						}