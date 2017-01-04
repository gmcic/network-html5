<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ page session="true" %>
<%
  session.setMaxInactiveInterval(-1);
%>
<!DOCTYPE html>
<html lang='en' ng-app='app'>
  <head>
    <title>UICS信息通信一体化管理平台</title>
    <meta content='text/html; charset=utf-8' http-equiv='Content-Type'>
    <link href='assets/stylesheets/stylesheets.css' rel='stylesheet' type='text/css'>
    <link href='assets/plugins/font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
    <link href="/assets/images/favicon.ico" rel="icon" type="image/ico" />
    
  </head>
  <body class='bg-img-num18' data-settings='open'>
    <div class='container theme-green'>
      <div class='row'>
        <div class='col-md-12'>
          <nav class='navbar brb' role='navigation'>
            <div class='navbar-header'>
              <button class='navbar-toggle' data-target='.navbar-ex1-collapse' data-toggle='collapse' type='button'>
                <span class='sr-only'>Toggle navigation</span>
                <span class='icon-reorder'></span>
              </button>
              <a class='navbar-brand' href='index.html'>
                <img height='28px' src='assets/images/page-home-logo.png'>
              </a>
            </div>
            <div class='collapse navbar-collapse navbar-ex1-collapse'>
              <ul class='nav navbar-nav'>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='#/'>
                    <span class='fa fa-home'></span>
                    首页1
                  </a>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-desktop'></span>
                    桌面管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>统计视图</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>告警事件</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>维规事件</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>可能违规事件</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-briefcase'></span>
                    业务管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>业务列表</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>控制台</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>用户组管理</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>业务告警</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-dashboard'></span>
                    运行管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>资源列表</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>资源分组</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>资源类别</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>厂商类别</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>协议参数</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>模型设置</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>ipmac管理</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>配置管理</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-sitemap'></span>
                    拓扑管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>拓扑视图</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>平面图</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>分层图</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>拓扑发现</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-exclamation-triangle'></span>
                    告警中心
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>告警控制台</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>实时告警</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>历史告警</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>告警速查</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>维护记录</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>告警配置</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-university'></span>
                    资产管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>资产统计</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>综合查询</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>导入导出</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-users'></span>
                    值班管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>综合视图</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>值班记录</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>值班巡检</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>交接班</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>排班</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>值班制度</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>值班说明</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-tasks'></span>
                    工单管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>工单统计</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>检修计划</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>紧急抢修</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>我的工单</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>缺陷管理</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-database'></span>
                    机房管理
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>机房概览</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>机房监控</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>机房告警</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>机房报表</a>
                    </li>
                  </ul>
                </li>
                <li class='dropdown'>
                  <a class='dropdown-toggle' data-toggle='dropdown' href='javascript:void'>
                    <span class='fa fa-cog'></span>
                    系统
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a href='bmc.jsp' target='_blank'>用户管理</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>日志管理</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>修改密码</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>邮箱配置</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>短信配置</a>
                    </li>
                    <li>
                      <a href='bmc.jsp' target='_blank'>其他</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class='navbar-form navbar-right' role='search'>
                <div class='form-group'>
                  <input class='form-control' placeholder='search...' type='text'>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div ng-view=''></div>
    </div>
    <!-- Footer -->
    <!-- Javascripts -->
    <!-- 'jquery-ui.min.js', -->
    <!-- '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js', -->
    <!-- = javascript_include_tag 'application' -->
    <!-- Google Analytics -->
    
  </body>
</html>
<!-- BEGIN JQuery -->
<script src='assets/plugins/jquery/jquery.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/jquery-ui.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/jquery-migrate.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery/globalize.js' type='text/javascript'></script>
<!-- BEGIN Bootstrap -->
<script src='assets/plugins/bootstrap/bootstrap.min.js' type='text/javascript'></script>
<!-- BEGIN AngularJS -->
<script src='assets/plugins/angular/angular.js' type='text/javascript'></script>
<script src='assets/plugins/angular-route/angular-route.js' type='text/javascript'></script>
<script src='assets/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js' type='text/javascript'></script>
<!-- BEGIN JQuery 插件 -->
<script src='assets/plugins/jquery/jquery.mousewheel.min.js' type='text/javascript'></script>
<script src='assets/plugins/uniform/jquery.uniform.min.js' type='text/javascript'></script>
<script src='assets/plugins/knob/jquery.knob.js' type='text/javascript'></script>
<script src='assets/plugins/sparkline/jquery.sparkline.min.js' type='text/javascript'></script>
<script src='assets/plugins/datatables/jquery.dataTables.min.js' type='text/javascript'></script>
<!-- BEGIN Float -->
<script src='assets/plugins/flot/jquery.flot.js' type='text/javascript'></script>
<script src='assets/plugins/flot/jquery.flot.resize.js' type='text/javascript'></script>
<!-- BEGIN -->
<script src='assets/javascripts/plugins.js' type='text/javascript'></script>
<script src='assets/javascripts/actions.js' type='text/javascript'></script>
<script src='assets/javascripts/charts.js' type='text/javascript'></script>
<script src='assets/javascripts/settings.js' type='text/javascript'></script>
<!-- BEGIN 文件上传 PLUGINS -->
<script src='assets/plugins/fancybox/source/jquery.fancybox.pack.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/vendor/tmpl.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/vendor/load-image.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/vendor/canvas-to-blob.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.iframe-transport.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-process.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-image.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-audio.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-video.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-validate.js' type='text/javascript'></script>
<script src='assets/plugins/jquery-file-upload/js/jquery.fileupload-angular.js' type='text/javascript'></script>
<!-- / Fiona Core -->
<script src='assets/javascripts/services.js' type='text/javascript'></script>
<script src='assets/javascripts/application.js' type='text/javascript'></script>
<script src='assets/javascripts/directive.js' type='text/javascript'></script>
<script src='assets/javascripts/BaseController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/DashboardController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
<script src='assets/javascripts/controllers/basic/PersonnelController.js' type='text/javascript'></script>
