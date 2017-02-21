
<html>
<head>
</head>
<body>



		<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>
		<script src="https://cdn.firebase.com/v0/firebase-simple-login.js"></script>
		<script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
		<script>
		  // Initialize Firebase
		 var config = {
						apiKey: "AIzaSyDrW6XRPqaLSLvy3gPWTtxkKazrmo8LlTI",
						authDomain: "apraisalstaging.firebaseapp.com",
						databaseURL: "https://apraisalstaging.firebaseio.com",
						storageBucket: "apraisalstaging.appspot.com",
						messagingSenderId: "376417868003"
					  };
		  firebase.initializeApp(config);






function graph() {
   
      
		
						var namekey=localStorage.getItem("VName");
						var dbref=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo").orderByKey();
					
						var result= dbref
						.once("value")
						.then
							(
							function(snapshot)
								{
									snapshot.forEach
									(
										function(childsnapshot)
										{
										 var data = childsnapshot.val();
										 var Nameval=data.Name;
											 if(Nameval==namekey)
											 {
												console.log("Success");
												Ikey=childsnapshot.key();
											 
												 var dxRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EApraise/"+Ikey);	
												 
												  dxRef
													.once("value")
														.then
														(
															function(snapshot)
															{
																		
																snapshot.forEach
																(
																		function(childsnapshot)
																		{
																		
																			var data=childsnapshot.val();
																			var Rtdate=data.Dateval;
																			DateKey.push(Rtdate);
																			call(DateKey);
																			
																		}
																	
																);	
															}
														);
											 }		
										
										}			
											 
									);		 
										
									
								}
							);
																	
																
			}
			
			result.on('value',function(data){
				console.log(data);
			}
																
																
		</body>
		<html>
