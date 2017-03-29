var labels = [];
var Name_display;
var Name_Pass_chart;

 var First_FriDate=new Date();
 var Second_FriDate=new Date();
 var Third_FriDate=new Date();
 var Fourth_FriDate=new Date();
 var avg_value=new Array;

var First_flag=false;
var Second_flag= false;
var Third_flag= false;
var Fourth_flag= false;
var cost_labels=new Array();
var current_key;
var push_just_dates=new Array;
var push_ratings=new Array;
var datasets = [];
var push_key=new Array();
var arraydate=new Array();
var ctx=new Array();
var count=0;
var call_chart=0;
var LineChartData;
var count_g=0;
var sel = document.createElement('select');
var opt = document.createElement('option');
var opt1 = document.createElement('option');
var opt2 = document.createElement('option');
var opt3 = document.createElement('option');
var col_dates=new Array;
var setArray = new Array;
lineChartData = {}; //declare an object
lineChartData.labels = []; //add 'labels' element to object (X axis)
lineChartData.datasets = []; //add 'datasets' array element to object
y = [];
lineChartData.datasets.push({});
var Table_Pull = document.createElement("TABLE");
//Table_Pull.id = 'block';
var header = Table_Pull.createTHead();
var row = header.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "Date";
var cell = row.insertCell(1);
cell.innerHTML = "Attitude";
var cell = row.insertCell(2);
cell.innerHTML = "DeadlineMet";
var cell = row.insertCell(3);
cell.innerHTML = "Discippline";
var cell = row.insertCell(4);
cell.innerHTML = "CustomerFocus";
var cell = row.insertCell(5);
cell.innerHTML = "Quality";
var cell = row.insertCell(6);
cell.innerHTML = "Overall";
var e = document.getElementById('circularG');
var eg =  document.getElementById('circularG2');
var call_count=0;

 var currentdate=new Date();
                        var toggle=currentdate.getDay();
                        var lastFri=new Date();
                        var seal1;
                        var seal2;
                        var one_day=1000*60*60*24;;
                        var difference_ms;
                        var Diffval;
                        					switch(toggle)
                        					{
                        					case 1:
                        					First_FriDate.setDate(currentdate.getDate()-3);//first friday
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {

                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);

                        					 }
                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                        					 {

                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 2:
                        					First_FriDate.setDate(currentdate.getDate()-4);
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);
                        					 }
                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                        					 {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 3:
                        					First_FriDate.setDate(currentdate.getDate()-5);
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);
                        					 }

                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                        					 {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 4:
                        					First_FriDate.setDate(currentdate.getDate()-6);
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                           					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);
                        					 }
                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {

                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);

                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                                             {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 5:
                        					First_FriDate.setDate(currentdate.getDate()-7);
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);
                        					 }
                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                        					 {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 6:
                        					First_FriDate.setDate(currentdate.getDate()-8);
                        					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					// Compare between 2nd and 3rd fridays
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Second_FriDate.setDate(First_FriDate.getDate()-38);
                        					 }
                        					 seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {
                        					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
                        					 }
                        					// Compare between 4th and 3rd fridays
                        					  seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7)
                        					 {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                        					 }
                        					break;
                        					case 0:
                        					 First_FriDate.setDate(currentdate.getDate()-9);
                        					 Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
                        					 Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
                        				   	 Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
                        					 seal1 = First_FriDate.getTime();
                        					 seal2 = Second_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					  if(Diffval!=7 && Diffval!=-7 )
                        					 {

                        					  Second_FriDate.setDate(First_FriDate.getDate()-35);

                        					 }
                        				     seal1 = Second_FriDate.getTime();
                        					 seal2 = Third_FriDate.getTime();
                        					 difference_ms = seal1 - seal2;
                        					 Diffval=Math.round(difference_ms/one_day);
                        					 if(Diffval!=7 && Diffval!=-7 )
                        					 {

                        					  Third_FriDate.setDate(Second_FriDate.getDate()-35);

                        					 }

                        				      seal1 = Third_FriDate.getTime();
                        					  seal2 = Fourth_FriDate.getTime();
                        					  one_day=1000*60*60*24;
                        					  difference_ms = seal2 - seal1;
                        					  Diffval=Math.round(difference_ms/one_day);
                        					   if(Diffval!=7 && Diffval!=-7)
                        					 {
                        					  Fourth_FriDate.setDate(Third_FriDate.getDate()-35);
                        					 }
                        					break;
                        				}




      First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
      Second_FriDate =  Second_FriDate.getDate()+'/'+(Second_FriDate.getMonth()+1) +'/'+ Second_FriDate.getFullYear();
      Third_FriDate =  Third_FriDate.getDate()+'/'+(Third_FriDate.getMonth()+1) +'/'+ Third_FriDate.getFullYear();
      Fourth_FriDate =  Fourth_FriDate.getDate()+'/'+(Fourth_FriDate.getMonth()+1) +'/'+ Fourth_FriDate.getFullYear();
        cost_labels.push(Fourth_FriDate);
                          cost_labels.push(Third_FriDate);
                          cost_labels.push(Second_FriDate);
                          cost_labels.push(First_FriDate);
      console.log(First_FriDate+":"+Second_FriDate+":"+Third_FriDate+":"+Fourth_FriDate);
       window.onload = function()
				{



				    //document.getElementById("loaderspinner").style.visibility = "visible";
				    firebase.auth().onAuthStateChanged(function(user) {
                      if (user) {
                        // User is signed in.
                         Call();
                      } else {
                        // No user is signed in.
                        window.location.href="../index.html";
                      }
                    });


				}
