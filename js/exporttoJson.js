
var push_key=new Array();

function CallExportIt()
{
var emailId = document.getElementById('Email').value;

var dbref =firebase.database().ref("EmployeeDB/EInfo").orderByChild("Email").equalTo(emailId);


     dbref
        .once("value")
        .then
        (
            function (snapshot) {

                snapshot.forEach
                (
                    function (childsnapshot) {
                    var data = childsnapshot.val();
					Eidval = data.EID;
					var Name = data.Name;
			        Ikey = childsnapshot.key; //found key of the employee
					var dsRef = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+Ikey);
					dsRef
					.once("value")
					.then
					(
						function (snapshot) {

						function axel()
						{

                        for(var i=0;i<push_key.length;i++)
                        {

                        console.log("Values in Array:"+push_key[i]);


                        }

    					}
                        return new Promise(function(resolve,reject){
						snapshot.forEach
						(
							function (childsnapshot) {
							var data = childsnapshot.val();
    						var rptId = data.reportingID;
    						push_key.push(rptId);
                           // recurse(push_key);
                            var dxRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+rptId);
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
                                                                var ReportId=data.reportingID;
                                                                push_key.push(ReportId);
                                                                //console.log("Caught Report ID-------"+ReportId);
                            								   }
                            						           );
                            			                }
                            		                );

    					});
						resolve(axel());
					});
				}
				);
			}
			);
  });
}

	function recurse(EmpKey)
				{
				//console.log("In Recurse:"+EmpKey);
				var dxRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+EmpKey);
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
                                    var ReportId=data.reportingID;
                                    push_key.push(ReportId);
                                    //console.log("Caught Report ID-------"+ReportId);
								   }
						           );
			                }
		                );
                }