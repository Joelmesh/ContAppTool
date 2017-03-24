var push_dates=new Array;
var cs_Name;
var flag=0;
var labels = [];
var cost_labels=[];
var set_count=0;
var push_ratings=new Array;
var push_rkeys=new Array;
select = document.createElement("select");
select.setAttribute("class", "form-control");
var option = document.createElement("option");
var ctx = document.getElementById("canvas").getContext("2d");
var Oall_collect=new Array();
var count_snap=0;
var datasets = [];
var extendpoints= [];
var push_keys=new Array();
var total_count=0;//In else
var fax_count=0;
var count=0;//in If
var Major_key=0;
/*----- single employee graph Arrays-------*/
var d_attitude=new Array(0,0,0,0);
var cust_focus=new Array(0,0,0,0);
var d_met=new Array(0,0,0,0);
var dsp_rate=new Array(0,0,0,0);
var Qual_rate=new Array(0,0,0,0);

/*-------------Arrays for Graph-------*/
var date_col=new Array();
var O_collect=new Array();

var dateall_col=new Array();
var Name_array=new Array;
var EID_array=new Array;

/**********table pull********/
var Table_Pull = document.createElement("TABLE");

//Table_Pull.border = "2";
//Table_Pull.style.width = "100%";
//Table_Pull.className += 'table table-hover table_action table-striped table-bordered';

Table_Pull.setAttribute("class","table table-hover table_action table-striped table-bordered");
Table_Pull.setAttribute("ID","TableLocate")
/*  First row of table pull */
var row = Table_Pull.insertRow(-1);
var cell1 = row.insertCell(0);
cell1.innerHTML="";
var cell2 = row.insertCell(1);
cell2.innerHTML="";
var cell3 = row.insertCell(2);
cell3.innerHTML="";
var cell4 = row.insertCell(3);
cell4.innerHTML="";
var cell5 = row.insertCell(4);
cell5.innerHTML="";
var cell6 = row.insertCell(5);
cell6.innerHTML="";
var cell7 = row.insertCell(6);
cell7.innerHTML="";
var cell8 = row.insertCell(7);
var checkbox = document.createElement("INPUT"); //Added for checkbox
checkbox.type = "checkbox"; //Added for checkbox
cell8.appendChild(checkbox);

/*--------------The detailed rating table---------*/
var Table_Detail = document.createElement("TABLE");
//Table_Detail.border = "2";
Table_Detail.style.width = "100%";
//Table_Detail.class='table table-hover table_action';
Table_Detail.setAttribute("class","table table-hover table_action");
var header = Table_Detail.createTHead();
var rowm = header.insertRow(0);
rowm.style.backgroundColor = "#6f88a1";
//rowm.style.font-weight="bold";
var HDcell1 = rowm.insertCell(0);
HDcell1.innerHTML = "Weeks";
var HDcell2 = rowm.insertCell(1);
HDcell2.innerHTML = "Attitude";
var HDcell3 = rowm.insertCell(2);
HDcell3.innerHTML = "Discipline";
var HDcell4 = rowm.insertCell(3);
HDcell4.innerHTML = "Met Deadline";
var HDcell5 = rowm.insertCell(4);
HDcell5.innerHTML = "Qulaity Of Work";
var HDcell6 = rowm.insertCell(5);
HDcell6.innerHTML = "Customer Focus";
var HDcell7 = rowm.insertCell(6);
HDcell7.innerHTML = "Comments";

/*---------Header row table_pull -----------------*/
var header = Table_Pull.createTHead();
var rowx = header.insertRow(0);
rowx.style.backgroundColor = "#6f88a1";
var Hcell1 = rowx.insertCell(0);
Hcell1.innerHTML = "EMPID";
//Hcell1.addEventListener("click",Callraise(0));

var Hcell2 = rowx.insertCell(1);

Hcell2.innerHTML = "Name";
var Hcell3 = rowx.insertCell(2);
Hcell3.innerHTML = "Designation";
var Hcell4 = rowx.insertCell(3);
Hcell4.innerHTML ="" ;
var Hcell5 = rowx.insertCell(4);
Hcell5.innerHTML = "";
var Hcell6 = rowx.insertCell(5);
Hcell6.innerHTML = "";
var Hcell7 = rowx.insertCell(6);
Hcell7.innerHTML ="";
var Hcell8 = rowx.insertCell(7);
Hcell8.innerHTML = "Select";

/*-----First Row ----------------*/
var row = Table_Detail.insertRow(-1);
var cell11 = row.insertCell(0);
cell11.innerHTML="";

var cell12 = row.insertCell(1);
cell12.innerHTML="";

var cell13 = row.insertCell(2);
cell13.innerHTML="";

var cell14 = row.insertCell(3);
cell14.innerHTML="";

var cell15 = row.insertCell(4);
cell15.innerHTML="";

var cell16 = row.insertCell(5);
cell16.innerHTML="";

var cell17 = row.insertCell(6);
cell17.innerHTML="";

/*---- second Row------- */

var row = Table_Detail.insertRow(-1);
var cel21 = row.insertCell(0);
cel21.innerHTML="";

var cell22 = row.insertCell(1);
cell22.innerHTML="";

var cell23 = row.insertCell(2);
cell23.innerHTML="";

var cell24 = row.insertCell(3);
cell24.innerHTML="";

var cell25 = row.insertCell(4);
cell25.innerHTML="";

var cell26 = row.insertCell(5);
cell26.innerHTML="";

var cell27 = row.insertCell(6);
cell27.innerHTML="";


/*----------- Third Row ---------------------*/

var row = Table_Detail.insertRow(-1);
var cell31 = row.insertCell(0);
cell31.innerHTML="";

