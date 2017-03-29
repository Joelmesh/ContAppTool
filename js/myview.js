
var push_just_dates=new Array;
var push_ratings=new Array;
var Name_display;
var Name_col=new Array;
var push_key=new Array;
var call_count=0;
var avg_value=new Array;

var datasets=[];
var ctx=document.getElementById("canvas");

 var First_FriDate=new Date();
 var Second_FriDate=new Date();
 var Third_FriDate=new Date();
 var Fourth_FriDate=new Date();

 var First_flag=false;
 var Second_flag= false;
 var Third_flag= false;
 var Fourth_flag= false;

var currentdate=new Date();
var toggle=currentdate.getDay();
var lastFri=new Date();
var seal1;
var seal2;
var one_day=1000*60*60*24;;
var difference_ms;
var Diffval;
var cost_labels=new Array;
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

cost_labels.push(First_FriDate);
cost_labels.push(Second_FriDate);
cost_labels.push(Third_FriDate);
cost_labels.push(Fourth_FriDate);

window.onload = function()
{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
         CallName();
      } else {
        // No user is signed in.
        window.location.href="../index.html";
      }
    });
}
function CallName()
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

					var Eidval = data.EID;
					var Name = data.Name;
					var Admin = data.Admin;
					Name_col.push(data.Name);
					localStorage.setItem("Nameval", Name);
					Ikey = childsnapshot.key; //found key of the employee
					var dsRef = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/" + Ikey);
					dsRef
					.once("value")
					.then
					(
						function (snapshot) {
						var data = snapshot.val();
						function axelxls()
						{
						get_NamesAll(push_key);
						get_graphdata(push_key);
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
						resolve(axelxls());
					});
				}
				);
			}
			);
  });
}

function get_NamesAll(pushed_keys)
         {
             var data_rating=new Array;
             var count=0;

             console.log("In getNames()------------------------length of the average vlaue array is :------------------->>>>"+avg_value.length);
             for(var i=0;i<pushed_keys.length;i++)
             {
                         console.log("Average in get names() is :------------------------>"+avg_value[i]);
                         //recurse(pushed_keys[i]);
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



         }
  function get_graphdata(pushed_keys)
  {

  for(var i=0;i<pushed_keys.length;i++)
            {
                var graph_count=0;
                var c_count=0;
                is_child=false;

                  var dRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+pushed_keys[i]);
                  var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+pushed_keys[i];
                  console.log("got the link:"+rel);
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
                                       for(var i=0;i<push_ratings.length;i++)
                                       {

                                       console.log("rating recieved:"+Name_display+":"+push_ratings[i]);
                                       }

                                            call_set_chart(push_just_dates,push_ratings,Name_display);



                                       }
                                       is_child=false;
                                       push_ratings.length = 0;
                                       console.log("graph count:"+graph_count);
                                      /* if(graph_count==0)
                                       {
                                      $.getScript('../js/index_gr2.js', function () {
                                                                                     draw_graph();
                                                                                });
                                       }*/
                                       //else
                                       //{
                                       if(graph_count==pushed_keys.length)
                                       {
                                      draw_graph();
                                       }
                                       //}
                                        Name_display="";
                                        push_ratings.length=0;

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
                                              console.log("got the object data"+data);
                                              Name_display=data.Name;
                                              cr_date=data.Dateval;
                                              console.log("---------------------");
                                              console.log("Name:"+Name_display);
                                              console.log("Encountered Date:"+cr_date);

                                              push_just_dates.push(data.Dateval);
                                              //push_ratings.push(data.Ovaerll);
                                              //data_rating[count]=data.Ovaerll;
                                            //  count++;
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

   function call_set_chart(set_dates,set_ratings,Name_Pass_chart)
    {

          // alert("called in call_set_chart");
          //var data;
           console.log("called in set Chart:")
          // var pushed_keys=p_key;
           var labels_new=new Array;
           var data_overall=new Array;

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

  function draw_graph(){

    console.log("called draw graph --------------------------------------");


              str = JSON.stringify(datasets, null, 4); // (Optional) beautiful indented output.
              console.log("...................///"+str);
               var barChartData = {
               type:'line',
               data: {
                   labels : cost_labels,
                   datasets:datasets
               }};

               window.myLine = new Chart(ctx, barChartData);
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
                function(snapshot)
                 {
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
                    console.log(' Rating not entered for '+Name_local+' for the week '+First_FriDate);
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
                               // rep_date.push(data.Dateval);
                               // O_ratings.push(data.Ovaerll);
                            }

                        );
                    resolve(myfunction());
                    }
                    )
                    }
                )
    }


  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }