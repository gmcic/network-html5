
// 角色管理
angular.module('app').controller('DashboardController', function($scope, $controller, $filter, $http, commonService) {

    $scope.dropdowns = {};

    $controller('BaseController', {$scope: $scope}); //继承

    /**
     * 公告管理
     * ---------------------------
     * */
    $scope.notificationportal = {

      id: "notification",

      name: "公告管理",

      server: "/api/v2/idcsnotifications",

      callback: {
        list: function () {
        }
      }
    };

    $controller('BaseCRUDController', {$scope: $scope, component: $scope.notificationportal}); //继承

    $scope.notificationportal.dash = function () {

      $scope.dashnotifications = [];

      $http.get(commonService.getBusinessHostname() + this.server).success(function (data, status, headers, config) {

        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();

        var timeValue = ((hours >12) ? hours -12 :hours)

        timeValue += ((minutes < 10) ? ":0" : ":") + minutes

        timeValue += " " +((hours >= 12) ? "下午 " : "上午 " )

        $scope.notificationlasttime = timeValue;

        $scope.dashnotifications = data.data;

        angular.forEach($scope.dashnotifications, function (_notification) {
          _notification.date = _notification.dateTime.substring(5, 11);
          _notification.time = _notification.dateTime.substring(11, 20);
        })
      });
    };

  /**
   * 查看
   * ---------------------------
   * */
  $scope.notificationportal.mores = function (id) {

    // $scope.notificationportal.search();

    $scope.notificationportal.list();

    $("#notification").modal('show');
  };


  $scope.notificationportal.dash();

    /**
     * 待办事项
     * ---------------------------
     * */
    $scope.todoportal = {

      id: "todo",

      name: "待办事项",

      server: "/api/v2/idcstodos",

      callback: {}
    };

    $controller('BaseCRUDController', {$scope: $scope, component: $scope.todoportal}); //继承

    $scope.todoportal.dash = function () {

      $scope.dashtodos = [];

      $http.get(commonService.getBusinessHostname() + this.server).success(function (data, status, headers, config) {

        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();

        var timeValue = ((hours >12) ? hours -12 :hours)

        timeValue += ((minutes < 10) ? ":0" : ":") + minutes

        timeValue += " " +((hours >= 12) ? "下午 " : "上午 " )

        $scope.todolasttime = timeValue;

        $scope.dashtodos = data.data;
      });
    };

    $scope.todoportal.dash();

    // VRV
    $scope.vrvs = [
            {name: '非法外联', data : '12,480', icon: 'icon-globe'},
            {name: '设备未注册', data : '10,140', icon: 'icon-desktop'},
            {name: '保密检测系统未安装', data : '1,204', icon: 'icon-laptop'},
            {name: '未装防病毒软件', data : '322', icon: 'icon-shield'},
            {name: '防病毒软件未最新', data : '814', icon: 'icon-shield'},
            {name: '系统弱口令', data : '584', icon: 'icon-warning-sign'},
            {name: '未安装补丁', data : '358', icon: 'icon-warning-sign'}
        ];


// plugins JS

    /* bootstrap tooltip */
        $(".tip").tooltip({placement: 'top'});
        $(".tipb").tooltip({placement: 'bottom'});
        $(".tipl").tooltip({placement: 'left'});
        $(".tipr").tooltip({placement: 'right'});
    /* eof bootstrap tooltip */

    /* scroll */
    if($("#layout_scroll").length > 0)
        $("#layout_scroll").height($(window).height() - 80);

    if($(".scroll").length > 0) $(".scroll").mCustomScrollbar({advanced: {autoScrollOnFocus: false}});

        $(".modal").on('shown.bs.modal',function(){
            $(this).find('.scroll').mCustomScrollbar('update');
        });

    if($(".scroll-mail").length > 0){
        $(".scroll-mail").height($(window).height() - 185).mCustomScrollbar({advanced: {autoScrollOnFocus: false}});
    }
    /* eof scroll */

    //Bootstrap file input
    if($("input.fileinput").length > 0)
        $("input.fileinput").bootstrapFileInput();
    //END Bootstrap file input

    /* Accordion */
    if($(".accordion").length > 0){
       $(".accordion").accordion({heightStyle: "content"});
       $(".accordion .ui-accordion-header:last").css('border-bottom','0px');
    }
    /* EOF Accordion */

    /* uniform */
    if($("input[type=checkbox]").length > 0 || $("input[type=radio]").length > 0)
       $("input[type=checkbox], input[type=radio]").not('.skip').uniform();
    /* eof uniform */

    /* select2 */
    if($(".select2").length > 0) $(".select2").select2();
    /* eof select2 */

    /* tagsinput */
    if($(".tags").length > 0) $(".tags").tagsInput({width: '100%',height:'auto'});
    if($(".mail_tags").length > 0) $(".mail_tags").tagsInput({width: '100%',height:'auto','defaultText':'add email'});
    /* eof tagsinput */

    /* jQuery UI Datepicker */
    if($(".datepicker").length > 0) $(".datepicker").datepicker({nextText: "", prevText: ""});
    if($(".mdatepicker").length > 0) $(".mdatepicker").datepicker({numberOfMonths: 3,nextText: "", prevText: ""});
    /* EOF jQuery UI Datepicker */

    /* Timepicker */
    if($(".timepicker").length > 0) $(".timepicker").timepicker();
    /* EOF Timepicker */

    /* Datetimepicker */
    if($(".datetimepicker").length > 0) $(".datetimepicker").datetimepicker({nextText: "", prevText: ""});
    /* EOF Datetimepicker */

    /* Datatables */
    if($("table.sortable_simple").length > 0)
        $("table.sortable_simple").dataTable({"iDisplayLength": 5,"bLengthChange": false,"bFilter": false,"bInfo": false,"bPaginate": true});

    if($("table.sortable_default").length > 0)
        $("table.sortable_default").dataTable({"iDisplayLength": 5, "sPaginationType": "full_numbers","bLengthChange": false,"bFilter": false,"bInfo": false,"bPaginate": true, "aoColumns": [ { "bSortable": false }, null, null, null, null]});

    // if($("table.sortable").length > 0)
    //     $("table.sortable").dataTable({"iDisplayLength": 5, "aLengthMenu": [5,10,25,50,100], "sPaginationType": "full_numbers", "aoColumns": [ { "bSortable": false }, null, null, null, null]});
    /* eof Datatables */

    /* knob plugin */
    if($(".knob").length > 0) $(".knob input").knob();
    /* eof knob plugin */

    /* sparkline */
    if($(".sparkline").length > 0)
       $('.sparkline span').sparkline('html', { enableTagOptions: true });
    /* eof sparkline */

    /* CLEditor */
    if($(".cle").length > 0)
        cE = $(".cle").cleditor({width:"100%",height: 230});

    if($(".cleditor").length > 0)
        cEdit = $(".cleditor").cleditor({width:"100%",height: 450});

    if($(".scle").length > 0)
        cEC = $(".scle").cleditor({width:"100%",height: 230,controls: "bold italic underline strikethrough link unlink"})[0].focus();

    $('#modal_mail').on('shown.bs.modal', function () {
        cEC.refresh();
    });
    /* eof CLEditor */

    /* draggable modal */
    if($(".modal-draggable").length > 0){
        $(".modal-draggable").draggable();
    }
    /* eof draggable modal */

    /* Tinymce */
        if($("textarea.tmce").length > 0){
            tinymce.init({
                selector: "textarea.tmce",
                height : 400
            });
        }
        if($("textarea.stmce").length > 0){
            tinymce.init({
                selector: "textarea.stmce",
                toolbar: "bold italic | alignleft aligncenter alignright alignjustify | undo redo",
                menu: [],
                height : 200
            });
        }
    /* eof tinymce */

    /* ValidationEngine */
    if($("#validate").length > 0 || $("#validate_custom").length > 0)
        $("#validate, #validate_custom").validationEngine('attach',{promptPosition : "topLeft"});
    /* EOF ValidationEngine */

    /* Stepy*/
    if($("#wizard").length > 0) $('#wizard').stepy();

    if($("#wizard_validate").length > 0){
        $("#wizard_validate").validationEngine('attach',{promptPosition : "topLeft"});
        $('#wizard_validate').stepy({
            back: function(index) {
                //if(!$("#wizard_validate").validationEngine('validate')) return false; //uncomment if u need to validate on back click
            },
            next: function(index) {
                if(!$("#wizard_validate").validationEngine('validate')) return false;
            },
            finish: function(index) {
                if(!$("#wizard_validate").validationEngine('validate')) return false;
            }
        });
    }
    /* EOF Stepy */

    /* Masked Input */
    if($("input[class^='mask_']").length > 0){
        $("input.mask_tin").mask('99-9999999');
        $("input.mask_ssn").mask('999-99-9999');
        $("input.mask_date").mask('9999-99-99');
        $("input.mask_product").mask('a*-999-a999');
        $("input.mask_phone").mask('99 (999) 999-99-99');
        $("input.mask_phone_ext").mask('99 (999) 999-9999? x99999');
        $("input.mask_credit").mask('9999-9999-9999-9999');
        $("input.mask_percent").mask('99%');
    }
    /* EOF Masked Input */

    /* Syntax Highlight */
    if($("pre[class^=brush]").length > 0){
        SyntaxHighlighter.defaults['toolbar'] = false;
        SyntaxHighlighter.all();
    }
    /* EOF Syntax Highlight */

    /* Fancybox */
    if($(".fancybox").length > 0)
       $(".fancybox").fancybox({padding: 10});
    /* EOF Fancybox */

    /* carousel */
    if($('.carousel').length > 0) $('.carousel').carousel();
    /* eof carousel */

    /* fullcalendar (demo) */

    if($("#calendar").length > 0){

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();


        $('#external-events .external-event').each(function() {
                var eventObject = {title: $.trim($(this).text())};

                $(this).data('eventObject', eventObject);
                $(this).draggable({
                        zIndex: 999,
                        revert: true,
                        revertDuration: 0
                });
        });

        var calendar = $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            events: [{title: 'All Day Event',start: new Date(y, m, 1)},
                     {title: 'Long Event',start: new Date(y, m, d-5),end: new Date(y, m, d-2)},
                     {id: 999,title: 'Repeating Event',start: new Date(y, m, d-3, 16, 0),allDay: false},
                     {id: 999,title: 'Repeating Event',start: new Date(y, m, d+4, 16, 0),allDay: false},
                     {title: 'Meeting',start: new Date(y, m, d, 10, 30),allDay: false},
                     {title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                     {title: 'Birthday Party',start: new Date(y, m, d+1, 19, 0),end: new Date(y, m, d+1, 22, 30),allDay: false},
                     {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}],
            droppable: true,
            selectable: true,
            selectHelper: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true
                    );
                }
                calendar.fullCalendar('unselect');
            },
            drop: function(date, allDay) {

                var originalEventObject = $(this).data('eventObject');

                var copiedEventObject = $.extend({}, originalEventObject);

                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);


                if ($('#drop-remove').is(':checked')) {
                    $(this).remove();
                }

            }
        });


    }

    /* eof fullcalendar (demo) */

    /* popover (demo) */
    $("[data-toggle=popover]").popover();
    /* eof popover (demo) */

    /* slider example(demo) */
    $(".slider_example").slider({range: "min", min: 0, max: 100, value: 50});
    $(".slider_example2").slider({range: true,min: 0,max: 500,values: [ 150, 350 ]});
    $(".slider_example3").slider({orientation: "vertical",range: "min",min: 0,max: 100,value: 50});
    $(".slider_example4").slider({orientation: "vertical",min: 0,max: 500,range: true,values: [ 150, 350 ]});


    if($("#price_rage").length > 0){
        $("#price_rage").slider({range: true,min: 0,max: 3000,values: [ 1000, 2000 ],
                                slide: function(event,ui){
                                    $("#price_amount").html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                                }});
        $("#price_amount").html("$"+$("#price_rage").slider("values",0)+" - $"+$("#price_rage").slider("values",1));
    }
    /* eof slider example(demo) */

    /* slider example(demo) */
    $("#spinner").spinner();
    $("#spinner2").spinner({step: 0.1});
    $("#spinner3").spinner({min: 0,max: 2500,step: 25.15,numberFormat: "C"});
    /* eof slider example(demo) */

    /* button state(demo)*/
    $('#fat-btn').click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000);
    });
    /* eof button state(demo)*/

    /* sortable (demo)*/
    if($("#sortable_example_1").length > 0){
        $("#sortable_example_1").sortable({items: ".list-group-item"});
        $("#sortable_example_1").disableSelection();
    }
    /* eof sortable (demo)*/

    /* selectable (demo)*/
    if($( "#selectable_example_1" ).length > 0){
        $( "#selectable_example_1" ).selectable();
    }
    /* eof selectable (demo)*/


//chart JS

    if($("#dash_chart_1").length > 0){

        var data  = [ [1, 25], [2, 28], [3, 22], [4, 18], [5, 30], [6, 18], [7,14] ];


        // H3C系统告警
        var dash_chart_1 = $.plot($("#dash_chart_1"), [{ data: data, label: "Sales"}],{
                                  series: {lines: { show: true }, points: { show: true }},
                                  grid: { hoverable: true, clickable: true, margin: {left: 110}},
                                  xaxis: {ticks: [[1,'一'],[2,'二'],[3,'三'],[4,'四'],[5,'五'],[6,'六'],[7,'日']]},

                                  legend: {show: false}});
        // UICS告警
        var dash_chart_3 = $.plot($("#dash_chart_3"), [{ data: data, label: "Sales"}],{
                                  series: {lines: { show: true }, points: { show: true }},
                                  grid: { hoverable: true, clickable: true, margin: {left: 110}},
                                  xaxis: {ticks: [[1,'一'],[2,'二'],[3,'三'],[4,'四'],[5,'五'],[6,'六'],[7,'日']]},
                                  legend: {show: false}});

    }

    if($("#dash_chart_2").length > 0){

        var data1  = [ [1, 1023], [2, 1244], [3, 1506], [4, 1330], [5, 1065], [6, 890], [7,650] ];
        var data2  = [ [1, 868], [2, 1485], [3, 1355], [4, 1002], [5, 1200], [6, 755], [7,800] ];
        var data3  = [ [1, 58], [2, 784], [3, 256], [4, 487], [5, 65], [6, 475], [7,414] ];
        var data4  = [ [1, 85], [2, 485], [3, 471], [4, 954], [5, 1200], [6, 351], [7,846] ];
        var data5  = [ [1, 78], [2, 1426], [3, 1547], [4, 456], [5, 486], [6, 256], [7,367] ];
        var data6  = [ [1, 69], [2, 547], [3, 47], [4, 357], [5, 258], [6, 357], [7,186] ];
        var data7  = [ [1, 256], [2, 985], [3, 325], [4, 159], [5, 485], [6, 426], [7,745] ];

        var dash_chart_2 = $.plot($("#dash_chart_2"), [
                { data: data1, label: "非法外联"},
                { data: data2, label: "设备未注册"},
                { data: data3, label: "保密检测系统未安装"},
                { data: data4, label: "未装防病毒软件"},
                { data: data5, label: "防病毒软件未最新"},
                { data: data6, label: "系统弱口令"},
                { data: data7, label: "未安装补丁"}
              ],
              {
                  series: {lines: { show: true }, points: { show: true }},
                  grid: { hoverable: true, clickable: true},
                  xaxis: {max: 7,ticks: [[1,'一'],[2,'二'],[3,'三'],[4,'四'],[5,'五'],[6,'六'],[7,'日']]}
              });

    }

    if($("#chart_line_1").length > 0){
        var sin = [], cos = [], sin2 = [];

        for (var i = 0; i < 14; i += 0.3) {
            sin.push([i, Math.sin(i)]);
            sin2.push([i, Math.sin(i-1.57)]);
            cos.push([i, Math.cos(i)]);
        }
        var chart_line_1 = $.plot($("#chart_line_1"), [{ data: sin, label: "sin(x)"}, { data: cos, label: "cos(x)"}, { data: sin2, label: "sin(y)"}],{
                                  series: {lines: { show: true }, points: { show: true }},
                                  grid: { hoverable: true, clickable: true },
                                  yaxis: { min: -1.1, max: 1.1 } });
    }

    if($("#chart_bar_1").length > 0){

        var data1 = [ [1, 25], [2, 28], [3, 22], [4, 18], [5, 30], [6, 18] ];
        var data2 = [ [1, 15], [2, 22], [3, 16], [4, 12], [5, 25], [6, 7] ];
        var data3 = [ [1, 10], [2, 16], [3, 10], [4, 6], [5, 18], [6, 3] ];


        var chart_bar_1 = $.plot($("#chart_bar_1"), [ { data: data1, label: "Data 1" }, { data: data2, label: "Data 2" }, { data: data3, label: "Data 3" }], {
                                   series: { stack: 0, bars: { show: true, barWidth: 0.8, align: "center"}},
                                   grid: { hoverable: true, clickable: true }});
    }

    if($("#chart_bar_2").length > 0){


        var chart_bar_2 = $.plot($("#chart_bar_2"), [ { data: data1, label: "Data 1" }, { data: data2, label: "Data 2" }, { data: data3, label: "Data 3" }], {
                                   series: { stack: 0,
                                             lines: {show: true,fill: true},
                                             bars: { show: false }},
                                   grid: { hoverable: true, clickable: true }});
    }

    if($("#chart_pie_1").length > 0){

        var data = [];
            data[0] = { label: "Data 1", data: 40 };
            data[1] = { label: "Data 2", data: 30 };
            data[2] = { label: "Data 3", data: 30 };

        $.plot("#chart_pie_1", data, {
            series: {pie: {radius: 1, show: true,
                           label: {show: true, radius: 2/3, formatter: labelFormatter, threshold: 0.1}
                          }
                    },
            legend: {show: false}
        });

    }

    if($("#chart_user_1").length > 0){
        var data1  = [ [1, 45], [2, 35], [3, 57], [4, 75], [5, 80] ];
        var data2  = [ [1, 55], [2, 65], [3, 43], [4, 25], [5, 20], [6, 75], [7,85] ];
        var data3  = [ [6, 25], [7,15] ];

        var chart_user_1 = $.plot($("#chart_user_1"), [{ data: data1, label: "Leo"},{data: data2, label: "Taurus"},{data: data3, label: "Aries"}],{
                                  series: {lines: { show: true }, points: { show: true }},
                                  grid: { hoverable: true, clickable: true},
                                  xaxis: {max: 7,ticks: [[1,'Mon'],[2,'Tue'],[3,'Wed'],[4,'Thu'],[5,'Fri'],[6,'Sat'],[7,'Sun']]}
                              });
    }

    if($("#chart_series_onoff").length > 0){

            var datasets = {
                "usa": {
                        label: "USA",
                        data: [[1988, 483994], [1989, 479060], [1990, 457648], [1991, 401949], [1992, 424705], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
                },
                "russia": {
                        label: "Russia",
                        data: [[1988, 218000], [1989, 203000], [1990, 171000], [1992, 42500], [1993, 37600], [1994, 36600], [1995, 21700], [1996, 19200], [1997, 21300], [1998, 13600], [1999, 14000], [2000, 19100], [2001, 21300], [2002, 23600], [2003, 25100], [2004, 26100], [2005, 31100], [2006, 34700]]
                },
                "uk": {
                        label: "UK",
                        data: [[1988, 62982], [1989, 62027], [1990, 60696], [1991, 62348], [1992, 58560], [1993, 56393], [1994, 54579], [1995, 50818], [1996, 50554], [1997, 48276], [1998, 47691], [1999, 47529], [2000, 47778], [2001, 48760], [2002, 50949], [2003, 57452], [2004, 60234], [2005, 60076], [2006, 59213]]
                },
                "germany": {
                        label: "Germany",
                        data: [[1988, 55627], [1989, 55475], [1990, 58464], [1991, 55134], [1992, 52436], [1993, 47139], [1994, 43962], [1995, 43238], [1996, 42395], [1997, 40854], [1998, 40993], [1999, 41822], [2000, 41147], [2001, 40474], [2002, 40604], [2003, 40044], [2004, 38816], [2005, 38060], [2006, 36984]]
                },
                "denmark": {
                        label: "Denmark",
                        data: [[1988, 3813], [1989, 3719], [1990, 3722], [1991, 3789], [1992, 3720], [1993, 3730], [1994, 3636], [1995, 3598], [1996, 3610], [1997, 3655], [1998, 3695], [1999, 3673], [2000, 3553], [2001, 3774], [2002, 3728], [2003, 3618], [2004, 3638], [2005, 3467], [2006, 3770]]
                },
                "sweden": {
                        label: "Sweden",
                        data: [[1988, 6402], [1989, 6474], [1990, 6605], [1991, 6209], [1992, 6035], [1993, 6020], [1994, 6000], [1995, 6018], [1996, 3958], [1997, 5780], [1998, 5954], [1999, 6178], [2000, 6411], [2001, 5993], [2002, 5833], [2003, 5791], [2004, 5450], [2005, 5521], [2006, 5271]]
                },
                "norway": {
                        label: "Norway",
                        data: [[1988, 4382], [1989, 4498], [1990, 4535], [1991, 4398], [1992, 4766], [1993, 4441], [1994, 4670], [1995, 4217], [1996, 4275], [1997, 4203], [1998, 4482], [1999, 4506], [2000, 4358], [2001, 4385], [2002, 5269], [2003, 5066], [2004, 5194], [2005, 4887], [2006, 4891]]
                }
        };

        var i = 0;
        $.each(datasets, function(key, val) {
                val.color = i;
                ++i;
        });

        var choiceContainer = $("#choices");

        choiceContainer.find("input").click(plotAccordingToChoices);

        function plotAccordingToChoices() {

            var data = [];

            choiceContainer.find("input:checked").each(function () {
                var key = $(this).attr("name");
                if (key && datasets[key]) {
                    data.push(datasets[key]);
                }
            });

            if (data.length > 0) {
                $.plot("#chart_series_onoff", data, {
                    yaxis: {
                        min: 0
                    },
                    xaxis: {
                        tickDecimals: 0
                    }
                });
            }

        }

        plotAccordingToChoices();

    }

    function labelFormatter(label, series) {
        return "<div style='text-shadow: 1px 2px 1px rgba(0,0,0,0.2); font-size: 11px; text-align:center; padding:2px; color: #FFF; line-height: 13px;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

    function showTooltip(x, y, contents) {
        $('<div class="ftooltip">' + contents + '</div>').css({
            position: 'absolute',
            'z-index': '10',
            display: 'none',
            top: y - 20,
            left: x,
            padding: '3px',
            'background-color': 'rgba(0,0,0,0.5)',
            'font-size': '11px',
            'border-radius': '3px',
            color: '#FFF'
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;


    $("#chart_bar_1,#chart_bar_2,#chart_line_1,#dash_chart_1,#dash_chart_2,#chart_user_1").bind("plothover", function (event, pos, item) {

        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $(".ftooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);

                showTooltip(item.pageX, item.pageY,
                            item.series.label + ": " + y);
            }
        }else {
            $(".ftooltip").remove();
            previousPoint = null;
        }

    });

});