var cell32 = row.insertCell(1);
cell32.innerHTML="";

var cell33 = row.insertCell(2);
cell33.innerHTML="";

var cell34 = row.insertCell(3);
cell34.innerHTML="";

var cell35 = row.insertCell(4);
cell35.innerHTML="";

var cell36 = row.insertCell(5);
cell36.innerHTML="";

var cell37 = row.insertCell(6);
cell37.innerHTML="";


/*----------------Fourth Row--------------- */

var row = Table_Detail.insertRow(-1);
var cell41 = row.insertCell(0);
cell41.innerHTML="";

var cell42 = row.insertCell(1);
cell42.innerHTML="";

var cell43 = row.insertCell(2);
cell43.innerHTML="";

var cell44 = row.insertCell(3);
cell44.innerHTML="";

var cell45 = row.insertCell(4);
cell45.innerHTML="";

var cell46 = row.insertCell(5);
cell46.innerHTML="";

var cell47 = row.insertCell(6);
cell47.innerHTML="";

/*------------------------Table All--------------------*/

var Table_all=document.createElement("TABLE");
//Table_all.border="1";
Table_all.setAttribute("class","table table-hover table_action table-striped table-bordered");
Table_all.setAttribute("ID","Table_comp");
//Table_all.style.width = "1000px";
var headertab = Table_all.createTHead();
var rowdet = headertab.insertRow(0);
rowdet.style.backgroundColor = "#6f88a1";

var Hxcell1 = rowdet.insertCell(0);
Hxcell1.innerHTML = "EMPID";

Hxcell1.addEventListener("click", function(){
                                                 Callraise1(0);
                                             }, false);

var Hxcell2 = rowdet.insertCell(1);
Hxcell2.innerHTML = "Name";
Hxcell2.addEventListener("click",Callraise);
var Hxcell3 = rowdet.insertCell(2);
Hxcell3.innerHTML = "Designation";
Hxcell3.addEventListener("click",Callraise2);

var Hxcell4 = rowdet.insertCell(3);
Hxcell4.innerHTML ="" ;
Hxcell4.addEventListener("click", function(){
                             Callraise1(3);
                            }, false);


var Hxcell5 = rowdet.insertCell(4);
Hxcell5.innerHTML = "";
Hxcell5.addEventListener("click", function(){
                             Callraise1(4);
                            }, false);

var Hxcell6 = rowdet.insertCell(5);
Hxcell6.innerHTML = "";
Hxcell6.addEventListener("click", function(){
                             Callraise1(5);
                            }, false);

var Hxcell7 = rowdet.insertCell(6);
Hxcell7.innerHTML ="";
Hxcell7.addEventListener("click", function(){
                             Callraise1(6);
                            }, false);

var Hxcell8 = rowdet.insertCell(7);
Hxcell8.innerHTML = "Select";

var Message_dat=new Array();

var currentdate=new Date();
//console.log("currentDate value:"+currentdate);
var toggle=currentdate.getDay();
//console.log("date day value in if Toggle:"+toggle);
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
					  Second_FriDate.setDate(First_FriDate.getDate()-35);
					 }
					// console.log("2nd Fri:"+Second_FriDate);
					 seal1 = Second_FriDate.getTime();
    				 seal2 = Third_FriDate.getTime();
					 difference_ms = seal1 - seal2;
				//	 console.log("2nd and 3rd firday difference:"+difference_ms);
					 Diffval=Math.round(difference_ms/one_day);
				//	 console.log("2nd and 3rd difference:"+Diffval);
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
                   // console.log("----------------------------------*********************** in 3********************* ");
					First_FriDate.setDate(currentdate.getDate()-5);
					Second_FriDate.setDate(First_FriDate.getDate()-7); //2nd friday
					//console.log("..........."+Second_FriDate);
					Third_FriDate.setDate(Second_FriDate.getDate()-7); //3rd friday
					Fourth_FriDate.setDate(Third_FriDate.getDate()-7); //4th friday
					// Compare between 2nd and 3rd fridays
					 seal1 = First_FriDate.getTime();
        			 seal2 = Second_FriDate.getTime();
					 difference_ms = seal1 - seal2;
					 Diffval=Math.round(difference_ms/one_day);
					// console.log("diffval==="+Diffval);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-35);
					//  console.log("--------------->>>>"+Second_FriDate);

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
					// console.log("first friday:"+First_FriDate);
					// console.log("Second friday:"+Second_FriDate);
					// console.log("1st and 2nd firday difference:"+difference_ms);
					 Diffval=Math.round(difference_ms/one_day);
					 if(Diffval!=7 && Diffval!=-7 )
					 {

					  Second_FriDate.setDate(First_FriDate.getDate()-35);

					 }
					// console.log("After suntrac second friday is"+Second_FriDate);
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
					 // console.log("difference betwee 4th and 3rd fridays:"+Diffval);
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

                window.onload = function()
				{
                    // console.log("here:");

                     firebase.auth().onAuthStateChanged(function(user) {
                       if (user) {
                         // User is signed in.
                            fill_dropdown();
                       } else {
                         // No user is signed in.
                          window.location.href="../index.html";

                       }
                     });



				}




