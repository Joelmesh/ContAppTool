						
						var sel = document.createElement('select');
						sel.setAttribute("class", "form-control");
						var opt = document.createElement('option');
						var opt1 = document.createElement('option');
						var opt2 = document.createElement('option');
						var opt3 = document.createElement('option');
						window.onload = function()
						{
						     firebase.auth().onAuthStateChanged(function(user) {
                            if (user) {
                              // User is signed in.
                               Populate();
                            } else {
                              // No user is signed in.
                               window.location.href="../index.html";

                            }
                          });

						};
						function Populate()
						{


						document.getElementById("overall_disp").style.visibility = "hidden";
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
						var day_cr=0;
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
                                        day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Second_FriDate=new Date();
                                        Second_FriDate.setDate(First_FriDate.getDate()-38);
                                        }
                                         day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                         Second_FriDate=new Date();
                                         Second_FriDate.setDate(First_FriDate.getDate()-37);
                                        }
                                         day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                           Second_FriDate=new Date();
                                           Second_FriDate.setDate(First_FriDate.getDate()-36);
                                        }
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
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                        }
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                        }
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                        }
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
                                          day_cr=Fourth_FriDate.getDay();
                                          if(day_cr!=5)
                                          {
                                          Fourth_FriDate=new Date();
                                          Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                          }
                                           day_cr=Fourth_FriDate.getDay();
                                           if(day_cr!=5)
                                           {
                                           Fourth_FriDate=new Date();
                                           Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                           }
                                           day_cr=Fourth_FriDate.getDay();
                                           if(day_cr!=5)
                                           {
                                            Fourth_FriDate=new Date();
                                            Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                           }
                                         }
                                        coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

                                         break;

                    case 2:
                                      First_FriDate.setDate(currentdate.getDate()-4);//first friday
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
                                        day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Second_FriDate=new Date();
                                        Second_FriDate.setDate(First_FriDate.getDate()-38);
                                        }
                                         day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                         Second_FriDate=new Date();
                                         Second_FriDate.setDate(First_FriDate.getDate()-37);
                                        }
                                         day_cr=Second_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                           Second_FriDate=new Date();
                                           Second_FriDate.setDate(First_FriDate.getDate()-36);
                                        }
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
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                        }
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                        }
                                        day_cr=Third_FriDate.getDay();
                                        if(day_cr!=5)
                                        {
                                        Third_FriDate=new Date();
                                        Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                        }
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
                                          day_cr=Fourth_FriDate.getDay();
                                          if(day_cr!=5)
                                          {
                                          Fourth_FriDate=new Date();
                                          Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                          }
                                           day_cr=Fourth_FriDate.getDay();
                                           if(day_cr!=5)
                                           {
                                           Fourth_FriDate=new Date();
                                           Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                           }
                                           day_cr=Fourth_FriDate.getDay();
                                           if(day_cr!=5)
                                           {
                                            Fourth_FriDate=new Date();
                                            Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                           }
                                         }
                                        coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

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
                                       Second_FriDate.setDate(First_FriDate.getDate()-35);
                                       day_cr=Second_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                       Second_FriDate=new Date();
                                       Second_FriDate.setDate(First_FriDate.getDate()-38);
                                       }
                                        day_cr=Second_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                        Second_FriDate=new Date();
                                        Second_FriDate.setDate(First_FriDate.getDate()-37);
                                       }
                                        day_cr=Second_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                          Second_FriDate=new Date();
                                          Second_FriDate.setDate(First_FriDate.getDate()-36);
                                       }
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
                                       day_cr=Third_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                       Third_FriDate=new Date();
                                       Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                       }
                                       day_cr=Third_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                       Third_FriDate=new Date();
                                       Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                       }
                                       day_cr=Third_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                       Third_FriDate=new Date();
                                       Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                       }
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
                                         day_cr=Fourth_FriDate.getDay();
                                         if(day_cr!=5)
                                         {
                                         Fourth_FriDate=new Date();
                                         Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                         }
                                          day_cr=Fourth_FriDate.getDay();
                                          if(day_cr!=5)
                                          {
                                          Fourth_FriDate=new Date();
                                          Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                          }
                                          day_cr=Fourth_FriDate.getDay();
                                          if(day_cr!=5)
                                          {
                                           Fourth_FriDate=new Date();
                                           Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                          }
                                        }

                                       coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

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
                                   Second_FriDate.setDate(First_FriDate.getDate()-35);
                                   day_cr=Second_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Second_FriDate=new Date();
                                   Second_FriDate.setDate(First_FriDate.getDate()-38);
                                   }
                                    day_cr=Second_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                    Second_FriDate=new Date();
                                    Second_FriDate.setDate(First_FriDate.getDate()-37);
                                   }
                                    day_cr=Second_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                      Second_FriDate=new Date();
                                      Second_FriDate.setDate(First_FriDate.getDate()-36);
                                   }
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
                                   day_cr=Third_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Third_FriDate=new Date();
                                   Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                   }
                                   day_cr=Third_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Third_FriDate=new Date();
                                   Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                   }
                                   day_cr=Third_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Third_FriDate=new Date();
                                   Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                   }
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
                                     day_cr=Fourth_FriDate.getDay();
                                     if(day_cr!=5)
                                     {
                                     Fourth_FriDate=new Date();
                                     Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                     }
                                      day_cr=Fourth_FriDate.getDay();
                                      if(day_cr!=5)
                                      {
                                      Fourth_FriDate=new Date();
                                      Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                      }
                                      day_cr=Fourth_FriDate.getDay();
                                      if(day_cr!=5)
                                      {
                                       Fourth_FriDate=new Date();
                                       Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                      }
                                    }

                                   coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

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
                                    Second_FriDate.setDate(First_FriDate.getDate()-35);
                                    day_cr=Second_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Second_FriDate=new Date();
                                    Second_FriDate.setDate(First_FriDate.getDate()-38);
                                    }
                                     day_cr=Second_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                     Second_FriDate=new Date();
                                     Second_FriDate.setDate(First_FriDate.getDate()-37);
                                    }
                                     day_cr=Second_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                       Second_FriDate=new Date();
                                       Second_FriDate.setDate(First_FriDate.getDate()-36);
                                    }
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
                                    day_cr=Third_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Third_FriDate=new Date();
                                    Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                    }
                                    day_cr=Third_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Third_FriDate=new Date();
                                    Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                    }
                                    day_cr=Third_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Third_FriDate=new Date();
                                    Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                    }
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
                                      day_cr=Fourth_FriDate.getDay();
                                      if(day_cr!=5)
                                      {
                                      Fourth_FriDate=new Date();
                                      Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                      }
                                       day_cr=Fourth_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                       Fourth_FriDate=new Date();
                                       Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                       }
                                       day_cr=Fourth_FriDate.getDay();
                                       if(day_cr!=5)
                                       {
                                        Fourth_FriDate=new Date();
                                        Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                       }
                                     }

                                     coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

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
                                 day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Second_FriDate=new Date();
                                 Second_FriDate.setDate(First_FriDate.getDate()-38);
                                 }
                                  day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                  Second_FriDate=new Date();
                                  Second_FriDate.setDate(First_FriDate.getDate()-37);
                                 }
                                  day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                    Second_FriDate=new Date();
                                    Second_FriDate.setDate(First_FriDate.getDate()-36);
                                 }
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
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                 }
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                 }
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                 }
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
                                   day_cr=Fourth_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Fourth_FriDate=new Date();
                                   Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                   }
                                    day_cr=Fourth_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Fourth_FriDate=new Date();
                                    Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                    }
                                    day_cr=Fourth_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                     Fourth_FriDate=new Date();
                                     Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                    }
                                  }

                                 coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

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
                                 day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Second_FriDate=new Date();
                                 Second_FriDate.setDate(First_FriDate.getDate()-38);
                                 }
                                  day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                  Second_FriDate=new Date();
                                  Second_FriDate.setDate(First_FriDate.getDate()-37);
                                 }
                                  day_cr=Second_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                    Second_FriDate=new Date();
                                    Second_FriDate.setDate(First_FriDate.getDate()-36);
                                 }
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
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-38);
                                 }
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-37);
                                 }
                                 day_cr=Third_FriDate.getDay();
                                 if(day_cr!=5)
                                 {
                                 Third_FriDate=new Date();
                                 Third_FriDate.setDate(Second_FriDate.getDate()-36);
                                 }
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
                                   day_cr=Fourth_FriDate.getDay();
                                   if(day_cr!=5)
                                   {
                                   Fourth_FriDate=new Date();
                                   Fourth_FriDate.setDate(Third_FriDate.getDate()-38);
                                   }
                                    day_cr=Fourth_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                    Fourth_FriDate=new Date();
                                    Fourth_FriDate.setDate(Third_FriDate.getDate()-37);
                                    }
                                    day_cr=Fourth_FriDate.getDay();
                                    if(day_cr!=5)
                                    {
                                     Fourth_FriDate=new Date();
                                     Fourth_FriDate.setDate(Third_FriDate.getDate()-36);
                                    }
                                  }
                                   console.log("first friday:"+First_FriDate);
                                   console.log("Second Friday:"+Second_FriDate);
                                   console.log("Third:"+Third_FriDate);
                                   console.log("Fourth:"+Fourth_FriDate);

                                   coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);

                                   break;
				
					}
						var Name=localStorage.getItem("EName");
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
											 if(Nameval==Name)
											 {
											 Ikey=childsnapshot.key();
											  var data=childsnapshot.val();
                                               var Admin=data.Admin;
                                                Edit_tabel(Admin);
												 var dxRef=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+Ikey);
												 dxRef
													.once("value")
														.then
														(
															function(snapshot)
															{
															if (snapshot.hasChild(Ikey))
															 {
																
																				 
												             }
															 else
															 {
																 
																call_NewDates(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate);
																 
															 }
																				  
																snapshot.forEach
																(
										
																	function(childsnapshot)
																		{
																		var data=childsnapshot.val();
																		var Rtdate=data.Dateval;
																		for (i = 0; i < sel.options.length; i++)
																		{
																			var datein=sel.options[i].value;
																			if( datein==Rtdate)
																			
																			{
																				 sel.options[i].disabled = true;
																			}
																		}
																				var svTable = document.getElementById("Datehold");
																				console.log("Hello");
																				svTable.appendChild(sel);
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
						
							function coverttoshort(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate)
				{
				
					  First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
					  Second_FriDate =  Second_FriDate.getDate()+'/'+(Second_FriDate.getMonth()+1) +'/'+ Second_FriDate.getFullYear();
					  Third_FriDate =  Third_FriDate.getDate()+'/'+(Third_FriDate.getMonth()+1) +'/'+ Third_FriDate.getFullYear();
					  Fourth_FriDate =  Fourth_FriDate.getDate()+'/'+(Fourth_FriDate.getMonth()+1) +'/'+ Fourth_FriDate.getFullYear();

						opt.text=First_FriDate;
						sel.append(opt);
						
						opt1.text=Second_FriDate;
						sel.append(opt1);
						
						opt2.text=Third_FriDate;
						sel.append(opt2);
						
						opt3.text=Fourth_FriDate;
						sel.append(opt3);
						sel.addEventListener("change",change_catch);
						
					 
				}	
						function dynamicdate()
						{
						
							
						}
						
						
						function callName()
						{
							var Email=localStorage.getItem("Email");
							document.write(Email);
						}

						function call()
						{
							var NameEmp=localStorage.getItem("EName");
							document.write(NameEmp);
						}
						
					function Savedata()
						{
						var dc1,dc2,dc3,dc4,dc5;
						dc1=0;dc2=0;dc3=0;dc4=0;dc5=0;
						//getting the value when stars for discipline are selecetd
						var dbRef= new Firebase("https://benisonapraisal.firebaseio.com/");
						if(document.getElementById('star51').checked)
							{
							   dc5=document.getElementById("star51").value;
							}
						if(document.getElementById('star41').checked)
							{
							   dc4=document.getElementById("star41").value;
							}
						if(document.getElementById('star31').checked)
							{
							   dc3=document.getElementById("star31").value;
							}
						if(document.getElementById('star21').checked)
							{
							   dc2=document.getElementById("star21").value;
							}
						
						if(document.getElementById('star11').checked)
							{
							   dc1=document.getElementById("star11").value;
							}
							
							dcVal=dc1+dc2+dc3+dc4+dc5;
							var dcValTrial=dcVal.replace(/^0+|0+$/g, "");

	//********************************* End of stars for Discipline ************************************************//
	
	//********************************** reading stars for attitude ***********************************************//
						dc1=0;dc2=0;dc3=0;dc4=0;dc5=0;
					
		
						if(document.getElementById('star52').checked)
							{
							   dc5=document.getElementById("star52").value;
							}
						if(document.getElementById('star42').checked)
							{
							   dc4=document.getElementById("star42").value;
							}
						if(document.getElementById('star32').checked)
							{
							   dc3=document.getElementById("star32").value;
							}
						if(document.getElementById('star22').checked)
							{
							   dc2=document.getElementById("star22").value;
							}
						
						if(document.getElementById('star12').checked)
							{
							   dc1=document.getElementById("star12").value;
							}
							
							dcVal=0;
							dcVal=dc1+dc2+dc3+dc4+dc5;
							var dAttitude=dcVal.replace(/^0+|0+$/g, "");


//***************************** Completed reading star values for attitude ***************************************************//

//****************************** started reading star values for  Quality of work ********************************************//
							
							
						dc1=0;dc2=0;dc3=0;dc4=0;dc5=0;
					
		
						if(document.getElementById('star53').checked)
							{
							   dc5=document.getElementById("star53").value;
							}
						if(document.getElementById('star43').checked)
							{
							   dc4=document.getElementById("star43").value;
							}
						if(document.getElementById('star33').checked)
							{
							   dc3=document.getElementById("star33").value;
							}
						if(document.getElementById('star23').checked)
							{
							   dc2=document.getElementById("star23").value;
							}
						
						if(document.getElementById('star13').checked)
							{
							   dc1=document.getElementById("star13").value;
							}
							
							dcVal=0;
							dcVal=dc1+dc2+dc3+dc4+dc5;
							var dQuality=dcVal.replace(/^0+|0+$/g, "");

//*********************************completed reading star values for Quality*******************************//

//*********************************started to read star values for Met Deadline**************************//

						dc1=0;dc2=0;dc3=0;dc4=0;dc5=0;
					
		
						if(document.getElementById('star54').checked)
							{
							   dc5=document.getElementById("star54").value;
							}
						if(document.getElementById('star44').checked)
							{
							   dc4=document.getElementById("star44").value;
							}
						if(document.getElementById('star34').checked)
							{
							   dc3=document.getElementById("star34").value;
							}
						if(document.getElementById('star24').checked)
							{
							   dc2=document.getElementById("star24").value;
							}
						
						if(document.getElementById('star14').checked)
							{
							   dc1=document.getElementById("star14").value;
							}
							
							dcVal=0;
							dcVal=dc1+dc2+dc3+dc4+dc5;
							var dMLine=dcVal.replace(/^0+|0+$/g, "");

//******************************** completed reading the values for Met Deadline stars **************************************//	

//********************************* started reading the values for Customer Focus *****************************************//
							
							dc1=0;dc2=0;dc3=0;dc4=0;dc5=0;
					
		
						if(document.getElementById('star55').checked)
							{
							   dc5=document.getElementById("star55").value;
							}
						if(document.getElementById('star45').checked)
							{
							   dc4=document.getElementById("star45").value;
							}
						if(document.getElementById('star35').checked)
							{
							   dc3=document.getElementById("star35").value;
							}
						if(document.getElementById('star25').checked)
							{
							   dc2=document.getElementById("star25").value;
							}
						
						if(document.getElementById('star15').checked)
							{
							   dc1=document.getElementById("star15").value;
							}
							
							dcVal=0;
							dcVal=dc1+dc2+dc3+dc4+dc5;
							var dCfocus=dcVal.replace(/^0+|0+$/g, "");

//********************************** completed -- Customer-focus-- *********************************//
					findkey(dcValTrial,dAttitude,dQuality,dMLine,dCfocus);
						}
						
					function findkey(d1val,d2val,d3val,d4val,d5val)
					{
						var dvval=parseInt(d1val)+parseInt(d2val)+parseInt(d3val)+parseInt(d4val)+parseInt(d5val);
						
						var selDate = sel.options[sel.selectedIndex].text;
										
						localStorage.setItem("SelectedDate",selDate);

						dvval=dvval/5;
						
						var Name=localStorage.getItem("EName");
						
						var Newkeyval;

						var Message;
						
						Message=document.getElementById('Msgbox').value;

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
										
											 if(Nameval==Name)
											 {
											 Ikey=childsnapshot.key();

											 var dbxref=new Firebase("https://benisonapraisal.firebaseio.com/EmployeeDB/EApraise/"+Ikey);
											
												var RNref = 
												dbxref
												.push(
														{
														Dateval:selDate,
														Discipline:d1val,
														Attitude: d2val,
														Quality: d3val,
														DeadlineMet:d4val,
														CustomerFocus:d5val,
														//Initiative:d6val,
														Ovaerll:dvval,
														Comment:Message,
														Name:Nameval
														}
													 );
												if(RNref)
												{
													//alert("Saved to database,Overall Rating is : "+dvval);

													write(dvval);
                                                    window.location.href="dashboard.html";
												
												}
											  }
										}
									);

								}
								
							);
					
					
					}
					
					
					
					function write(Overall)
					{
						
					document.getElementById("overall_disp").style.visibility = "visible";
						
					var dxdiv=document.getElementById('Overh');
					
					dxdiv.innerHTML = Overall;
						
						
					}	
					
					function callLabel()
					{
						
						for(i=1;i<=5;i++)
						{	
						
							for(j=1;j<=5;j++)
							{
								if(document.getElementById('star'+[i]+[j]).checked)
								{
									if(j==2)
									var flowdiv=document.getElementById('ratedisplayAtt');
								
									if(j==3)
									var flowdiv=document.getElementById('ratedisplayQual');
								
									if(j==4)
									var flowdiv=document.getElementById('placeholdMET');
									
									if(j==5)
									var flowdiv=document.getElementById('Cfocus');
								
									if(j==1)
									var flowdiv=document.getElementById('placeDcsp');
								
									
									
									if(i==5)
									{
									console.log("i:"+i+"j:"+j);
									flowdiv.innerHTML ='Starperformer';
									}
									
									if(i==4)
									{
									console.log("i:"+i+"j:"+j);
									flowdiv.innerHTML ='Good-effort';
									}
									
									if(i==3)
									{
									console.log("i:"+i+"j:"+j);
									flowdiv.innerHTML ='Appreciable';
									}
									
									if(i==2)
									{	
									console.log("i:"+i+"j:"+j);
									flowdiv.innerHTML ='Could do better';
									}
									
									if(i==1)
									{
									console.log("i:"+i+"j:"+j);
									flowdiv.innerHTML ='Barely made it!';
									}
									
								}
							}
						}	
						
							
						
						
					}
					
					
					function call_NewDates(First_FriDate,Second_FriDate,Third_FriDate,Fourth_FriDate)
					{
				
						var svTable = document.getElementById("Datehold");
						console.log("Hello");
						svTable.appendChild(sel);
						
			
					}
						
						
					function callLogout()
					{
						firebase.auth().signOut().then(function()
						{
						alert("Do you wish to Log out");
						window.location.href="../index.html";	
						
						});
					}
						
						
					
					function change_catch()
					{
					document.getElementById('star51').checked=false;
                    document.getElementById('star41').checked=false;
                    document.getElementById('star31').checked=false;
                    document.getElementById('star21').checked=false;
                    document.getElementById('star11').checked=false;
                    document.getElementById('star52').checked=false;
                    document.getElementById('star42').checked=false;
                    document.getElementById('star32').checked=false;
                    document.getElementById('star22').checked=false;
                    document.getElementById('star12').checked=false;
                    document.getElementById('star53').checked=false;
                    document.getElementById('star43').checked=false;
                    document.getElementById('star33').checked=false;
                    document.getElementById('star23').checked=false;
                    document.getElementById('star13').checked=false;
                    document.getElementById('star54').checked=false;
                    document.getElementById('star44').checked=false;
                    document.getElementById('star34').checked=false;
                    document.getElementById('star24').checked=false;
                    document.getElementById('star14').checked=false;
                    document.getElementById('star55').checked=false;
                    document.getElementById('star45').checked=false;
                    document.getElementById('star35').checked=false;
                    document.getElementById('star25').checked=false;
                    document.getElementById('star15').checked=false;


                    var flowdiv1=document.getElementById('ratedisplayAtt');
                    var flowdiv2=document.getElementById('ratedisplayQual');
                    var flowdiv3=document.getElementById('placeholdMET');
                    var flowdiv4=document.getElementById('Cfocus');
                    var flowdiv5=document.getElementById('placeDcsp');
                    flowdiv1.innerHTML ='';
                    flowdiv2.innerHTML ='';
                    flowdiv3.innerHTML ='';
                    flowdiv4.innerHTML ='';
                    flowdiv5.innerHTML ='';

					}



function Edit_tabel(Flag)
{
    if(Flag!="True")
         {
                 //tb.getElementsByTagName("th")[3].style.display = "none";
              document.getElementById("Main_Menu").children[2].style.display = "none"
         }

}