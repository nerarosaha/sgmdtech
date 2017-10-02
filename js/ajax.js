var xmlhttp
var ID_Tin,ID_Tiennghi
 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function tin_tiennghi_change(idtin,idtiennghi)
{
ID_Tin=idtin
ID_Tiennghi=idtiennghi

 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
  {
  alert ("Your browser does not support XMLHTTP!");
  return;
  } 
 

var url="Tin_Tiennghi.aspx?";
url=url+"&ID_Tin="+idtin + "&ID_Tiennghi="+idtiennghi;
url=url+"&ran="+Math.random();
//url=url+"&str="+str2;
xmlhttp.open("Get",url,true);
//xmlhttp.open("Get",encodeURI(url),true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=stateChanged;

}

 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
function stateChanged()
{

if (xmlhttp.readyState==4)
  {
 
     if(xmlhttp.responseText=="True")
     {
        document.getElementById("span_checkbox_tiennghi_"+ID_Tin+"_"+ID_Tiennghi).innerHTML="<input type=\"checkbox\" checked=\"checked\" onclick=\"tin_tiennghi_change(" + ID_Tin + "," + ID_Tiennghi + ")\"/>";
     }
    else 
     {
        document.getElementById("span_checkbox_tiennghi_"+ID_Tin+"_"+ID_Tiennghi).innerHTML="<input type=\"checkbox\"  onclick=\"tin_tiennghi_change(" + ID_Tin + "," + ID_Tiennghi + ")\"   />";
     }
  }
}



 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var ID_Thongtinchung,ID_Loaidiaoc

function thongtinchung_loaidiaoc_change(idthongtinchung,idloaidiaoc)
{
ID_Thongtinchung=idthongtinchung
ID_Loaidiaoc=idloaidiaoc

 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
  {
  alert ("Your browser does not support XMLHTTP!");
  return;
  } 
 

var url="Thongtinchung_Loaidiaoc.aspx?";
url=url+"&ID_Thongtinchung="+idthongtinchung + "&ID_Loaidiaoc="+idloaidiaoc;
url=url+"&ran="+Math.random();
//url=url+"&str="+str2;
xmlhttp.open("Get",url,true);
//xmlhttp.open("Get",encodeURI(url),true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=stateChanged2;

}

 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
function stateChanged2()
{

if (xmlhttp.readyState==4)
  {
 
     if(xmlhttp.responseText=="True")
     {
        document.getElementById("span_checkbox_loaidiaoc_"+ID_Thongtinchung+"_"+ID_Loaidiaoc).innerHTML="<input type=\"checkbox\" checked=\"checked\" onclick=\"thongtinchung_loaidiaoc_change(" + ID_Thongtinchung + "," + ID_Loaidiaoc + ")\"/>";
     }
    else 
     {
        document.getElementById("span_checkbox_loaidiaoc_"+ID_Thongtinchung+"_"+ID_Loaidiaoc).innerHTML="<input type=\"checkbox\"  onclick=\"thongtinchung_loaidiaoc_change(" + ID_Thongtinchung + "," + ID_Loaidiaoc + ")\"   />";
     }
  }
}






 ////////////////////////////////////////////////////////////////////////////////////

var ID_dacdiemcautruc,ID_huongnha
function dacdiemcautruc_huongnha_change(iddacdiemcautruc,idhuongnha)
{
ID_dacdiemcautruc=iddacdiemcautruc
ID_huongnha=idhuongnha

 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
  {
  alert ("Your browser does not support XMLHTTP!");
  return;
  } 
 

var url="Dacdiemcautruc_Huongnha.aspx?";
url=url+"&ID_Dacdiemcautruc="+iddacdiemcautruc + "&ID_Huongnha="+idhuongnha;
url=url+"&ran="+Math.random();
//url=url+"&str="+str2;
xmlhttp.open("Get",url,true);
//xmlhttp.open("Get",encodeURI(url),true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=stateChanged3;

}

 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
function stateChanged3()
{

if (xmlhttp.readyState==4)
  {
 
     if(xmlhttp.responseText=="True")
     {
        document.getElementById("span_checkbox_huongnha_"+ID_dacdiemcautruc+"_"+ID_huongnha).innerHTML="<input type=\"checkbox\" checked=\"checked\" onclick=\"dacdiemcautruc_huongnha_change(" + ID_dacdiemcautruc + "," + ID_huongnha + ")\"/>";
     }
    else 
     {
        document.getElementById("span_checkbox_huongnha_"+ID_dacdiemcautruc+"_"+ID_huongnha).innerHTML="<input type=\"checkbox\"  onclick=\"dacdiemcautruc_huongnha_change(" + ID_dacdiemcautruc + "," + ID_huongnha + ")\"   />";
     }
  }
}





 ////////////////////////////////////////////////////////////////////////////////////



 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
  
return null;
}

 ////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function accountexist(account)
{

 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
  {
  alert ("Your browser does not support XMLHTTP!");
  return;
  } 
 

var url="kiemtraaccount.aspx?";
url=url+"&account="+account ;
url=url+"&ran="+Math.random();
//url=url+"&str="+str2;
xmlhttp.open("Get",url,true);
//xmlhttp.open("Get",encodeURI(url),true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=stateChanged;
if (xmlhttp.readyState==4)
  {
 
 
    if(  xmlhttp.responseText=="True")
        return true;
    else 
        return false;
  }
  return false;
}

function emailexist(email)
{

 xmlhttp=GetXmlHttpObject();
 if (xmlhttp==null)
  {
  alert ("Your browser does not support XMLHTTP!");
  return;
  } 
 

var url="kiemtraemail.aspx?";
url=url+"&email="+email ;
url=url+"&ran="+Math.random();
//url=url+"&str="+str2;
xmlhttp.open("Get",url,true);
//xmlhttp.open("Get",encodeURI(url),true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=stateChanged;
if (xmlhttp.readyState==4)
  {
 
    if(  xmlhttp.responseText=="True")
    
    {
       document.getElementById('lblthongbao').innerHTML = 'Tài khoản đã tồn tại';
                                        document.getElementById('account').focus();
        return true;
    }    
    else 
    {
           document.getElementById('lblthongbao').innerHTML = 'Tài khoản chua ton tai';
                                        document.getElementById('account').focus();
        return false;  
    }    
  }
  else
  {
     return false;
  }
}

//////////////////////////////

function postReview(productid)
{    
    $.ajax( {
         type : "POST", 
         url : "/WebService.asmx/PostReview", 
         data : "{ProductID:'"+productid+"',hovaten:'"+$("#postreview-hovaten").val().replace("'","")+"',email:'"+$("#postreview-email").val().replace("'","")+"',noidung:'"+$("#postreview-noidung").val().replace("'","")+"',danhgia:'"+$("[name=score]").val()+"'}",                     
         contentType : "application/json; charset=utf-8", 
         dataType : "json", 
         success : function(req) {                       
             alert("Chúc mừng bạn đã gửi nhận xét thành công!")
             $("#postreview-hovaten").val("")
             $("#postreview-email").val("")
             $("#postreview-noidung").val("")
         }, 
         error : function(msg) {
             // err msg
             alert(msg.d);
         }
    });   
}

//////////////////////////////

function redirect2aboutpage(lang)
{    
    $.ajax( {
         type : "POST", 
         url : "/WebService.asmx/changelang", 
         data : "{lang:"+lang+"}",                     
         contentType : "application/json; charset=utf-8", 
         dataType : "json", 
         success : function(req) {                       
           
                window.location = "/gioi-thieu.aspx";
                
         }, 
         error : function(msg) {
             // err msg
             alert(msg.d);
         }
    });   
}