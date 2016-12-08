<!DOCTYPE html>
  <!--
  @brief 登录界面
  -->
  <%@ page contentType="text/html; charset=utf-8" language="java" %>
  <%@ page session="true" %>
    <%
    session.setMaxInactiveInterval(-1);
    %>

    <%
    String type = (String) request.getParameter("type");
    String user = (String) request.getParameter("user");
    String pwd = (String) request.getParameter("pwd");

    if (type == null)
    type = "1";
    if (user == null)
    user = "";
    if (pwd == null)
    pwd = "";
    %>

  <html lang='en'>
  <head>
    <title>FIELD运行健康管理中心 - 登录系统</title>
    <meta content='text/html; charset=utf-8' http-equiv='Content-Type'>
    <link href='favicon.ico' rel='icon' type='image/ico'>
    <link href='assets/stylesheets/stylesheets.css' rel='stylesheet' type='text/css'>
    <link href='assets/plugins/font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
  </head>
  <body class='bg-img-num18' data-settings='open'>
    <div class='container'>
      <div class='login-block'>
        <div class='block block-transparent'>
          <div class='row'>
            <div class='col-md-12'></div>
          </div>

          <form action='j_security_check' id='frm' method='POST' role='form'>
            <div class='content controls npt'>
              <div class='form-row'>
                <div class='col-md-12 text-center'>
                  <img src='assets/images/page-logo.png' width='200px'>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-md-12'>
                  <input id='j_password' name='j_password' type='hidden'>
                  &nbsp;
                </div>
              </div>
              <div class='form-row'>
                <div class='col-md-12'>
                  <div class='input-group'>
                    <div class='input-group-addon'>
                      <span class='icon-user'></span>
                    </div>
                    <input class='form-control' id='j_username' name="j_username" placeholder='帐号' type='text'>
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-md-12'>
                  <div class='input-group'>
                    <div class='input-group-addon'>
                      <span class='icon-key'></span>
                    </div>
                    <input class='form-control' id='jj_password' name="jj_password" placeholder='密码' type='password'>
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-md-6'>
                  <button type='submit' class='btn btn-default btn-block btn-clean' onclick='submitUserName()' >登录1</button>
                </div>
                <div class='col-md-6'>
                  <button type='button'  class='btn btn-default btn-block btn-clean' onclick='closeWnd()' >关闭</button>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-md-12'>
                  <a class='btn btn-link btn-block' href='#'>忘记密码?</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>

<!-- BEGIN JQuery -->
<script src='assets/plugins/jquery/jquery.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/jquery-ui.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/jquery-migrate.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/globalize.js' type='text/javascript'></script>
<!-- BEGIN Bootstrap -->
<script src='assets/plugins/bootstrap/bootstrap.min.js' type='text/javascript'></script>
<script src='assets/plugins/uniform/jquery.uniform.min.js' type='text/javascript'></script>
<!-- BEGIN -->
<script src='assets/javascripts/plugins.js' type='text/javascript'></script>
<script src='assets/javascripts/actions.js' type='text/javascript'></script>
<script src='assets/javascripts/settings.js' type='text/javascript'></script>

<!-- Google Analytics -->
<script>
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
</script>


  <script type="text/javascript" src="common/javascript/util.js"></script>
  <script type="text/javascript" src="common/javascript/security.js"></script>
  <script type="text/javascript">
  <!--
  function isIE7()
  {
  var ua = window.navigator.userAgent.toLowerCase();
  var ie = (ua.indexOf("msie 7") > -1);
  return ie;
  }

  function isMSIE()
  {
  return (navigator.userAgent.indexOf("MSIE") > -1 &&
  !(navigator.userAgent.toLowerCase().indexOf("opera") != -1));
  }

  function reportError(msg, url, line)
  {
  if (msg.indexOf("拒绝访问") >= 0)
  {
  alert("正在配置……\n\n点击“确定”后重新尝试！");
  return true;
  }

  var str = "页面发生脚本错误：\n\n";
  str += "错误：" + msg + "\n行数：" + line;
  //alert(str);
  return true;
  }

  window.onerror = reportError;
  //-->
  </script>
  <script language="javascript">
  <!--
  function init()
  {
  //document.body.style.backgroundImage="url(assets/bg"+(new Date()).getDay()+".jpg)";

  if(isIE7())
  {
  //document.getElementById("bmclogo").style.top = "115";
  //document.getElementById("formdiv").style.marginTop = "300";
  }
  //new ActiveXObject("WScript.Shell").SendKeys("{F11}");
  //document.getElementById("showuser1").style.display = "";

  /*if (!isMSIE())
  {
  var msg = "为了您能正常地使用本系统，<br/>请使用 Internet Explorer (IE) 浏览器登录系统！";
  document.writeln("<br/><center><h1>"+ msg +"</h1></center>");
  return;
  }*/

  if ("<%=type%>" != "1")
  {
  window.alert("登录失败，用户名或密码输入错误！");
  document.getElementById("j_username").value = "";
  document.getElementById("jj_password").value = "";
  document.getElementById("j_password").value = "";
  document.getElementById("j_username").focus();
  }else{
  document.getElementById("j_username").focus();
  }
  }

  function submitUserName()
  {
  var tmp = document.getElementById("jj_password").value;
  document.getElementById("j_password").value = processMD5(tmp);
  setCookie("USER_NAME", document.getElementById("j_username").value);
  setCookie("USER_PWD", document.getElementById("j_password").value);
  setCookie("USER_ADDR", "<%=request.getRemoteAddr()%>");
  setCookie("USER_SESIONID", "<%=request.getSession().getId()%>");
  }

  function closeWnd()
  {
  //window.open('','_parent','');
  window.opener=self;
  window.close();
  }
  //-->
  </script>