function callName()
{
	var login=localStorage.getItem("Email");
	document.write(login);
}

function callLogout()
{
  firebase.auth().signOut().then(function() {
  alert("Do you wish to Log out");
  window.location.href="../index.html";
},
function(error) {
 alert("Unable to logout");
});
}
	//Call() finds the Internal Key of employees reporting to the logged in employee(does not find nested reporting employees)

function Call()
 {
        var extvar;
        //e.style.display = 'block';
        var Name_col = new Array;
        var login = localStorage.getItem("Email");
        var dbref =firebase.database().ref("EmployeeDB/EInfo").orderByChild("Email").equalTo(login);
        // new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo").orderByKey();

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
					var Admin = data.Admin;
					Name_col.push(data.Name);
					Edit_tabel(Admin);
					localStorage.setItem("Nameval", Name);
					Ikey = childsnapshot.key; //found key of the employee
					var dsRef = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/" + Ikey);
					dsRef
					.once("value")
					.then
					(
						function (snapshot) {
						var data = snapshot.val();
						function axel()
						{
						get_Names(push_key);
						console.log("amount of records:"+call_count);
						console.log("Length of Average Array is :"+avg_value.length);
						for(var i=0;i<avg_value.length;i++)
						{
						 console.log("value is avg Array in call back --------------)))"+avg_value[i]);
						}
    					}
                        return new Promise(function(resolve,reject){
						snapshot.forEach
						(
							function (childsnapshot) {
							var data = childsnapshot.val();
    						var rptId = data.reportingID;
    						push_key.push(rptId);
    						call_count=call_count+1;
    						get_Notifications(rptId);
    						//recurse(rptId);
    					});
						resolve(axel());
					});
				}
				);
			}
			);
  });
}


    function get_Notifications(push_key)
    {
        console.log("In get notification ------------------------------------------------------------");
        var Name_local;
        var dRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_key+"/Name");
        var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_key+"/Name";
        dRef
            .once("value")
                .then
                (
                function(snapshot) {
                      Name_local=snapshot.val();
                                    }
                );

var flag=0;
var date_val=new Array();
var rep_date=new Array();
var O_ratings=new Array();
var trHTML = '';
var a = document.createElement('a');
var Name;
var week_count=0;
var rating_avg=0;
var calc_avg=0;

