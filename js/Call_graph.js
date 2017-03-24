var Name;
var global_push=new Array();
var get_data;
var count;
var labels = [];
var att_arr=new Array();
var disc_arr=new Array();
var c_focus=new Array();
var m_line=new Array();
var q_work=new Array();
var set_count=0;
var datasets = [];

var First_flag=true;
var Second_flag= true;
var Third_flag= true;
var Fourth_flag= true;

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
var cost_labels=new Array();

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
					  Second_FriDate.setDate(First_FriDate.getDate()-35);
					 }
					 console.log("2nd Fri:"+Second_FriDate);
					 seal1 = Second_FriDate.getTime();
    				 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 console.log("2nd and 3rd firday difference:"+difference_ms);
					 Diffval=Math.round(difference_ms/one_day);
					 console.log("2nd and 3rd difference:"+Diffval);
					 if(Diffval!=7 && Diffval!=-7 )
					 {
					  Third_FriDate.setDate(Second_FriDate.getDate()-35);
					 }
					// Compare between 4th and 3rd fridays
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
					// Compare between 4th and 3rd fridays
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

					case 3:
                    console.log("----------------------------------*********************** in 3********************* ");
					First_FriDate.setDate(currentdate.getDate()-5);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					console.log("..........."+Second_FriDate);
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
        			 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 console.log("diffval==="+Diffval);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-35);
					  console.log("--------------->>>>"+Second_FriDate);

					 }

					 seal1 = Second_FriDate.getTime();
        			 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Third_FriDate.setDate(Second_FriDate.getDate()-35);

					 }
					// Compare between 4th and 3rd fridays
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

					case 4:
					First_FriDate.setDate(currentdate.getDate()-6);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
					 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 console.log("first friday:"+First_FriDate);
					 console.log("Second friday:"+Second_FriDate);
					 console.log("1st and 2nd firday difference:"+difference_ms);
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-35);

					 }
					 console.log("After suntrac second friday is"+Second_FriDate);
					 seal1 = Second_FriDate.getTime();
					 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Third_FriDate.setDate(Second_FriDate.getDate()-35);

					 }
					// Compare between 4th and 3rd fridays
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

					case 5:

					 First_FriDate.setDate(currentdate.getDate()-7);
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
					// Compare between 4th and 3rd fridays
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
					// Compare between 4th and 3rd fridays
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

					// Compare between 4th and 3rd fridays
					  seal1 = Third_FriDate.getTime();
                      seal2 = Fourth_FriDate.getTime();
					  one_day=1000*60*60*24;
					  difference_ms = seal2 - seal1;
                      Diffval=Math.round(difference_ms/one_day);
					  console.log("difference betwee 4th and 3rd fridays:"+Diffval);
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

var ctx = document.getElementById("canvas").getContext("2d");




