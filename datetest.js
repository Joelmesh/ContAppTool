
var First_FriDate= new Date();
var Second_FriDate=new Date();
var Third_FriDate=new Date();
var Fourth_FriDate=new Date();
var lastFri=new Date();
function callfun()
{
                  var seal1;
                  var seal2;
                  var one_day=1000*60*60*24;;
                  var difference_ms;
                  var Diffval;
                  var day_cr=0;
                  var currentdate=new Date();
                  currentdate.setDate(19);
                  var toggle=currentdate.getDay();

                  console.log(toggle);
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

}

             function getNextDates(First_FriDate)
              {

                  var seal1;
                  var seal2;
                  var one_day=1000*60*60*24;;
                  var difference_ms;
                  var Diffval;
                  var day_cr=0;

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


           First_FriDate =  First_FriDate.getDate()+'/'+(First_FriDate.getMonth()+1) +'/'+ First_FriDate.getFullYear();
           Second_FriDate =  Second_FriDate.getDate()+'/'+(Second_FriDate.getMonth()+1) +'/'+ Second_FriDate.getFullYear();
           Third_FriDate =  Third_FriDate.getDate()+'/'+(Third_FriDate.getMonth()+1) +'/'+ Third_FriDate.getFullYear();
           Fourth_FriDate =  Fourth_FriDate.getDate()+'/'+(Fourth_FriDate.getMonth()+1) +'/'+ Fourth_FriDate.getFullYear();

           console.log("First friday:"+First_FriDate);
           console.log("Second Friday:"+Second_FriDate);
           console.log("Third Friday:"+Third_FriDate);
           console.log("Fourth Friday:"+Fourth_FriDate);


              }

