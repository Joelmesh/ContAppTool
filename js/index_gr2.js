var labels = [];

var Name_display;

var Name_Pass_chart;

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

window.onload = function()
				{
					Call();
					//draw_chart();
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

function Call() {

	//getFridays();
	var extvar;
	var Name_col = new Array;
	var dbref = new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo").orderByKey();
	var login = localStorage.getItem("Email");
	console.log("Passed Email" + login);

	dbref
	.once("value")
	.then
	(
		function (snapshot) {

		function Myfun() {

			console.log("In My function----------------->");
			for (i = 0; i < Name_col.length; i++) {
				console.log("All Names:" + Name_col[i]);

			}
			}


			snapshot.forEach
			(
				function (childsnapshot) {
    			var data = childsnapshot.val();
				var emailval = data.Email;
				if (login == emailval) {
					console.log(data.EID);
					console.log(emailval);
					Eidval = data.EID;
					var Name = data.Name;
					Name_col.push(data.Name);
					localStorage.setItem("Nameval", Name);
					Ikey = childsnapshot.key(); //found key of the employee
					console.log("Key for:" + login + ":" + Ikey);
					var dsRef = new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EReport/" + Ikey);
					dsRef
					.once("value")
					.then
					(
						function (snapshot) {
						var data = snapshot.val();

						function axel()
						{

						console.log("called finally-----------called finally-------------------should get called once");
						get_Names(push_key);

						}


                        return new Promise(function(resolve,reject){
						snapshot.forEach
						(
							function (childsnapshot) {

							var data = childsnapshot.val();

							var rptId = data.reportingID;

							console.log("reportingID found:" + rptId);

							push_key.push(rptId);

							get_Notifications(rptId);

							console.log("---------pasing this key:"+rptId);

						});
						resolve(axel());
					});
				}
				);
			}



  });
}
);
}

    function get_Notifications(push_key)
    {
        console.log("got key>>>>>>>>>>>>"+push_key)
        var Name_local;
        var dRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo/"+push_key+"/Name");
        var rel="https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo/"+push_key+"/Name";
        console.log("=------------->rel::::"+rel);
        dRef
            .once("value")
                .then
                (
                function(snapshot) {

                       console.log("--------------->.....------------>>"+snapshot.val());

                      Name_local=snapshot.val();

                                    }
                );
    console.log("this gets the notifications for-------------->"+Name_local);
    var currentdate=new Date();
    console.log("currentDate value:"+currentdate);
    var toggle=currentdate.getDay();
    console.log("date day value in if Toggle:"+toggle);
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

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					 //console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					 //console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					 console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					 // console.log("difference betwee 4th and 3rd fridays:"+Diffval);


    					  if(Diffval!=7 && Diffval!=-7)
    					 {

    					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

    					  console.log("4th friday final :"+Fourth_FriDate);

    					 }

    					break;


    					case 2:


    					First_FriDate.setDate(currentdate.getDate()-4);

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					// console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					// console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					// console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


    					  if(Diffval!=7 && Diffval!=-7)
    					 {

    					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

    					  console.log("4th friday final :"+Fourth_FriDate);

    					 }


    					break;

    					case 3:

    					First_FriDate.setDate(currentdate.getDate()-5);

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					// console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					// console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					// console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


    					  if(Diffval!=7 && Diffval!=-7)
    					 {

    					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

    					  console.log("4th friday final :"+Fourth_FriDate);

    					 }


    					break;

    					case 4:

    					First_FriDate.setDate(currentdate.getDate()-6);

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					 console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					 console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					 console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					 // console.log("difference betwee 4th and 3rd fridays:"+Diffval);


    					  if(Diffval!=7 && Diffval!=-7)
    					 {

    					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

    					 // console.log("4th friday final :"+Fourth_FriDate);

    					 }

    					break;

    					case 5:

    					First_FriDate.setDate(currentdate.getDate()-7);

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					// console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					// console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					// console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


    					  if(Diffval!=7 && Diffval!=-7)
    					 {

    					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

    					  console.log("4th friday final :"+Fourth_FriDate);

    					 }



    					break;


    					case 6:

    					First_FriDate.setDate(currentdate.getDate()-8);

    					//console.log("1st Fri:"+First_FriDate);

    					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

    					//console.log("2nd Fri:"+Second_FriDate);

    					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

    					//console.log("3rd Fri:"+Third_FriDate);

    					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

    					//console.log("4th Fri:"+Fourth_FriDate);

    					// Compare between 2nd and 3rd fridays

    					 seal1 = First_FriDate.getTime();

    					 seal2 = Second_FriDate.getTime();

    					 difference_ms = seal1 - seal2;

    					// console.log("1st and 2nd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("1st and 2nd difference:"+Diffval);

    					 if(Diffval!=7 && Diffval!=-7 )
    					 {

    					  Second_FriDate.setDate(First_FriDate.getDate()-38);

    					 }

    					// console.log("2nd Fri:"+Second_FriDate);



    					 seal1 = Second_FriDate.getTime();

    					 seal2 = Third_FriDate.getTime();



    					 difference_ms = seal1 - seal2;

    					// console.log("2nd and 3rd firday difference:"+difference_ms);

    					 Diffval=Math.round(difference_ms/one_day);

    					// console.log("2nd and 3rd difference:"+Diffval);


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

    					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


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
    					break;
    				}
var flag=0;
var date_val=new Array();
var rep_date=new Array();
var O_ratings=new Array();
var trHTML = '';
var a = document.createElement('a');
var Name;
First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
var rel="https://apraisalstaging.firebaseio.com/EmployeeDB/EdateApraise/"+push_key;
console.log(rel);
var xdiv=document.getElementById("shownotif");
var dRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EApraise/"+push_key);
dRef
    .once("value")
        .then
        (
        function(snapshot) {
              function myfunction()
                 {

                console.log("---------->count in myFun()"+count_g);

                for(var i=0;i<rep_date.length;i++)
                {
                    console.log("----Date is:------"+Name+"-----"+rep_date[i]);
                }

                for(i=0;i<date_val.length;i++)
                {
                    if(First_FriDate==date_val[i])
                        {
                            console.log("in myfun():"+date_val);
                            flag=1;
                        }
                }

                    if(flag==0)
                    {
                    var br = document.createElement("br");
                    var linkText = document.createTextNode('Missed rating to '+Name_local+' for the week '+First_FriDate);
                    a.appendChild(linkText);
                    a.appendChild(br);
                    a.href ="#";
                    a.onclick = function() { CallRating(Name_local); }
                    console.log("please Enter rating for "+ Name_local +" for the date "+  First_FriDate);
                    xdiv.append(a);

                    }
                    return;
                }
                	return new Promise(function(resolve,reject){
                       snapshot.forEach
                        (
                            function(childsnapshot)
                            {
                                var data=childsnapshot.val();
                                console.log(data);
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
       console.log("in get_names()................................")

         for(var i=0;i<pushed_keys.length;i++)
                {
                    console.log("Keys:"+pushed_keys[i]);
                }

        var data_rating=new Array;
        var count=0;
        for(var i=0;i<pushed_keys.length;i++)
        {

                    var dbref=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo/"+pushed_keys[i]);
					var dex='https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo/'+pushed_keys[i];
					console.log("Rel-----:"+dex);
                    dbref
					.once("value")
					.then
						(
							function(snapshot)
							{
	                            				console.log("success");
												var data=snapshot.val();
											    console.log("from get_Names()::"+data);
												var Name=data.Name;
												console.log("..........Name from the get_Names():"+Name);
												var trHTML = '';
												trHTML += "<tr><td>"  +data.Name +"</td><td>"+data.EID+ "</td><td>" +data.Designation+ '</td><td>&nbsp</td><td><div class=view><ul><li><a href=# onclick="ViewRatings(\''+Name+'\')"><i class=fa fa-eye aria-hidden=true></i>View</a></li><li><a href=# onclick="CallRating(\''+Name+'\')"><i class=fa fa-plus aria-hidden=true></i>Add</a></li></ul></div></td></tr>';
												$('#location').append(trHTML);

												//callDates(empID,Name);


							}
							);

		}


for(var i=0;i<pushed_keys.length;i++)
 {
var dRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EApraise/"+pushed_keys[i]);

    dRef
        .once("value")
            .then
                (
                 function(snapshot)
                    {
                        function call_back()
                        {

                        count=0;
                        console.log("----------->whats key here??"+pushed_keys[i]);
                        call_set_chart(push_just_dates,data_rating,Name_display);
                        data_rating.length = 0;

                        }

                        return new Promise(function(resolve,reject){
                        snapshot.forEach
                        (
                            function(childsnapshot)
                             {
                               var data=childsnapshot.val();
                               console.log("Print name:"+data.Name)
                               Name_display=data.Name;
                               push_just_dates.push(data.Dateval);
                               push_ratings.push(data.Ovaerll);
                               data_rating[count]=data.Ovaerll;
                               count++;

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

        //var data;
         var pushed_keys=p_key;
         console.log("key which should not be undefined::-------------------->"+p_key);
         var labels_new=new Array;
         var data_overall=new Array;
        for(var i=0;i<set_dates.length;i++)
        {

        console.log("Printed Dates ::"+set_dates[i]);

        }
        for(var i=0;i<set_ratings.length;i++)
        {

        console.log("Printed Ratings ::"+set_ratings[i]);


        }

            console.log("Name"+Name_Pass_chart);

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
                 //backgroundColor: window.chartColors.red,
                 borderColor:getRandomColor(),
                 fill: false,
                 data : data_overall
             }

        datasets.push(dataset);

}

/*document.onreadystatechange = function(){
     if(document.readyState === 'complete'){

       create_final_graph();
     }
}*/
setTimeout(function(){
 //your code here
   console.log("should get called last -----------------------------------");
   var flag=0;
   var Fix_labels=new Array();
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
            //str = JSON.stringify(datasets);
            str = JSON.stringify(datasets, null, 4); // (Optional) beautiful indented output.
            console.log(str);
            //console.log("Object Data:"+datasets);

             var barChartData = {
             type:'line',
             data: {
                 labels : Fix_labels,
                 datasets:datasets
             }};

             var ctx = document.getElementById("canvas").getContext("2d");//get the chart object
             window.myLine = new Chart(ctx, barChartData);



}, 8000);


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
           console.log("should get called last -----------------------------------");

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
		console.log("passed Key to get_Name:"+rptID);
		var dbref=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo/"+rptID+"/Name").orderByKey();
		dbref
		.once("value")
			.then
				(
					function(snapshot)
					{
							var data = snapshot.val();
							console.log("Snapshot get_Name():"+data);
							populate(data,rptID);

					}
				);

	}

//recurse() finds out if there is a nested reporting structure viz Emp1 reports to Emp2 and Emp3 to Emp2,it finds keys of the nested employee and sends to populate

		function recurse(EmpKey)
				{
				console.log("In Recurse:"+EmpKey)
				var dxRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EReport");
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
									//console.log("InnerKey"+Ikey);
									if(Ikey==EmpKey)
									{
									console.log("Success");
									var d2sRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EReport/"+EmpKey);
									ref=("https://apraisalstaging.firebaseio.com/EmployeeDB/EReport/"+EmpKey);
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

																		console.log(data);
																		console.log(ReportId);
																		populate(ReportId,Name);
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


				function populate(Name,empID)
				{

					var dbref=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EInfo").orderByKey();

					dbref
					.once("value")
					.then
						(
							function(snapshot)
							{


							   function Myfun()
							   {


								console.log("=====================called in new prormise=======================");

							   }
							   return new Promise(function(resolve,reject){

								snapshot.forEach
								(


									function(childsnapshot)
									{
											Ikey=childsnapshot.key();
											//console.log("Keys:"+Ikey);
											//console.log("passed Key:"+empID);
											if(empID==Ikey)
											{
												console.log("success");
												var data=childsnapshot.val();
												var Name=data.Name;
												//console.log("-------------"+data.Email);
												//console.log(Name);
												//fillDrop(Name);
												//callNotif(Name);
												var trHTML = '';
												trHTML += "<tr><td>"  +data.Name +"</td><td>"+data.EID+ "</td><td>" +data.Designation+ '</td><td>&nbsp</td><td><div class=view><ul><li><a href=# onclick="ViewRatings(\''+Name+'\')"><i class=fa fa-eye aria-hidden=true></i>View</a></li><li><a href=# onclick="CallRating(\''+Name+'\')"><i class=fa fa-plus aria-hidden=true></i>Add</a></li></ul></div></td></tr>';
												$('#location').append(trHTML);

												callDates(empID,Name);


											}
									}
									)
									resolve(Myfun());
									}
									);

							}
						)
				}



function callDates(KeyEmp,Name)
	{


						var currentdate=new Date();

						console.log("currentDate value:"+currentdate);

						var toggle=currentdate.getDay();

						console.log("date day value in if Toggle:"+toggle);

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

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					 //console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					 //console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					 console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					 // console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					 coverttoshort(First_FriDate,KeyEmp,Name);


					break;


					case 2:


					First_FriDate.setDate(currentdate.getDate()-4);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					// console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					// console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					// console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);

					break;

					case 3:

					First_FriDate.setDate(currentdate.getDate()-5);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					// console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					// console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					// console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);

					break;

					case 4:

					First_FriDate.setDate(currentdate.getDate()-6);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					 console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					 console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					 console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					 // console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					 // console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);


					break;

					case 5:

					First_FriDate.setDate(currentdate.getDate()-7);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					// console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					// console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					// console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);


					break;


					case 6:

					First_FriDate.setDate(currentdate.getDate()-8);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					// console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					// console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					// console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("2nd and 3rd difference:"+Diffval);


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

					//  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);

					break;

					case 0:

					First_FriDate.setDate(currentdate.getDate()-9);

					//console.log("1st Fri:"+First_FriDate);

					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday

					//console.log("2nd Fri:"+Second_FriDate);

					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday

					//console.log("3rd Fri:"+Third_FriDate);

					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday

					//console.log("4th Fri:"+Fourth_FriDate);

					// Compare between 2nd and 3rd fridays

					 seal1 = First_FriDate.getTime();

					 seal2 = Second_FriDate.getTime();

					 difference_ms = seal1 - seal2;

					 console.log("1st and 2nd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					// console.log("1st and 2nd difference:"+Diffval);

					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-38);

					 }

					 console.log("2nd Fri:"+Second_FriDate);



					 seal1 = Second_FriDate.getTime();

					 seal2 = Third_FriDate.getTime();



					 difference_ms = seal1 - seal2;

					// console.log("2nd and 3rd firday difference:"+difference_ms);

					 Diffval=Math.round(difference_ms/one_day);

					 console.log("2nd and 3rd difference:"+Diffval);


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

					  console.log("difference betwee 4th and 3rd fridays:"+Diffval);


					  if(Diffval!=7 && Diffval!=-7)
					 {

					  Fourth_FriDate.setDate(Third_FriDate.getDate()-38);

					  console.log("4th friday final :"+Fourth_FriDate);

					 }

					// console.log("1st friday:"+First_FriDate);
					// console.log("2nd friday:"+Second_FriDate);
					// console.log("3rd friday:"+Third_FriDate);
					// console.log("4th friday:"+Fourth_FriDate);

					 coverttoshort(First_FriDate,KeyEmp,Name);


					break;



					}


	}



				function call_backdraw()
				{
					call_chart=call_chart+1;

					console.log("Got the call_back:=========================== call back No:"+call_chart);


				}


					function coverttoshort(First_FriDate,KeyEmp,Name)
				{
					 First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
					 // Second_FriDate =  Second_FriDate.getDate()+'/'+(Second_FriDate.getMonth()+1) +'/'+ Second_FriDate.getFullYear();
					 // Third_FriDate =  Third_FriDate.getDate()+'/'+(Third_FriDate.getMonth()+1) +'/'+ Third_FriDate.getFullYear();
					//  Fourth_FriDate =  Fourth_FriDate.getDate()+'/'+(Fourth_FriDate.getMonth()+1) +'/'+ Fourth_FriDate.getFullYear();



						 console.log("1st friday:"+First_FriDate);
					//	 console.log("2nd friday:"+Second_FriDate);
					//	 console.log("3rd friday:"+Third_FriDate);
					//	 console.log("4th friday:"+Fourth_FriDate);


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

    var rel="https://apraisalstaging.firebaseio.com/EmployeeDB/EdateApraise/"+KeyEmp;
    console.log(rel);
    var xdiv=document.getElementById("shownotif");

    var dRef=new Firebase("https://apraisalstaging.firebaseio.com/EmployeeDB/EApraise/"+KeyEmp);

    dRef
    .once("value")
    .then
    (
    function(snapshot) {


    function myfunction()
    {

        console.log("---------->count in myFun()"+count_g);

        for(var i=0;i<rep_date.length;i++)
        {
            console.log("----Date is:------"+Name+"-----"+rep_date[i]);
        }

        for(i=0;i<date_val.length;i++)
        {
            if(First_FriDate==date_val[i])
                {
                    console.log("in myfun():"+date_val);
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
                        console.log("please Enter rating for "+ Name +" for the date "+  First_FriDate);
                        xdiv.append(a);

                        }
                        //Set_enviorment(date_val,O_ratings,Name);
                }


                return new Promise(function(resolve,reject){

                    snapshot.forEach
                    (

                        function(childsnapshot)
                        {

                            var data=childsnapshot.val();

                            console.log(data);

                            var Apdate=data.Dateval;


                            date_val.push(Apdate);
                            rep_date.push(data.Dateval);
                            O_ratings.push(data.Ovaerll);


                            console.log("In child......");
                        }

                    );
                resolve(myfunction());

                }
                //
                )

                }
            )


}





function call_drawn()
{

console.log("-------called it =======++++++++++++++**************&&&&&&&&&&&&&&&&&&-----------");

}





function call_draw()
{

console.log("-------DONE-----------");

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


  function pass(sel,keys,Name)
  {


  console.log('***********************************');

  for (i = 0; i < sel.options.length; i++)
	{

			if(sel.options[i].disable != true)
			console.log("Missed date for"+Name+":"+sel.options[i].value);

	}

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

function gather_dates(got_dates,O_ratings,Name)
{

}
function set_dates(passed_dates)
{

	 var labels = [];
	 labels.push(passed_dates);
	 return labels;


}


function draw_chart()
{

console.log("-------------------------Called draw_chart");
}