function change_catch()
{
/*---------------------------------------------------------------------*/
	  datasets.length=0;

      var date_cmp=new Array();
      date_cmp.push(First_FriDate);
      date_cmp.push(Second_FriDate);
      date_cmp.push(Third_FriDate);
      date_cmp.push(Fourth_FriDate);
document.getElementById("Select_emp").style.visibility = "hidden";
var strUser = select.options[select.selectedIndex].value;
//console.log("Caught:"+strUser);

if(strUser!="All")
{
/*if(count!=0);
{
Table_Pull.deleteTHead();
Table_Pull.deleteRow(-1);
}*/
/*----------------First Row--------------- */

for(var i=0;i<d_attitude.length;i++)
{
//console.log("Data:------------------>"+d_attitude[i]);

}


if(fax_count!=0)
{
Table_all.parentNode.removeChild(Table_all);
fax_count=0;
}

document.getElementById("EName_print").innerHTML = strUser;
document.getElementById("E_Name").innerHTML = strUser;
if(total_count!=0)
{
 Table_all.parentNode.removeChild(Table_all);
 total_count=0;
}
var First_redflag=0;
var Second_redflag=0;
var Third_redflag=0;
var Fourth_redflag=0;

count=count+1;
//checkbox.id = "chk" ;
var x=0;


Hcell4.innerHTML =Fourth_FriDate;
Hcell5.innerHTML =Third_FriDate;
Hcell6.innerHTML =Second_FriDate;
Hcell7.innerHTML =First_FriDate;

cell11.innerHTML=Fourth_FriDate;

cel21.innerHTML=Third_FriDate;

cell31.innerHTML=Second_FriDate;

cell41.innerHTML=First_FriDate;

var FB_key;

var dbref = firebase.database().ref("EmployeeDB/EInfo/").orderByChild("Name").equalTo(strUser);
dbref.once("value").then(function(snapshot) {
snapshot.forEach(function(childsnapshot) {
                                   // console.log("Initial");
                                    var data = childsnapshot.val();
                                    var Nameval = data.Name;
                                    cs_Name=data.Name;
                                    FB_key = childsnapshot.key;
                                    cell1.innerHTML=data.EID;
                                    cell2.innerHTML=data.Name;
                                    cell3.innerHTML=data.Designation;

                                   var tab_add=document.getElementById("table_info");
                                   tab_add.appendChild(Table_Pull);

                                   var tab_adddet=document.getElementById("TableDetail");
                                   tab_adddet.appendChild(Table_Detail);

                                  //  console.log("before");
                                        })
                                    })
      .then(function call_next(){

              //console.log("In then:");

              if(date_col.length!=0)
             {
              date_col.length=0
             }
              if(O_collect.length>1)
             {
                O_collect.length=0
             }
             if(d_attitude.length>=1)
             {

            d_attitude.length=0;
             }
             if(cust_focus.length>=1)
             {

            cust_focus.length=0;
             }
             if(d_met.length>=1)
             {

            d_met.length=0;
             }
             if(Qual_rate.length>=1)
             {
             Qual_rate.length=0;

             }
             if(dsp_rate.length>=1)
             {
            dsp_rate.length=0;

             }


            var dxref = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key);
            var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key;
          //  console.log("rel:"+rel);
            dxref
           .once("value")
             .then
              (
                 function (snapshot)
                  {
                     function Myfun()
                     {
                     //    console.log(cs_Name);
                         for(var i=0;i<date_col.length;i++)
                         {

                    //     console.log("data:"+date_col[i]);


                         }

                     //    console.log("should be called last");
                         if(First_redflag==0)
                         {

                           cell4.innerHTML="N/A";
                           cell12.innerHTML="N/A";
                           cell13.innerHTML="N/A";
                           cell14.innerHTML="N/A";
                           cell15.innerHTML="N/A";
                           cell16.innerHTML="N/A";
                           cell17.innerHTML="N/A"

                          O_collect.splice(0,0,null);
                          d_attitude.splice(0,0,null);
                          cust_focus.splice(0,0,null);
                          d_met.splice(0,0,null);
                          dsp_rate.splice(0,0,null);
                          Qual_rate.splice(0,0,null);



                         }

                          if(Second_redflag==0)
                          {

                            cell5.innerHTML="N/A";
                            cell22.innerHTML="N/A";
                            cell23.innerHTML="N/A";
                            cell24.innerHTML="N/A";
                            cell25.innerHTML="N/A";
                            cell26.innerHTML="N/A";
                            cell27.innerHTML="N/A";


                             O_collect.splice(1,0,null);
                             d_attitude.splice(1,0,null);
                             cust_focus.splice(1,0,null);
                             d_met.splice(1,0,null);
                             dsp_rate.splice(1,0,null);
                             Qual_rate.splice(1,0,null);


                          }

                        if(Third_redflag==0)
                         {

                           cell6.innerHTML="N/A";
                           cell32.innerHTML="N/A";
                           cell33.innerHTML="N/A";
                           cell34.innerHTML="N/A";
                           cell35.innerHTML="N/A";
                           cell36.innerHTML="N/A";
                           cell37.innerHTML="N/A";

                            O_collect.splice(2,0,null);
                            d_attitude.splice(2,0,null);
                            cust_focus.splice(2,0,null);
                            d_met.splice(2,0,null);
                            dsp_rate.splice(2,0,null);
                            Qual_rate.splice(2,0,null);

                         }

                         if(Fourth_redflag==0)
                         {

                           cell7.innerHTML="N/A";
                           cell42.innerHTML="N/A";
                           cell43.innerHTML="N/A";
                           cell44.innerHTML="N/A";
                           cell45.innerHTML="N/A";
                           cell46.innerHTML="N/A";
                           cell47.innerHTML="N/A";

                            O_collect.splice(3,0,null);
                            d_attitude.splice(3,0,null);
                            cust_focus.splice(3,0,null);
                            d_met.splice(3,0,null);
                            dsp_rate.splice(3,0,null);
                            Qual_rate.splice(3,0,null);



                         }

                         if(set_count!=0)
                         {
                        
                         }

                         set_datexaxis(date_col);

                         set_datasets(d_attitude,"Attitude");

                         set_datasets(cust_focus,"CustomerFocus");

                         set_datasets(d_met,"deadlineMet");

                         set_datasets(Qual_rate,"Quality");

                         //var obj=JSON.stringify(datasets);

                         //console.log("Here"+obj);

                         set_datasets(dsp_rate,"Discipline");


                         draw_spline();

                          First_redflag=0;
                          Second_redflag=0;
                          Third_redflag=0;
                          Fourth_redflag=0;

                         /*for(var i=0;i<=3;i++)
                         {
                         d_attitude.push(0);
                         cust_focus.push(0);
                         d_met.push(0);
                         dsp_rate.push(0);
                         Qual_rate.push(0);
                         }*/
                          for(var i=0;i<d_attitude.length;i++)
                          {
                       //    console.log("Data:--in Myfun() -------------->d_attitude:"+d_attitude[i]);
                           }


                     }
                     return new Promise(function(resolve,reject)
                     {
                      snapshot.forEach
                         (
                        function(childsnapshot) {
                                  // count_child=count_child+1;

                             //     console.log(Fourth_FriDate+Third_FriDate+Second_FriDate+First_FriDate);

                            //       console.log("pre-last");
                                   var data=childsnapshot.val();
                                   var cr_date=data.Dateval;

                                   if(Fourth_FriDate==cr_date)
                                   {
                                   cell4.innerHTML=data.Ovaerll;

                                    First_redflag=1;

                                   cell12.innerHTML=data.Attitude;
                                   cell13.innerHTML=data.Discipline;
                                   cell14.innerHTML=data.DeadlineMet;
                                   cell15.innerHTML=data.Quality;
                                   cell16.innerHTML=data.CustomerFocus;
                                   cell17.innerHTML=data.Comment;



                                   date_col.push(Fourth_FriDate);
                                   O_collect.push(data.Ovaerll);
                                   d_attitude.splice(0,0,data.Attitude);
                                   cust_focus.splice(0,0,data.CustomerFocus);
                                   d_met.splice(0,0,data.DeadlineMet);
                                   dsp_rate.splice(0,0,data.Discipline);
                                   Qual_rate.splice(0,0,data.Quality);


                                   }
                                  if(Third_FriDate==cr_date)
                                  {
                                  cell5.innerHTML=data.Ovaerll;
                                  date_col.push(Third_FriDate);
                                  O_collect.push(data.Ovaerll);
                                  d_attitude.splice(1,0,data.Attitude);
                                  cust_focus.splice(1,0,data.CustomerFocus);
                                  d_met.splice(1,0,data.DeadlineMet);
                                  dsp_rate.splice(1,0,data.Discipline);
                                  Qual_rate.splice(1,0,data.Quality);

                                     Second_redflag=1;


                                  cell22.innerHTML=data.Attitude;
                                  cell23.innerHTML=data.Discipline;
                                  cell24.innerHTML=data.DeadlineMet;
                                  cell25.innerHTML=data.Quality;
                                  cell26.innerHTML=data.CustomerFocus;
                                  cell27.innerHTML=data.Comment;
                                  }
                                  if(Second_FriDate==cr_date )
                                  {
                                  cell6.innerHTML=data.Ovaerll;
                                  cell32.innerHTML=data.Attitude;
                                  cell33.innerHTML=data.Discipline;
                                  cell34.innerHTML=data.DeadlineMet;
                                  cell35.innerHTML=data.Quality;
                                  cell36.innerHTML=data.CustomerFocus;
                                  cell37.innerHTML=data.Comment;

                                    Third_redflag=1;

                                 // date_col.splice(2,1,Second_FriDate);
                                 // O_collect.splice(2,1,data.Ovaerll);
                                  d_attitude.splice(2,0,data.Attitude);
                                  cust_focus.splice(2,0,data.CustomerFocus);
                                  d_met.splice(2,0,data.DeadlineMet);
                                  dsp_rate.splice(2,0,data.Discipline);
                                  Qual_rate.splice(2,0,data.Quality);


                                  }
                                  if(First_FriDate==cr_date )
                                  {
                                  cell7.innerHTML=data.Ovaerll;

                                  cell42.innerHTML=data.Attitude;
                                  cell43.innerHTML=data.Discipline;
                                  cell44.innerHTML=data.DeadlineMet;
                                  cell45.innerHTML=data.Quality;
                                  cell46.innerHTML=data.CustomerFocus;
                                  cell47.innerHTML=data.Comment;

                                    Fourth_redflag=1;
                                  d_attitude.splice(3,0,data.Attitude);
                                  cust_focus.splice(3,0,data.CustomerFocus);
                                  d_met.splice(3,0,data.DeadlineMet);
                                  dsp_rate.splice(3,0,data.Discipline);
                                  Qual_rate.splice(3,0,data.Quality);



                                  date_col.push(First_FriDate);
                                  O_collect.push(data.Ovaerll);

                                  }

                                  })
                                  resolve(Myfun());
                                  });
                                  })
                                  })



}
else
{
 /*var tab_adddet=document.getElementById("table_info");
 tab_adddet.remove(Table_Pull);*/
 document.getElementById("EName_print").innerHTML = "";
 document.getElementById("E_Name").innerHTML = "";
 total_count=total_count+1;
 Table_Detail.parentNode.removeChild(Table_Detail);

 if(fax_count==0)
 {
   if(count!=0)
   	{
   	Table_Pull.parentNode.removeChild(Table_Pull);
   	count=0;
   	}
 	var tab_add=document.getElementById("table_info");
   	tab_add.appendChild(Table_all);
   	call_graph();
	// Table_Pull.parentNode.removeChild(Table_Pull);
  //call_All_view();

  }
	  
	else
	{

	}
 }
 }     
 
     function get_table_data(key)
	  {
	  var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+key);
      var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+key;
     // console.log("Rel-----:"+dex);
	 
        dbref
             .once("value")
             .then
                 (
                     function(snapshot)
                     {
					  fax_count++;
                      var data=snapshot.val();
                      //console.log("from call_all()::"+data);
                      var Name=data.Name;
                      var row = Table_all.insertRow(-1);
					  var data = snapshot.val();
					 // console.log("current Key is:"+push_keys[i]);
                      Name_array.push(data.Name);
                      EID_array.push(data.EID);
                      var cell1 = row.insertCell(0);
                      cell1.innerHTML=data.EID;
                      var cell2 = row.insertCell(1);
                      cell2.innerHTML=data.Name;
                      var cell3 = row.insertCell(2);
                      cell3.innerHTML=data.Designation;
                      var tab_add=document.getElementById("table_info");
                      tab_add.appendChild(Table_all);
                      Throw_Name(key,row,data.Name);
                     }
                 )

     }



function Throw_Name(FB_key,row,Name)
{
//console.log("In throw Name");
//console.log("Key:"+FB_key);
var First_redflag=0;
var Second_redflag=0;
var Third_redflag=0;
var Fourth_redflag=0;
var length=Table_all.rows.length;
//console.log("Length of the table all:"+length)

//console.log("1:"+First_FriDate+"2:"+Second_FriDate+"3:"+Third_FriDate+"4:"+Fourth_FriDate);
var cell3 = row.insertCell(3);
cell3.innerHTML="";

var cell4 = row.insertCell(4);
cell4.innerHTML="";

var cell5 = row.insertCell(5);
cell5.innerHTML="";

var cell6 = row.insertCell(6);
cell6.innerHTML="";

var cell7 = row.insertCell(7);

var zero_val=0;
var dxref = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key);
var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key;
//console.log("rel:"+rel);
dxref
 .once("value")
   .then
    (
       function (snapshot)
        {
         //  console.log(snapshot);
           count_snap=count_snap+1;
           function Myfun()
           {
             //  console.log("Name:"+Name+"Array_Length:"+Oall_collect.length)
               for(var i=0;i<dateall_col.length;i++)
               {

              // console.log("Array Value:"+dateall_col[i]);


               }
               if(First_redflag==0)
               {
                 cell3.innerHTML="N/A";
                 if(Oall_collect.length<0)
                 {
                 Oall_collect.push(null);
                 }
                 else
                 {
                 Oall_collect.splice(3,0,null);
                 flag1_bool=true;
                 }
               }

                if(Second_redflag==0)
                {
                cell4.innerHTML="N/A";

                if(Oall_collect.length<0)
                {
                Oall_collect.push(null);
                }
                else
                {
                 Oall_collect.splice(2,0,null);
               //  console.log("Data:"+Oall_collect);

                }
                }

              if(Third_redflag==0)
               {
                //Oall_collect.push("0");
                cell5.innerHTML="N/A";
                if(Oall_collect.length<0)
                 {
                 Oall_collect.push(null);
                 }
                   else
                 {

                    Oall_collect.splice(1,0,null);

                 }


               }

               if(Fourth_redflag==0)
               {
                 cell6.innerHTML="N/A";
                 Oall_collect[3]=zero_val;
                 if(Oall_collect.length<0)
                  {
                  Oall_collect.push(null);
                  }
                   else
                         {
                              Oall_collect.splice(0,0,null);
                         }
               }

                callset_chart(Oall_collect,dateall_col,Name);
                Oall_collect.length=0;
                dateall_col.length=0;
               // cost_labels.length=0;
                var checkbox = document.createElement("INPUT"); //Added for checkbox
                checkbox.type = "checkbox"; //Added for checkbox
                cell7.appendChild(checkbox);
                var rowsclk = Table_all.rows;
                 for (var i = 1; i < Table_all.rows.length; i++) {
                        rowsclk[i].onclick = (function() {
                            var cnt = i;
                            return function() {
                            //  console.log("row"+cnt+" data="+this.cells[2].innerHTML);
                              Throw_ToUpdate(this.cells[1].innerHTML);
                            }
                        })();
                    }
                    if(count_snap==select.length-1)
                                   {
                                  // console.log("value of count:"+count_snap);
                                   call_graph();

                                   }
            }


           return new Promise(function(resolve,reject)
           {
            snapshot.forEach
               (
              function(childsnapshot) {

             // count_child=count_child+1;
            // console.log("pre-last");
             var data=childsnapshot.val();
             cs_Name=data.Name;
			// console.log("chiddata"+data);
             var cr_date=data.Dateval;
           //  console.log("first date:"+First_FriDate);
             if(Fourth_FriDate ==cr_date )
             {
             Fourth_redflag=1;;
             Oall_collect.push(data.Ovaerll);
             cell6.innerHTML=data.Ovaerll;
             dateall_col.push(Fourth_FriDate);
             }
            if(Third_FriDate ==cr_date)
            {
             Third_redflag=1;
            Oall_collect.push(data.Ovaerll);
            cell5.innerHTML=data.Ovaerll;
            dateall_col.push(Third_FriDate);
            }
            if(Second_FriDate==cr_date)
            {

            Second_redflag=1;
            Oall_collect.push(data.Ovaerll);
            cell4.innerHTML=data.Ovaerll;
            dateall_col.push(Second_FriDate);
            }
            if(First_FriDate ==cr_date )
            {

            First_redflag=1
            Oall_collect.push(data.Ovaerll);
            cell3.innerHTML=data.Ovaerll;
            dateall_col.push(First_FriDate);
            }
            })
            resolve(Myfun())
            })
            })
            .then(function(){


            })
}

Table_all.addEventListener("click", function(){
   // console.log("Hello World");

    });

function callset_chart(O_data,O_dates,Name)
{
 //console.log("=================================called set chart=======================");

 var point_data=new Array();
 
 for(var i=0;i<O_data.length;i++)
 {
 point_data.push(O_data[i]);
 }

 for(var i=0;i<O_dates.length;i++)
         {
          labels.push(O_dates[i]);
         }
		 
  for(var i=0;i<point_data.length;i++)
  {
	//  console.log("In all Data:"+Name+":"+point_data[i]);
	  
  }
  var dataset =
             {
                 label:Name,
                 borderColor:getRandomColor(),
                 fill: false,
                 data:point_data
             }

       extendpoints.push(dataset);

}

function set_datasets(rating_val,Name)
{
	
var g_data=new Array();

for(var i=0;i<rating_val.length;i++)
{

//console.log("Rating:"+Name+":"+rating_val[i]);
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
//console.log("Rating in data:"+Name+":"+g_data[i]);
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
	
	  // console.log(obj);
	   
	   /*while(g_data.length > 0) {
			g_data.pop();
			}
			
			for(var i=0;i<g_data.length;i++)
				{
				console.log("after pop in data:"+Name+":"+g_data[i]);
				}*/
}

function set_datexaxis(O_dates)
{
 labels.length=0;
 for(var i=labels.length;i>=0;i--)
          {
        //   console.log("after delete data:"+ labels[i]);
          }
var length_labels=labels.length;
//console.log("length of labels:"+length_labels);
for(var i=0;i<O_dates.length;i++)
          {
          // console.log("Picked date:"+ O_dates[i]);
          }
for(var i=0;i<O_dates.length;i++)
         {
          labels.push(O_dates[i]);
         }
for(var i=0;i<labels.length;i++)
          {
        //   console.log("Graph label date:"+ labels[i]);
          }
   //  console.log("length of Labels:"+labels.length);
}

function call_graph()
{
//.log("called graph function.........................>>>>>>>>>>>>>>>>>>>>>>>>called graph function");
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

              for(var i=0;i<Fix_labels.length;i++)
              {

             // console.log("....labels:"+Fix_labels[i]);
              }
            /* Fix_labels.sort(function(a,b) {
                  return a. - new Date(b.start).getTime()
              });*/
                       //console.log(datasets);
                       var options = {
                           scales: {
                               xAxes: [{
                                   ticks: {
                                       autoSkip : true,

                                   },
                                   }]
                                   }
                                   };
                     //  str = JSON.stringify(extendpoints, null, 4); // (Optional) beautiful indented output.
                      // console.log("Object:"+str);
                         var barChartData = {
                         type:'line',
                         data:{
                             labels : cost_labels,
                             datasets:extendpoints,
                            // options:options
                         }};

                         window.myLine = new Chart(ctx, barChartData);

}

function draw_spline()
{
 var Fix_labels=new Array();
 for(i=0;i<labels.length;i++)
  {
  Fix_labels[i]=labels[i];
  }
  var obj=JSON.stringify(datasets);
  //console.log(obj);
   var barChartData = {
                       type:'line',
                       data:{
                           labels : cost_labels,
                           datasets:datasets
                       }};
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
function Throw_ToUpdate(data)
    {
    var First_redflag=0;
    var Second_redflag=0;
    var Third_redflag=0;
    var Fourth_redflag=0;
   // console.log("Got the data:"+data);
    Hcell4.innerHTML =Fourth_FriDate;
    Hcell5.innerHTML =Third_FriDate;
    Hcell6.innerHTML =Second_FriDate;
    Hcell7.innerHTML =First_FriDate;

     document.getElementById("EName_print").innerHTML = data;
     document.getElementById("E_Name").innerHTML = data;
     var tab_adddet=document.getElementById("TableDetail");
     tab_adddet.appendChild(Table_Detail);

    var dbref = firebase.database().ref("EmployeeDB/EInfo/").orderByChild("Name").equalTo(data);
    dbref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childsnapshot) {
   // console.log("Initial");
    var data = childsnapshot.val();
    var Nameval = data.Name;
    FB_key = childsnapshot.key;
     var dxref = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key);
                var rel="https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+FB_key;
            //    console.log("rel:"+rel);
                dxref
               .once("value")
                 .then
                  (
                     function (snapshot)
                      {
                         function Myfun()
                         {
                             //console.log("should be called last");
                             if(First_redflag==0)
                             {

                               cell4.innerHTML="N/A";
                               cell12.innerHTML="N/A";
                               cell13.innerHTML="N/A";
                               cell14.innerHTML="N/A";
                               cell15.innerHTML="N/A";
                               cell16.innerHTML="N/A";
                               cell17.innerHTML="N/A";

                             }

                              if(Second_redflag==0)
                              {

                                cell5.innerHTML="N/A";
                                cell22.innerHTML="N/A";
                                cell23.innerHTML="N/A";
                                cell24.innerHTML="N/A";
                                cell25.innerHTML="N/A";
                                cell26.innerHTML="N/A";
                                cell27.innerHTML="N/A";
                              }

                            if(Third_redflag==0)
                             {

                               cell6.innerHTML="N/A";
                               cell32.innerHTML="N/A";
                               cell33.innerHTML="N/A";
                               cell34.innerHTML="N/A";
                               cell35.innerHTML="N/A";
                               cell36.innerHTML="N/A";
                               cell37.innerHTML="N/A";
                             }

                             if(Fourth_redflag==0)
                             {

                               cell7.innerHTML="N/A";
                               cell42.innerHTML="N/A";
                               cell43.innerHTML="N/A";
                               cell44.innerHTML="N/A";
                               cell45.innerHTML="N/A";
                               cell46.innerHTML="N/A";
                               cell47.innerHTML="N/A";
                             }


                         }
                         return new Promise(function(resolve,reject)
                         {
                          snapshot.forEach
                             (
                            function(childsnapshot) {
                                      // count_child=count_child+1;

                                       var data=childsnapshot.val();
                                       var cr_date=data.Dateval;
                                       if(Fourth_FriDate==cr_date )
                                       {
                                       cell4.innerHTML=data.Ovaerll;
                                       cell12.innerHTML=data.Attitude;
                                       cell13.innerHTML=data.Discipline;
                                       cell14.innerHTML=data.DeadlineMet;
                                       cell15.innerHTML=data.Quality;
                                       cell16.innerHTML=data.CustomerFocus;
                                       cell17.innerHTML=data.Comment;

                                       First_redflag=1;
                                       }
                                      if(Third_FriDate==cr_date)
                                      {
                                      cell5.innerHTML=data.Ovaerll;
                                      Second_redflag=1;
                                      cell22.innerHTML=data.Attitude;
                                      cell23.innerHTML=data.Discipline;
                                      cell24.innerHTML=data.DeadlineMet;
                                      cell25.innerHTML=data.Quality;
                                      cell26.innerHTML=data.CustomerFocus;
                                      cell27.innerHTML=data.Comment;

                                      }
                                      if(Second_FriDate==cr_date )
                                      {
                                      cell6.innerHTML=data.Ovaerll;
                                      cell32.innerHTML=data.Attitude;
                                      cell33.innerHTML=data.Discipline;
                                      cell34.innerHTML=data.DeadlineMet;
                                      cell35.innerHTML=data.Quality;
                                      cell36.innerHTML=data.CustomerFocus;
                                      cell37.innerHTML=data.Comment;

                                      Third_redflag=1;

                                      }
                                      if(First_FriDate==cr_date )
                                      {
                                      cell7.innerHTML=data.Ovaerll;
                                      Fourth_redflag=1;
                                      cell42.innerHTML=data.Attitude;
                                      cell43.innerHTML=data.Discipline;
                                      cell44.innerHTML=data.DeadlineMet;
                                      cell45.innerHTML=data.Quality;
                                      cell46.innerHTML=data.CustomerFocus;
                                      cell47.innerHTML=data.Comment;

                                      }

                                      })
                                      resolve(Myfun());
                                      });
                                      })
                                      })
                                      })
    }

function fill_dropdown()
{

 var dbref = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo").orderByKey();
 var login = localStorage.getItem("Email");
 dbref
 .once("value")
 	.then
 	(
 		function (snapshot) {
 		function Myfun() {

 			}
 			snapshot.forEach
 			(
 				function (childsnapshot) {
     			var data = childsnapshot.val();

 				var emailval = data.Email;
 				if (login == emailval) {
 					Ikey = childsnapshot.key(); //found key of the employee
                    var admin=data.Admin;
                    Edit_tabel(admin);
 					var dsRef = new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/" + Ikey);
 					dsRef
 					.once("value")
 					.then
 					(
 						function (snapshot) {
 						function axel()
 						{
 						 //call_All(push_keys);

 						 call_fill(push_keys);
 						}
                        return new Promise(function(resolve,reject){
 						snapshot.forEach
 						(
 							function (childsnapshot) {
 							var data = childsnapshot.val();
     						var rptId = data.reportingID;
     						push_keys.push(rptId)


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
function recurse(EmpKey)
{
 console.log("The key in recurese is ------------------>>"+EmpKey);
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
                    console.log("push key befor comapre is:-------->"+EmpKey);
                    console.log("----------------------------------------------------------");
                    console.log("The key from childsnapshot------------------------>"+Ikey);
                    if(Ikey==EmpKey)
                    {
                    console.log("Success");
                    var d2sRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+Ikey);
                    ref=("https://benisonapraisal.firebaseio.com/EmployeeDB/EReport/"+Ikey);
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
                                                         get_table_data(ReportId);
                                                       // push_rkeys.push(ReportId);
                                                        //populate(ReportId);

                                                                var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+ReportId);
                                                                var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+ReportId;
                                                                console.log("first for : Rel-----:"+dex);
                                                                dbref
                                                                .once("value")
                                                                .then
                                                                    (
                                                                        function(snapshot)
                                                                        {
                                                                        var data=snapshot.val();
                                                                        console.log("from get_Names()::"+data);
                                                                        var Name=data.Name;
                                                                        console.log("first for push:------------->"+Name);
                                                                        var option = document.createElement("option");
                                                                        option.text = Name;
                                                                        select.append(option);

                                                                        }
                                                                     );
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

function add_elememts()
{

console.log("Reached in add_elements------------------------->");
for(i=0;i<push_rkeys.length;i++)
	{
        get_table_data(push_rkeys[i]);
        var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_rkeys[i]);
        //var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+push_rkeys[i];
       // console.log("first for : Rel-----:"+dex);
        dbref
        .once("value")
        .then
            (
                function(snapshot)
                {
                var data=snapshot.val();
                console.log("from get_Names()::"+data);
                var Name=data.Name;
                console.log("recurse pushed values Name is:------------->"+Name);
                var option = document.createElement("option");
                option.text = Name;
                select.append(option);

                }
             );

      }


}
function call_fill(push_keys)
{
	option.text = "All";
	select.append(option);

      for(i=0;i<push_keys.length;i++)
      {
         console.log("Key passed to recurse------------------->"+push_keys[i]);
         recurse(push_keys[i]);
      }

	for(i=0;i<push_keys.length;i++)
	{
        var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_keys[i]);
        var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+push_keys[i];
        console.log("first for : Rel-----:"+dex);
        dbref
        .once("value")
        .then
            (
                function(snapshot)
                {
                var data=snapshot.val();
                console.log("from get_Names()::"+data);
                var Name=data.Name;
                console.log("first for push:------------->"+Name);
                var option = document.createElement("option");
                option.text = Name;
                select.append(option);

                }
             );

      }

     for(var i=0;i<push_rkeys.length;i++)
     {

     console.log("The keys in the admin structure:------------>"+push_rkeys[i]);

     }

      var sdiv=document.getElementById("fill_dropdown");
      sdiv.append(select);
      select.addEventListener("change",change_catch);



 document.getElementById("loaderspinner").style.visibility = "hidden";
 call_All_view();

 /*-------------------By default ALL -----------------------------*/
       console.log("reached in the All section");

 }

 function call_All_view()
 {

 	 Hxcell4.innerHTML=First_FriDate;

      Hxcell5.innerHTML=Second_FriDate;

      Hxcell6.innerHTML=Third_FriDate;

      Hxcell7.innerHTML=Fourth_FriDate;

 	  for(var i=0;i<push_keys.length;i++)
      {
       get_table_data(push_keys[i]);
 	  }



  }

function call_All(push_keys)
{
for(var i=0;i<push_keys.length;i++)
{
 var dbref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/"+push_keys[i]);
 var dex='https://benisonapraisal.firebaseio.com/EmployeeDB/EInfo/'+push_keys[i];
 //console.log("Rel-----:"+dex);

   dbref
        .once("value")
        .then
            (
                function(snapshot)
                {
                 var data=snapshot.val();
               //  console.log("from call_all()::"+data);
                 var Name=data.Name;
                 var row = Table_all.insertRow(-1);
                 var data = snapshot.val();
                 FB_key = push_keys[i];
                 Name_array.push(data.Name);
                 EID_array.push(data.EID);
                 var cell1 = row.insertCell(0);
                 cell1.innerHTML=data.EID;
                 var cell2 = row.insertCell(1);
                 cell2.innerHTML=data.Name;
                 var cell3 = row.insertCell(2);
                 cell3.innerHTML=data.Designation;
                 var tab_add=document.getElementById("table_info");
                 tab_add.appendChild(Table_all);
                 Throw_Name(FB_key,row,data.Name);


                }
            )

}
}
function callExport()
{

document.getElementById("Select_emp").style.visibility = "none";
var strUser = select.options[select.selectedIndex].value;
if(strUser=="All")
{
 var tab_add=document.getElementById("table_info");

// Table_Detail.style.display="none"
// tab_add.appendChild(Table_Detail);

 var source = tab_add;
 var doc = new jsPDF('l', 'pt', 'a4');
   var margins = {
         top: 70,
         bottom: 60,
         left: 40,
         width: 100
     };
var specialElementHandlers = {
    '#editor': function(element, renderer){
        return true;
    }
};
doc.fromHTML(
 source,
  margins.left,
  margins.top,
   {
     'width':  margins.width,
     'elementHandlers': specialElementHandlers
 });
  doc.setFontSize(5);
  doc.addPage();
doc.save('Reportig.pdf');
//tab_add.removeChild(Table_Detail);
//Table_Detail.style.display="table"
}
else
{
var tab_add=document.getElementById("Export_Detail");
var source = tab_add;
var doc = new jsPDF('l', 'pt', 'a4');

   var margins = {
         top: 70,
         bottom: 60,
         left: 40,
         width: 100
     };

var specialElementHandlers = {
    '#editor': function(element, renderer){
        return true;
    }
};
doc.fromHTML(
 source,
  margins.left,
  margins.top,
   {
     'width':  margins.width,
     'elementHandlers': specialElementHandlers
 });
  doc.setFontSize(9);
doc.save(strUser+'.pdf');
}

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

function Callraise()
				{
                  console.log("Called in callraise");
                  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                  table = document.getElementById("Table_comp");
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
                    for (i = 1; i <(table.rows.length-1); i++) {
                      //start by saying there should be no switching:
                      shouldSwitch = false;
                      /*Get the two elements you want to compare,
                      one from current row and one from the next:*/
                      x = table.rows[i].cells.item(1).innerHTML.toLowerCase();
                      y = table.rows[i + 1].cells.item(1).innerHTML.toLowerCase();
                      console.log("before compare x is:"+x);
                      console.log("before compare y is:"+y);
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

function Callraise2()
				{
                  console.log("Called in callraise");
                  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                  table = document.getElementById("Table_comp");
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
                      x = table.rows[i].cells.item(2).innerHTML;
                      y = table.rows[i + 1].cells.item(2).innerHTML;
                      /*check if the two rows should switch place,
                      based on the direction, asc or desc:*/
                      if (dir == "asc") {
                        if (x.toLowerCase() > y.toLowerCase()) {
                          //if so, mark as a switch and break the loop:
                          shouldSwitch= true;
                          break;
                        }
                      } else if (dir == "desc") {
                        if (x.toLowerCase() < y.toLowerCase()) {
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
function Callraise1(n)
{

                  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                  table = document.getElementById("Table_comp");
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
                      if(x=="N/A")
                      {
                      x=0;
                      }
                      y = table.rows[i + 1].cells.item(n).innerHTML;
                      if(y=="N/A")
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


function Edit_tabel(Flag)
{
    if(Flag!="True")
         {

           document.getElementById("Main_Menu").children[2].style.display = "none";

         }

}