var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EdateApraise/"+push_key;
var xdiv=document.getElementById("shownotif");
var dRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+push_key);
dRef
    .once("value")
        .then
        (
        function(snapshot) {
              function myfunction()
                 {
                for(i=0;i<date_val.length;i++)
                {
                    if(First_FriDate==date_val[i])
                        {
                            flag=1;
                        }
                }

                    if(flag==0)
                    {
                    var br = document.createElement("br");
                    var linkText = document.createTextNode(' Rating not entered for '+Name_local+' for the week '+First_FriDate);
					var icon = document.createElement("span");
                    icon.className ="fa fa-warning text-yellow";
                    a.appendChild(icon);
                    a.appendChild(linkText);
                    a.appendChild(br);
                    a.href ="#";
                    a.onclick = function() { CallRating(Name_local); }
                    console.log("please Enter rating for "+ Name_local +" for the date "+  First_FriDate);
                    xdiv.append(a);


                    }
                    calc_avg =((rating_avg)/week_count);
                    if(isNaN(calc_avg))
                    {
                    calc_avg = null;
                    }

                    console.log("After the change avg is :"+calc_avg);
                    var dwriteRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_key);
                    dwriteRef.update({
                       AvgRating:calc_avg
                       }
                       );

                       calc_avg=0;


                    console.log("Average calculated:------------------------------------------------->----------:>>>>"+calc_avg);
                    avg_value.push(calc_avg);
                    for(var i=0;i<avg_value.length;i++)
                    {
                    console.log("pushed to average array value is :"+ avg_value[i]);
                    }
                    return;
                }
                	return new Promise(function(resolve,reject){
                       snapshot.forEach
                        (
                            function(childsnapshot)
                            {
                                var data=childsnapshot.val();
                                week_count=week_count+1;
                                console.log("Week count------------------------------->"+week_count);
                                rating_avg=rating_avg+data.Ovaerll;
                                console.log("Avearge rating----------------------------->"+rating_avg);
                               // console.log(data);
                                var Apdate=data.Dateval;
                                date_val.push(Apdate);
                                rep_date.push(data.Dateval);
                                O_ratings.push(data.Ovaerll);
                            }

                        );
                    resolve(myfunction());
                    }
                    )
                    }
                )
    }


   function get_Names(pushed_keys)
    {
        var data_rating=new Array;
        var count=0;

        console.log("In getNames()------------------------length of the average vlaue array is :------------------->>>>"+avg_value.length);
        for(var i=0;i<pushed_keys.length;i++)
        {
                    console.log("Average in get names() is :------------------------>"+avg_value[i]);
                    recurse(pushed_keys[i]);
                    var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+pushed_keys[i]);
					var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+pushed_keys[i];
					console.log("Rel-----:"+dex);
                    dbref
					.once("value")
					.then
						(
							function(snapshot)
							{
	                            				console.log("success");
												var data=snapshot.val();
											    //console.log("from get_Names()::"+data);
												var Name=data.Name;
												console.log("..........Name from the get_Names():"+Name);
												var trHTML = '';
												trHTML += "<tr><td>"  +data.Name +"</td><td>"+data.EID+ "</td><td>" +data.Designation+ "</td><td>" +data.AvgRating+ "</td><td>" +data.ReportManager+'</td><td><div class=view><ul><li><a href=# onclick="ViewRatings(\''+Name+'\')"><i class="fa fa-eye" aria-hidden=true></i>View</a></li><li><a href=# onclick="CallRating(\''+Name+'\')"><i class="fa fa-plus" aria-hidden=true></i>Add</a></li></ul></div></td></tr>';
												$('#location').append(trHTML);
												document.getElementById("loaderspinner").style.visibility = "hidden";
												//e.style.display = 'none';
							}
						)
		}


        for(var i=0;i<pushed_keys.length;i++)
         {
         var graph_count=0;
         var c_count=0;
         is_child=false;

            var dRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+pushed_keys[i]);
            dRef
                .once("value")
                    .then
                        (
                         function(snapshot)
                            {
                                graph_count=graph_count+1;

                                First_flag=true;
                                Second_flag=true;
                                Third_flag=true;
                                Fourth_flag=true;

                                function call_back()
                                {
                                count=0;
                                if(c_count==0)
                                {
                                Name_display="";
                                }
                                if(is_child==true)
                                {

                                if(First_flag==true)
                                {
                                  if(push_ratings.length<0)
                                  {

                                  push_ratings.push(null);
                                  }
                                  else
                                  {
                                  push_ratings.splice(3,0,null);
                                  }
                                }
                                if(Second_flag==true)
                                {
                                if(push_ratings.length<0)
                                 {
                                  push_ratings.push(null);
                                 }
                                 else
                                 {
                                push_ratings.splice(2,0,null);
                                 }
                                }
                                if(Third_flag==true)
                                {
                                if(push_ratings.length<0)
                                {
                                  push_ratings.push(null);
                                }
                                else
                                {
                                push_ratings.splice(1,0,null);
                                }
                                }
                                if(Fourth_flag==true)
                                {
                                if(push_ratings.length<0)
                                {
                                push_ratings.push(null);
                                }
                                else
                                {
                                push_ratings.splice(0,0,null);
                                }
                                }

                                call_set_chart(push_just_dates,push_ratings,Name_display);
                                }
                                is_child=false;
                                push_ratings.length = 0;
                                console.log("graph count:"+graph_count);
                                if(graph_count==0)
                                {
                                draw_graph();
                                }
                                else
                                {
                                if(graph_count==pushed_keys.length)
                                {
                                  draw_graph();
                                }
                                }
                                 Name_display="";


                                }

                                return new Promise(function(resolve,reject){
                                snapshot.forEach
                                (
                                    function(childsnapshot)
                                     {
                                       c_count++;
                                       is_child=true;
                                       Name_display="";
                                       var data=childsnapshot.val();
                                       console.log("Object Data:"+data);
                                       Name_display=data.Name;
                                       cr_date=data.Dateval;
                                       console.log("---------------------");
                                       console.log("Name:"+Name_display);
                                       console.log("Encountered Date:"+cr_date);

                                       push_just_dates.push(data.Dateval);
                                       //push_ratings.push(data.Ovaerll);
                                       data_rating[count]=data.Ovaerll;
                                       count++;
                                                    if(Fourth_FriDate ==cr_date )
                                                    {
                                                         push_ratings.push(data.Ovaerll);
                                                         Fourth_flag=false;

                                                    }
                                                    if(Third_FriDate== cr_date)
                                                    {
                                                         push_ratings.push(data.Ovaerll);
                                                         Third_flag=false;
                                                    }
                                                    if(Second_FriDate == cr_date)
                                                    {

                                                          push_ratings.push(data.Ovaerll);
                                                          Second_flag=false;
                                                    }
                                                    if(First_FriDate== cr_date)
                                                    {

                                                            push_ratings.push(data.Ovaerll);
                                                            First_flag=false;

                                                    }

                                    }
                                 );
                                 resolve(call_back());
                                 }
                                 );
                          }
         );

        }
    }

  function call_set_chart(set_dates,set_ratings,Name_Pass_chart,p_key)
  {

        // alert("called in call_set_chart");
        //var data;
         console.log("called in set Chart:")
         var pushed_keys=p_key;
         var labels_new=new Array;
         var data_overall=new Array;
         for(var i=0;i<set_dates.length;i++)
         {
          labels.push(set_dates[i]);
         }
         for(var i=0;i<set_ratings.length;i++)
         {
           data_overall[i]=set_ratings[i];
         }

        var dataset =
             {
                 label:Name_Pass_chart,
                 borderColor:getRandomColor(),
                 fill: false,
                 data : data_overall
             }

        datasets.push(dataset);

        //var obj=JSON.stringify(datasets);
      //  console.log(obj);

}
setTimeout(function()
{
//var obj=JSON.stringify(datasets);
//console.log("The json:"+obj);

},
4000);
function draw_graph(){

  console.log("called draw graph --------------------------------------");
   var flag=0;
   var Fix_labels=new Array();
  // e.style.display = 'none';
   for(i=0;i<labels.length;i++)
   {
     for(var j=0;j<Fix_labels.length;j++)
     {
        if(labels[i]==Fix_labels[j])
        flag=1;
     }
         if(flag==0)
         {
          Fix_labels.push(labels[i]);
         }
        else
        {
        flag=0;
        }
  }

           // str = JSON.stringify(datasets, null, 4); // (Optional) beautiful indented output.
           // console.log("...................///"+str);
             var barChartData = {
             type:'line',
             data: {
                 labels : cost_labels,
                 datasets:datasets
             }};
             var ctx = document.getElementById("canvas").getContext("2d");//get the chart object
             window.myLine = new Chart(ctx, barChartData);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function create_final_graph()
{
                var barChartData = {
                labels : labels,
                datasets : datasets
            };
            var ctx = document.getElementById("canvas").getContext("2d");//get the chart object
            window.myLine = new Chart(ctx, barChartData);
}



	function get_Name(rptID)
	{
		var Name;
		var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+rptID+"/Name").orderByKey();
		dbref
		.once("value")
			.then
				(
					function(snapshot)
					{
							var data = snapshot.val();
							populate(data,rptID);

					}
				);
	}

