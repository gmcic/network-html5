<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ page session="true" %>
<%
	session.setMaxInactiveInterval(-1);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0014)about:internet -->
<html lang="en">
<!-- 
Smart developers always View Source. 

This application was built using Adobe Flex, an open source framework
for building rich Internet applications that get delivered via the
Flash Player or to desktops via Adobe AIR. 

Learn more about Flex at http://flex.org 
// -->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>&#x4E1A;&#x52A1;&#x8FD0;&#x884C;&#x5065;&#x5EB7;&#x7BA1;&#x7406;&#x4E2D;&#x5FC3;</title>
<style type="text/css">
<!--
html,body{
    margin:0;
    height:100%;
    width:100%; 
}
.STYLE1 {font-family: Arial, Helvetica, sans-serif} 
img, div, table, input { behavior: url(assets/iepngfix.htc) }
-->
</style>

<script src="AC_OETags.js" language="javascript"></script>

<style>
body { margin: 0px; overflow:hidden }
</style>
<script type="text/javascript" src="common\javascript\util.js"></script>
<script type="text/javascript" src="common\javascript\security.js"></script>
<script language="JavaScript" type="text/javascript">
<!--
// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 9;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 28;
var dt = new Date();
var msg = unescape("&#x70B9;&#x201C;&#x786E;&#x5B9A;&#x201D;&#x6309;&#x94AE;&#xFF0C;&#x9000;&#x51FA;RIIL&#x4E1A;&#x52A1;&#x8FD0;&#x884C;&#x5065;&#x5EB7;&#x7BA1;&#x7406;&#x4E2D;&#x5FC3;&#xFF01;".replace(/&#x/g,'%u').replace(/;/g,''));
window.onbeforeunload = function(){
    //e = e || window.event;
    //e.returnValue="";
	return("");
}

window.onunload = function() {
	var callResult = document.getElementById("Index").myFunction();
	<%
		session.invalidate();
	%>
	if(msg != 'null')
		alert(msg);
}

// -----------------------------------------------------------------------------
// -->
function sleep(n)
{
	var start = new Date().getTime();
	while (true)
	{
		if (new Date().getTime() - start>n)
			break;
	}
}
function init()
{

}
function displayReport(str)
{
	window.open("reportdata/RealReport.html?reportdata/"+str);
	//window.open("report/RealReport.jsp?a=reportdata/"+str);
	//window.showModalDialog("report/RealReport.jsp?a=ens/report/"+str, window,"dialogWidth:1024px; //dialogHeight:760px;help:no;resizable:no;status:no;center:yes;");
}

</script>
</head>
<body scroll="no" onload="init()">
<script language="JavaScript" type="text/javascript">
<!--
// Version check for the Flash Player that has the ability to start Player Product Install (6.0r65)
var hasProductInstall = DetectFlashVer(6, 0, 65);

// Version check based upon the values defined in globals
var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

if ( hasProductInstall && !hasRequestedVersion ) {
	// DO NOT MODIFY THE FOLLOWING FOUR LINES
	// Location visited after installation is complete if installation is required
	var MMPlayerType = (isIE == true) ? "ActiveX" : "PlugIn";
	var MMredirectURL = window.location;
    document.title = document.title.slice(0, 47) + " - Flash Player Installation";
    var MMdoctitle = document.title;

	AC_FL_RunContent(
		"src", "playerProductInstall",
		"FlashVars", "MMredirectURL="+MMredirectURL+'&MMplayerType='+MMPlayerType+'&MMdoctitle='+MMdoctitle+"",
		"width", "100%",
		"height", "100%",
		"align", "middle",
		"id", "Index",
		"quality", "high",
		"bgcolor", "#000000",
		"name", "Index",
		"allowScriptAccess","sameDomain",
		"type", "application/x-shockwave-flash",
		"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
} else if (hasRequestedVersion) {
	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed
	AC_FL_RunContent(
			"src", "Index",
			"width", "100%",
			"height", "100%",
			"align", "middle",
			"id", "Index",
			"quality", "high",
			"bgcolor", "#000000",
			"name", "Index",
			"allowScriptAccess","sameDomain",
			"allowFullScreen","true",
			"type", "application/x-shockwave-flash",
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
  } else {  // flash is too old or we can't detect the plugin
    /*var alternateContent = '<br>&nbsp;&nbsp;&nbsp;&nbsp;Alternate HTML content should be placed here. '
  	+ 'This content requires the Adobe Flash Player. '
   	+ '<a href=http://www.adobe.com/go/getflash/>Get Flash</a> <br><br>';
    document.write(alternateContent);  // insert non-flash content
	alternateContent = '&nbsp;&nbsp;&nbsp;&nbsp;&#x672C;&#x5730;&#x670D;&#x52A1;&#x5668;&#x7AEF;&#x4E0B;&#x8F7D; '
   	+ '<a href=/assets/download/install_flash_player.exe>install_flash_player.exe</a> <br><br>';
    document.write(alternateContent);
	alternateContent = '&nbsp;&nbsp;&nbsp;&nbsp;&#x672C;&#x5730;&#x670D;&#x52A1;&#x5668;&#x7AEF;&#x4E0B;&#x8F7D; '
   	+ '<a href=/assets/download/uninstall_flash_player.exe>uninstall_flash_player.exe</a>';
    document.write(alternateContent);*/
	var playerPath = isIE ? "/assets/download/install_flash_player_ax.exe" : "/assets/download/install_flash_player_plugin.exe";
	var alternateContent = 
	'<body style="overflow:hidden;background-image:url(assets/images/bg.jpg);font:"宋体";font-size:13px;color:#0c9afe;'+
	'margin-left:0px;margin-top:0px;margin-right: 0px;margin-bottom:0px;background-repeat:repeat-x;">'+
	'<div style="position: absolute;left:50%;top:50%;width:430px;height:300px;margin-left:-215px;margin-top:-150px;">'+
	'<table width="430" height="355" border="0" cellpadding="0" cellspacing="0" background="assets/line2.png" style="background-repeat:no-repeat;">'+
	'<tr><td height="115" valign="top"><img src="assets/weizhaodao.png" width="370" height="66" /></td></tr>'+
	'<tr><td height="25" valign="top" style="padding-left:58px;font-size:14px;color:#0c9afe;">'+
	'&#x672C;&#x5730;&#x670D;&#x52A1;&#x5668;&#x4E0B;&#x8F7D;&#x20;&#xFF1A;</td></tr>'+
	'<tr><td height="25" style="padding-left:58px;font-size: 14px;"><img src="assets/images/icon/16/flashplayer.gif" width="16" height="15" />'+
	'<a href="'+ playerPath +'" style="color:#0c9afe; text-decoration:none"> FlashPlayer &#x5B89;&#x88C5;&#x7A0B;&#x5E8F;</a></td></tr>'+
	'<tr><td height="25" style="padding-left:58px;font-size: 14px;"><img src="assets/images/icon/16/uninstall.gif" width="16" height="16" />'+
	'<a href="/assets/download/uninstall_flash_player.exe" style="color:#0c9afe; text-decoration:none; "> FlashPlayer &#x5378;&#x8F7D;&#x7A0B;&#x5E8F;</a></td></tr>'+
	'<tr><td height="40" valign="bottom" style="padding-left:58px;font-size: 14px; color:#0c9afe; text-decoration:none;" >'+
	'<a href="http://www.adobe.com/go/getflash/" style="color:#0c9afe; text-decoration:none; "> &#x5B98;&#x65B9;&#x4E0B;&#x8F7D;</a></td></tr>'+
	'<tr><td height="45" align="center" valign="bottom">&nbsp;</td></tr>'+
	'<tr><td height="130" align="center">&nbsp;</td></tr></table></div></body>'
	document.write(alternateContent);
  }
// -->
</script>
<noscript>
  	<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			id="Index" width="100%" height="100%"
			codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab">
			<param name="movie" value="Index.swf" />
			<param name="quality" value="high" />
			<param name="bgcolor" value="#000000" />
			<param name="allowScriptAccess" value="sameDomain" />
			<embed src="Index.swf" quality="high" bgcolor="#000000"
				width="100%" height="100%" name="Index" align="middle"
				play="true"
				loop="false"
				quality="high"
				allowScriptAccess="sameDomain"
				allowFullScreen="true"
				type="application/x-shockwave-flash"
				pluginspage="http://www.adobe.com/go/getflashplayer">
			</embed>
	</object>
</noscript>
</body>
</html>