window.onload = function() {
    Name=localStorage.getItem("VName");
     firebase.auth().onAuthStateChanged(function(user) {
                                if (user) {
                                  // User is signed in.
                                  Plot_graph();
                                } else {
                                  // No user is signed in.
                                   window.location.href="../index.html";

                                }
                              });
	}

    function Plot_graph()
    {

        Chart.defaults.global.tooltipTemplate =
       "<%if (label){%><%=label%>: <%}%><%= value %>";
        var Name=localStorage.getItem("VName");
        var  Ikey;
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

					 var data = childsnapshot.val();
					 var Nameval=data.Name;
					 var Dates_log=new Array();
					 var O_rating=new Array();
					 var Attitude=new Array;
					 var Cfocus=new Array();
					 var tooltip;

							if(Nameval==Name)
							 {
							 console.log("Success");
							 Ikey=childsnapshot.key();
							 var data=childsnapshot.val();
							 var Admin= data.Admin;
							 Edit_tabel(Admin);

							 var dxRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+Ikey);
							 dxRef
							.once("value")
								.then
								(
									function(snapshot)
									{

										function myfunction(){

											   for(var i=0;i<O_rating.length;i++)
											   console.log("Overall Ratings:"+O_rating[i]);
											   for(var i=0;i<Dates_log.length;i++)
											   console.log("Date:"+Dates_log[i]);




											   if(First_flag==true)
											   {

											   if(Attitude.length<0)
											   {
											   Attitude.push(null);
                                               Cfocus.push(null);
                                               att_arr.push(null);
                                               disc_arr.push(null);
                                               c_focus.push(null)
                                               m_line.push(null);
                                               q_work.push(null);
                                               }

											   else
											   {

											    Attitude.splice(3,0,null);
                                                Cfocus.splice(3,0,null);
                                                att_arr.splice(3,0,null);
                                                disc_arr.splice(3,0,null);
                                                c_focus.splice(3,0,null);
                                                m_line.splice(3,0,null);
                                                q_work.splice(3,0,null);


											   }

											   }
											   if(Second_flag==true)
                                               {

                                                	   if(Attitude.length<0)
                                                       {
                                                       Attitude.push(null);
                                                       Cfocus.push(null);
                                                       att_arr.push(null);
                                                       disc_arr.push(null);
                                                       c_focus.push(null)
                                                       m_line.push(null);
                                                       q_work.push(null);
                                                       }
                                                        else
                                                       {

                                                        Attitude.splice(2,0,null);
                                                        Cfocus.splice(2,0,null);
                                                        att_arr.splice(2,0,null);
                                                        disc_arr.splice(2,0,null);
                                                        c_focus.splice(2,0,null);
                                                        m_line.splice(2,0,null);
                                                        q_work.splice(2,0,null);


                                                       }

                                               }
                                               if(Third_flag==true)
                                               {
                                                    if(Attitude.length<0)
                                                   {
                                                   Attitude.push(null);
                                                   Cfocus.push(null);
                                                   att_arr.push(null);
                                                   disc_arr.push(null);
                                                   c_focus.push(null)
                                                   m_line.push(null);
                                                   q_work.push(null);
                                                   }
                                                    else
                                                   {

                                                    Attitude.splice(1,0,null);
                                                    Cfocus.splice(1,0,null);
                                                    att_arr.splice(1,0,null);
                                                    disc_arr.splice(1,0,null);
                                                    c_focus.splice(1,0,null);
                                                    m_line.splice(1,0,null);
                                                    q_work.splice(1,0,null);


                                                   }
                                               }
											   if(Fourth_flag==true)
                                               {

                                                 if(Attitude.length<0)
                                                {
                                                Attitude.push(null);
                                                Cfocus.push(null);
                                                att_arr.push(null);
                                                disc_arr.push(null);
                                                c_focus.push(null)
                                                m_line.push(null);
                                                q_work.push(null);
                                                }
                                                 else
                                                {

                                                 Attitude.splice(0,0,null);
                                                 Cfocus.splice(0,0,null);
                                                 att_arr.splice(0,0,null);
                                                 disc_arr.splice(0,0,null);
                                                 c_focus.splice(0,0,null);
                                                 m_line.splice(0,0,null);
                                                 q_work.splice(0,0,null);


                                                }

                                               }


											   /* added for multispline  */

                                              // set_datexaxis(Dates_log);

                                               set_datasets(att_arr,"attitude");
                                               set_datasets(disc_arr,"discipline");
                                               set_datasets(c_focus,"CustomerFocus");
                                               set_datasets(m_line,"MetDeadline");
                                               set_datasets(q_work,"Quality");
                                               draw_spline();

                                               First_redflag=true;
                                               Second_redflag=true;
                                               Third_redflag=true;
                                               Fourth_redflag=true;



                                    }
                                        return new Promise(function(resolve,reject){

                                    snapshot.forEach
                                    (

                                    function(childsnapshot)
                                    {
                                    var data=childsnapshot.val();
                                    var combo="overall Rating:"+data.Dateval+"Attitude value:"+data.Attitude;
                                    console.log(data);
                                    var cr_date=data.Dateval;
                                    Dates_log.push(data.Dateval);



                                     if(Fourth_FriDate==cr_date)
                                     {

                                       O_rating.push(data.Ovaerll);
                                       Attitude.push(data.Attitude);
                                       Cfocus.push(data.CustomerFocus);
                                       att_arr.push(data.Attitude);
                                       disc_arr.push(data.Discipline);
                                       c_focus.push(data.CustomerFocus)
                                       m_line.push(data.DeadlineMet);
                                       q_work.push(data.Quality);
                                       Fourth_flag=false;


                                     }
                                     if(Third_FriDate==cr_date)
                                     {

                                         O_rating.push(data.Ovaerll);
                                        Attitude.push(data.Attitude);
                                        Cfocus.push(data.CustomerFocus);
                                        att_arr.push(data.Attitude);
                                        disc_arr.push(data.Discipline);
                                        c_focus.push(data.CustomerFocus)
                                        m_line.push(data.DeadlineMet);
                                        q_work.push(data.Quality);
                                        Third_flag=false;



                                     }
                                     if(Second_FriDate==cr_date )
                                     {

                                        O_rating.push(data.Ovaerll);
                                       Attitude.push(data.Attitude);
                                       Cfocus.push(data.CustomerFocus);
                                       att_arr.push(data.Attitude);
                                       disc_arr.push(data.Discipline);
                                       c_focus.push(data.CustomerFocus)
                                       m_line.push(data.DeadlineMet);
                                       q_work.push(data.Quality);

                                        Second_flag=false;


                                     }
                                     if(First_FriDate==cr_date )
                                     {
                                      O_rating.push(data.Ovaerll);
                                      Attitude.push(data.Attitude);
                                      Cfocus.push(data.CustomerFocus);
                                      att_arr.push(data.Attitude);
                                      disc_arr.push(data.Discipline);
                                      c_focus.push(data.CustomerFocus)
                                      m_line.push(data.DeadlineMet);
                                      q_work.push(data.Quality);

                                        First_flag=false;


                                     }

                                   /* O_rating.push(data.Ovaerll);
                                    Attitude.push(data.Attitude);
                                    Cfocus.push(data.CustomerFocus);
                                    /*added for mulitple spline*/

                                   /* att_arr.push(data.Attitude);
                                    disc_arr.push(data.Discipline);
                                    c_focus.push(data.CustomerFocus);
                                    m_line.push(data.DeadlineMet);
                                    q_work.push(data.Quality);*/

                                    }

                                    );
                                    resolve(myfunction());
                                    });
                        }
								);
							}
						 }
					);
				}
			);
    }