//recurse() finds out if there is a nested reporting structure viz Emp1 reports to Emp2 and Emp3 to Emp2,it finds keys of the nested employee and sends to populate

		function recurse(EmpKey)
				{
				console.log("In Recurse:"+EmpKey);
				var dxRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport");
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

									Ikey=childsnapshot.key();
									if(Ikey==EmpKey)
									{
									console.log("Success");
									var d2sRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+EmpKey);
									ref=("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+EmpKey);
									console.log(ref);
									d2sRef
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
																		console.log("Caught Report ID-------"+ReportId);
																		get_Notifications(ReportId);
																		populate(ReportId);

																	}
															    );
												}
											);

								}

								else
									{

									return;

									}
							}
						);
			}
		);
	}

//populate() Fills the table with data , takes the Employee key as a parameter


				function populate(empID)
				{
					var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo").orderByKey();
					dbref
					.once("value")
					.then
						(
							function(snapshot)
							{
							   function Myfun()
							   {
								
							  }
							   return new Promise(function(resolve,reject){
								snapshot.forEach
								(
									function(childsnapshot)
									{
											Ikey=childsnapshot.key();
											if(empID==Ikey)
											{
												console.log("success");
												
												var data=childsnapshot.val();
												var Name=data.Name;
												var average_value=data.AvgRating;
												if(typeof(average_value)==="undefined")
												{
												    average_value="Unrated";
												}
												console.log("Iner Name found-----------"+Name);
												var trHTML = '';
												trHTML += "<tr><td>"  +data.Name +"</td><td>"+data.EID+ "</td><td>" +data.Designation+ "</td><td>" + average_value + "</td><td>" +data.ReportManager+ '</td><td><div class=view><ul><li><a href=# onclick="ViewRatings(\''+Name+'\')"><i class="fa fa-eye" aria-hidden=true></i>View</a></li></ul></div></td></tr>';
												console.log(trHTML);
												$('#location').append(trHTML);
												if(Name)
												{
												
												}
												//callDates(empID,Name);
											}
									}
									)
									resolve(Myfun());
									}
									);

							}
						)
				}


