function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + 
    ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value+ "; path=/";
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

/* function checkCookie(c_name) {     
    username = getCookie(c_name);     
    console.log(username);     
    if (username != null && username != "")     
    { return true; }     
    else     
    { return false;  }
}

function clearCookie(name) {     
    setCookie(name, "", -1); 
} */

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
// 获取音乐是否播放
song.onpause=function(){
    setCookie('ispaused', true);
}
song.onplaying=function(){
    setCookie('ispaused', false);
}
var ispaused = getCookie('ispaused');

function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        if(ispaused=='false'){song.play()}
        played = true;
        }
        else {
        played = true;
        }
    }
    else {
        setCookie('timePlayed', song.currentTime);   
    }
}
setInterval(update,1000); 