function draw_spline()
{
 var Fix_labels=new Array();
 for(i=0;i<labels.length;i++)
  {
  Fix_labels[i]=labels[i];
  }
  var obj=JSON.stringify(datasets);
  console.log(obj);
   var barChartData = {
                       type:'line',
                       data:{
                           labels : cost_labels,
                           datasets:datasets
                       }};
window.myLine = new Chart(ctx, barChartData);
}


function set_datexaxis(O_dates)
{
 labels.length=0;
 for(var i=labels.length;i>=0;i--)
          {
           console.log("after delete data:"+ labels[i]);
          }
var length_labels=labels.length;
console.log("length of labels:"+length_labels);
for(var i=0;i<O_dates.length;i++)
          {
           console.log("Picked date:"+ O_dates[i]);
          }
for(var i=0;i<O_dates.length;i++)
         {
          labels.push(O_dates[i]);
         }
for(var i=0;i<labels.length;i++)
          {
           console.log("Graph label date:"+ labels[i]);
          }
     console.log("length of Labels:"+labels.length);
}


function set_datasets(rating_val,Name)
{

var g_data=new Array();

for(var i=0;i<rating_val.length;i++)
{

console.log("Rating:"+Name+":"+rating_val[i]);
}
if(set_count!=0)
{
//g_data.length=0;
}
for(var i=0;i<rating_val.length;i++)
{
g_data.push(rating_val[i]);
}
for(var i=0;i<g_data.length;i++)
{
console.log("Rating in data:"+Name+":"+g_data[i]);
}

     var dataset =
             {
                 label:Name,
                 borderColor:getRandomColor(),
                 fill: false,
                 data:g_data
             }

       datasets.push(dataset);

       set_count=set_count+1;

	   var obj=JSON.stringify(datasets);

	   console.log(obj);


}

function callLogout()
{

 firebase.auth().signOut().then(function() {
  alert("Do you wish to Log out");
  window.location.href="log.html";
},

 function(error) {
 alert("Unable to logout");
});


}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
$(function () {
     var myLine = new Chart(document.getElementById("canvas"), config);
     document.getElementById("canvas").onclick = function(evt){
     var activePoints = myLine.getElementsAtEvent(evt);
     console.log("clicked"+activePoints);
     var firstPoint = activePoints[0];
    // if (firstPoint !== undefined)

      alert(config.data.datasets[firstPoint._datasetIndex].data[firstPoint._index]);
};
}
);
function Edit_tabel(Flag)
{
    if(Flag!="True")
         {
                 //tb.getElementsByTagName("th")[3].style.display = "none";
              document.getElementById("Main_Menu").children[2].style.display = "none"
         }

}