function CallExport(Name)
{
	console.log("In call export:"+Name);
	var div = document.createElement('div');
   	var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo").orderByKey();
					dbref
					.once("value")
					.then
						(
							function(snapshot)
							{
							  
								snapshot.forEach
								(
									function(childsnapshot)
									{
											data=childsnapshot.val();
											Ename=data.Name;
											if(Ename==Name)
											{
											Ikey=childsnapshot.key();
											console.log("Success:"+Ikey);
											call_Pull_pdf(Ikey);
											}
									}
								)
									
							}
						)
	
}

function call_Pull_pdf(EKey)
{
	var E_key=EKey;
	
	var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+E_key).orderByKey();
	dbref
        .once("value")
            .then
                (
                 function(snapshot)
                    {
                        function call_back()
                        {
                       
						
						var div = document.getElementById('savepdf');
						div.appendChild(Table_Pull);
						var doc = new jsPDF();

						// We'll make our own renderer to skip this editor
						var specialElementHandlers = {
							'#editor': function(element, renderer){
								return true;
							}
						};

						doc.fromHTML($('#div').get(0), 15, 15, {
							'width': 170,
							'elementHandlers': specialElementHandlers
						});
						doc.save('Test.pdf');

						
								
						}
                        return new Promise(function(resolve,reject){
                        snapshot.forEach
                        (
                            function(childsnapshot)
                             {
                               var data=childsnapshot.val();
							   var row = Table_Pull.insertRow(0);
							   var cell1 = row.insertCell(0);
							   cell1.innerHTML=data.Attitude;
							   console.log("Attitude:"+data.Attitude);
							   var cell2 = row.insertCell(1);
							   cell2.innerHTML=data.CustomerFocus;
							  console.log("C_Focus:"+data.CustomerFocus);
							   
                              }
                         );
                         resolve(call_back());
                         }
                         );
                  }
				);
	
}

function callDates(KeyEmp,Name)
	{


						var currentdate=new Date();
						var toggle=currentdate.getDay();
						var First_FriDate= new Date();
						var Second_FriDate=new Date();
						var Third_FriDate=new Date();
						var Fourth_FriDate=new Date();
						var lastFri=new Date();
						var seal1;
						var seal2;
						var one_day=1000*60*60*24;;
						var difference_ms;
						var Diffval;
					switch(toggle)
					{
					case 1:
					First_FriDate.setDate(currentdate.getDate()-3);//first friday
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					case 2:
					First_FriDate.setDate(currentdate.getDate()-4);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Third_FriDate.setDate(Second_FriDate.getDate()-38);

					 }
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					case 3:
					First_FriDate.setDate(currentdate.getDate()-5);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
    				  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
    				 }
    				 coverttoshort(First_FriDate,KeyEmp,Name);
    				break;
    				case 4:
    				First_FriDate.setDate(currentdate.getDate()-6);
    				Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
    				Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
    				Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
    				// Compare between 2nd and 3rd fridays
    				 seal1 = First_FriDate.getTime();
    				 seal2 = Second_FriDate.getTime();
    				 difference_ms = seal1 - seal2;
    				 Diffval=Math.round(difference_ms/one_day);
    				 if(Diffval!=7 && Diffval!=-7 )
					 {
    				  Second_FriDate.setDate(First_FriDate.getDate()-38);
    				 }
    				 seal1 = Second_FriDate.getTime();
    				 seal2 = Third_FriDate.getTime();
    				 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					case 5:
					First_FriDate.setDate(currentdate.getDate()-7);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					case 6:
					First_FriDate.setDate(currentdate.getDate()-8);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					case 0:
					First_FriDate.setDate(currentdate.getDate()-9);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Second_FriDate.setDate(First_FriDate.getDate()-38);
					 }
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-38);
					 }
					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
					  seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
					  Diffval=Math.round(difference_ms/one_day);
					  if(Diffval!=7 && Diffval!=-7)
					 {
					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
					 }
					 coverttoshort(First_FriDate,KeyEmp,Name);
					break;
					}
	}
                	function coverttoshort(First_FriDate,KeyEmp,Name)
				    {
					 First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
					 // Second_FriDate =  Second_FriDate.getDate()+'/'+(Second_FriDate.getMonth()+1) +'/'+ Second_FriDate.getFullYear();
					 // Third_FriDate =  Third_FriDate.getDate()+'/'+(Third_FriDate.getMonth()+1) +'/'+ Third_FriDate.getFullYear();
					//  Fourth_FriDate =  Fourth_FriDate.getDate()+'/'+(Fourth_FriDate.getMonth()+1) +'/'+ Fourth_FriDate.getFullYear();

					//	opt.text=First_FriDate;
					//	sel.append(opt);

					//	opt1.text=Second_FriDate;
					//	sel.append(opt1);

					//	opt2.text=Third_FriDate;
					//	sel.append(opt2);

					//	opt3.text=Fourth_FriDate;
					//	sel.append(opt3);

					//Reading the dates from the dates dataset for the employee//


    var flag=0;
    var date_val=new Array();

    var rep_date=new Array();
    var O_ratings=new Array();
    var trHTML = '';



    var a = document.createElement('a');

    var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EdateApraise/"+KeyEmp;
    console.log(rel);
    var xdiv=document.getElementById("shownotif");

    var dRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+KeyEmp);

    dRef
    .once("value")
    .then
    (
    function(snapshot) {


    function myfunction()
    {
        for(i=0;i<date_val.length;i++)
        {
            if(First_FriDate==date_val[i])
                {

                    flag=1;
                }

        }

                        if(flag==0)
                        {
                        var br = document.createElement("br");
                        var linkText = document.createTextNode('please Enter rating for '+Name+' for the date '+First_FriDate);
                        a.appendChild(linkText);
                        a.appendChild(br);
                        a.href ="#";
                        a.onclick = function() { CallRating(Name); }
                        xdiv.append(a);
                         }

                }


                return new Promise(function(resolve,reject){

                    snapshot.forEach
                    (

                        function(childsnapshot)
                        {
                            var data=childsnapshot.val();
                            var Apdate=data.Dateval;
                            date_val.push(Apdate);
                            rep_date.push(data.Dateval);
                            O_ratings.push(data.Ovaerll);
                        }

                    );
                resolve(myfunction());

                }

                )

                }
            )


}
function Set_enviorment(got_dates,got_ratings,Name)
	{

	 LineChartData =
	{
    labels : generateLabelsFromTable(got_dates),
    datasets : generateDataSetsFromTable(got_ratings,Name)
	};

	}

  function callback_envior(LineChartData)
  {
	 drawchart(LineChartData);

  }



	function generateLabelsFromTable(got_dates)
	{

	  console.log("called in genrate labels");
	  var labels = [];
	 for(var i=0;i<got_dates.length;i++)
	 labels.push(got_dates[i]);
	 return labels;

	}

	function generateDataSetsFromTable(got_ratings,Name)
	{

	var store_data=new Array;

	for(var i=0;i<got_ratings.length;i++)
	{
		store_data.push(got_ratings[i]);
	}
	var datasets = [];

	var dataset =
            {
				label:Name,
				/*fillColor : colors[index%3].fillColor,
                strokeColor : colors[index%3].strokeColor,
                highlightFill: colors[index%3].highlightFill,
                highlightStroke: colors[index%3].highlightStroke,*/
				data : store_data

            }


	 datasets.push(dataset);
	 return datasets;
	}
   function CallRating(Name)
   {

	localStorage.setItem("EName",Name);
	console.log("Hello:"+Name);
	window.location.href="add_rating.html";

   }

   function ViewRatings(VName)
   {
	  localStorage.setItem("VName",VName);
	  window.location.href="view_rating.html";
   }
function set_dates(passed_dates)
{
	 var labels = [];
	 labels.push(passed_dates);
	 return labels;
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("location");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 2; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function Edit_tabel(Flag)
{
    if(Flag!="True")
         {
                 //tb.getElementsByTagName("th")[3].style.display = "none";
              document.getElementById("Main_Menu").children[2].style.display = "none"
         }

}

function CallSort(n)
{

                  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                  table = document.getElementById("location");
                  switching = true;
                  //Set the sorting direction to ascending:
                    dir = "asc";
                  /*Make a loop that will continue until
                  no switching has been done:*/
                    while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    //rows = table.rows;
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (table.rows.length - 1); i++) {
                      //start by saying there should be no switching:
                      shouldSwitch = false;
                      /*Get the two elements you want to compare,
                      one from current row and one from the next:*/
                      x = table.rows[i].cells.item(n).innerHTML;
                      if(x=="N/A"|| x=="Unrated")
                      {
                      x=0;
                      }
                      y = table.rows[i + 1].cells.item(n).innerHTML;
                      if(y=="N/A"||  y=="Unrated")
                      {
                      y=0;
                      }
                      x= parseFloat(x);
                      y=  parseFloat(y);
                      /*check if the two rows should switch place,
                      based on the direction, asc or desc:*/
                      if (dir == "asc") {
                        if (x > y) {
                          //if so, mark as a switch and break the loop:
                          shouldSwitch= true;
                          break;
                        }
                      } else if (dir == "desc") {
                        if (x < y) {
                          //if so, mark as a switch and break the loop:
                          shouldSwitch= true;
                          break;
                        }
                      }
                    }
                    if (shouldSwitch) {
                      /*If a switch has been marked, make the switch
                      and mark that a switch has been done:*/
                      table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
                      switching = true;
                      //Each time a switch is done, increase this count by 1:
                      switchcount ++;
                    } else {
                      /*If no switching has been done AND the direction is "asc",
                      set the direction to "desc" and run the while loop again.*/
                      if (switchcount == 0 && dir == "asc") {
                        dir = "desc";
                        switching = true;
                      }
                    }
                  }

}

function export_struct()
{
var myFirebase = new Firebase("https://benisonapraisal.firebaseio.com/");
var dataJSON;
var jsonDL;
require([
      "dojo/dom",
      "dojo/on",
      "dojo/_base/lang", "dojo/domReady!"
    ], function(
    dom,
    on,
    lang,
    domReady
    )  {
 var exportDataBtn = dom.byId("exportBtn");
      on(exportDataBtn, "click", JSONToCSVConvertor);
var exportJSONBtn = dom.byId("dlJSON");
      on(exportJSONBtn, "click", DownloadJSON);
function DownloadJSON(){
    //console.log(JSON.stringify(dataJSON));
    var jsonString = JSON.stringify(dataJSON, null, 4);
    //console.log(jsonString);
  jsonDL = exportJSONBtn;
  jsonDL.download = "OrgHireachy.json";
  jsonDL.href = "data:application/json;charset=utf-8," + jsonString;
  jsonDL.innerHTML = "Download data as JSON";
};
var dataObject;
    //this function grabs a 'snapshot' of all the data in Firebase, then navigates down to the 'features' child. It then iterates through all the
    //children under 'attributes' and retrieves all attribute data. Then it converts them to strings or numbers and calls addPoint to map them
myFirebase.on("value", function(snapshot) {
dataObject = snapshot;
dataJSON = dataObject.val();
//console.log(JSON.stringify(dataJSON));

});

function JSONToCSVConvertor() {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof dataJSON != 'object' ? JSON.parse(dataJSON) : dataJSON;

    var CSV = '';
    //Set Report title in first row or line
    var ShowLabel = true;
    var ReportTitle = "Data";
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "OrgHierachy_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

});





}


$(document).ready(function(){
    $(".filter-btn").click(function(){
        $(".filter-bar").toggleClass("hide");
    });
});

function CallSearch(n) {
  var input, filter, table, tr, td, i;
  if(n==0)
  {
  input = document.getElementById("Text_search1");
  }
  if(n==1)
  {

  input = document.getElementById("Text_search2");
  }

  if(n==2)
  {
  input= document.getElementById("Text_search3");

  }

  if(n==3)
  {

  input= document.getElementById("Text_search4");

  }
  if(n==4)
  {

  input=document.getElementById("Text_search5");

  }
  filter = input.value.toUpperCase();
  table = document.getElementById("location");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[n];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}