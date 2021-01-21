(this["webpackJsonpkaplan.pro"]=this["webpackJsonpkaplan.pro"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"about_1":"Kaplan offers a free and open source CAT tool for linguists. Having started out as a hobby project by a linguist, the project has come a long way.","about_2":"The Python library kaplan (and the desktop app Kaplan Desktop that is built around it) can handle .docx, .odp, .ods, .odt, .po, .sdlxliff, .txt and .xliff files. The bilingual files created by Kaplan are .kxliff - a slightly modified version of .xliff v2.1 - meaning any CAT tool that handles .xliff v2.1 will easily handle .kxliff files.","about_3":"Kaplan uses the same format for translation memories and termbases, and offers the ability to import (.xliff and .csv) and export (.xliff).","about_4":"While the idea of Kaplan was conceived for use by individual linguists, it is also equipped for use by teams.","about_5":"A recent Kaplan Desktop-only feature allows linguists to use a MySQL database as a cloud TM server.","about_6":"Linguists may also create project/return packages.","links_header":"Links:","links_1":"Microsoft Store","links_2":"Releases","links_3":"kaplanpy Github repository","links_4":"Kaplan Desktop Github repository","docs_header":"Docs","projects_header":"Projects","new_project_header":"Create a project","new_project_step_1_html":"Under the <b>Projects</b> tab, click <b>New Project</b>","new_project_step_1_alt":"New project button","new_project_step_2_1":"Fill in the fields.","new_project_step_2_2":"The first instance of Translation Memories is for local translation memories while the second one is for cloud translation memories stored in your MySQL server.","new_project_done_html":"Once done, the window will close and the <b>Projects</b> tab will list the new project. Double-click the project to access the <b>Files</b> tab.","new_project_done_alt":"Projects tab with project","create_project_package_header":"Create a project package","create_project_package_step_1_html":"While in the <b>Files</b> tab, click the <b>Create Project Package</b> button and select a target path for the project package.","create_project_package_step_1_alt":"Files tab with Create Project button","create_project_package_step_2":"A list of files will be displayed. Slect the one(s) you wish to include in the project package.","nota_bene":"NB:","create_project_package_nb":"Project packages include the local translation memories and termbases associated with them, but the cloud connection is lost in the process.","import_project_header":"Import a project","import_project_step_1_html":"In the <b>Projects</b> tab, click <b>Import Project</b>","import_project_step_1_alt":"Import Project button","import_project_step_2":"Select the project package you wish to import and then choose an empty directory for the project.","create_return_package_header":"Create a return package","create_return_package_html":"Imported projects do not have the <b>Create Project Package</b> button.","create_return_package_step_1_html":"Click <b>Create Return Package</b> and select a target path for the project package.","create_return_package_step_1_alt":"Create Return Package button","create_return_package_step_2":"A list of files will be displayed. Slect the one(s) you wish to include in the return package.","update_from_return_package_header":"Update from a return package","update_from_return_package_html":"Projects, from which a project paclage was created, will feature an additional button: <b>Update From Package</b>","update_from_return_package_step_1_html":"Click <b>Update From Package</b> and select the package.","update_from_return_package_step_1_alt":"Update From Package button","update_from_return_package_step_2":"Select the target files from the package.","update_from_return_package_done":"Kaplan will update target files with the ones selected.","files_header":"Files","file_header":"Working on a file","file_html":"Double-clicking a file while in the <b>Files</b> tab opens it in the <b>Editor</b> tab.","generate_target_header":"Generate target translations","generate_target_html":"Right-click a file while in the <b>Files</b> tab to open the context menu and select <b>Generate target translations</b>. The target translation will be located in the target language folder of the project.","merge_segments_header":"Merge segments","merge_segments_html":"While in the <b>Editor</b> tab, clicking the number of segments \\"selects\\" them. Selecting two or more segments from the same translation unit (ie. the same paragraph) enables the <b>Merge</b> button.","language_resources_header":"Language resources","create_language_resource_header":"Create a termbase/translation memory","create_language_resource_step_1_html":"Click <b>Create TB</b> under the <b>TB</b> tab or <b>Create TM</b> under the <b>TM</b> tab.","create_language_resource_step_2_html":"Fill in the fields and click <b>Create</b>","create_language_resource_done":"If all is well, the window will be closed and the new file will show up in the respective tab.","import_language_resource_header":"Import a language resource","import_language_resource":"Kaplan offers the feature to import .csv and .xliff files into translation memories and termbases.","import_language_resource_csv_checklist_header":"Checklist for .csv files","import_language_resource_csv_1":"Make sure the column containing source strings is titled \\"source\\"","import_language_resource_csv_2":"Make sure the column containing target strings is titled \\"target\\"","import_language_resource_csv_3":"Make sure the colum names \\"source\\" and \\"target\\" are not used for any other column","import_language_resource_step_1_html":"Right click the language resource to which you wish to import an external file and select either <b>Import from .csv</b> or <b>Import from .xliff</b>","import_language_resource_step_2":"Select the file you wish to import.","import_language_resource_done":"Once you\'re done, double-clicking the TM/TB should reveal the imported entries.","import_language_resource_nb":".csv files may provde difficult to import in Windows. This issue has to do with encoding and will be addressed in the near future.","mysql_header":"Set up a MySQL server","mysql_step_1_1":"Before connecting to a MySQL database, first we\'ll need to create the necessary tables: kaplan_tables and kaplan_entries","mysql_step_1_2":"Connect your server and run the following SQL queries. Please bear in mind that [database] needs to be replaced with the name of your MySQL database.","mysql_step_2_html":"Click <b>Settings</b> in the main window:","mysql_step_2_alt":"Settings button","mysql_step_3_html":"Enter your credentials under the <b>MySQL (experimental)</b> tab and click <b>Connect</b>","mysql_done_html":"If your credentials check out and the MySQL server is configured as specified, the <b>MySQL</b> button in the main button will be enabled.","create_cloud_tm_header":"Create a cloud translation memory","create_cloud_tm_step_1_html":"Click <b>Create Cloud TM</b> while in the MySQL tab.","create_cloud_tm_step_1_alt":"Create Cloud TM button","create_cloud_tm_step_2_html":"Fill in the fields and click <b>Create</b>","create_cloud_tm_done_html":"The new cloud TM will show up in the <b>MySQL</b> tab.","debugging_window_header":"Debugging window (Windows only)","debugging_window":"On Windows, a second window will pop up. This is the debugging window and its contents should be forwarded for bug reports. Closing the window renders most functions unavailable.","debugging_window_alt":"Debugging window"}')},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a(1),r=a.n(o),n=a(18),s=a.n(n),c=(a(28),a(9)),i=a(22),h=a(21),_=a(13),p=a(14),d=a(10),g=a(2),b=a.p+"static/media/logo.6d17ae96.svg",j=a.p+"static/media/create_cloud_tm_button.c81d4891.png",u=a.p+"static/media/create-return-package-button.4662c5f1.png",m=a.p+"static/media/debugging-window.ac44655c.png",f=a.p+"static/media/files-tab-with-create-project-button.24c4aad7.png",O=a.p+"static/media/import-project-button.21cfe1b2.png",y=a.p+"static/media/new-project-button.246869a2.png",x=a.p+"static/media/projects-tab-with-project.08dcff53.png",w=a.p+"static/media/settings-button.8b3a6b76.png",k=a.p+"static/media/update-from-package-button.1a6bf04d.png",T=(a(29),a(19)),L=function(){function e(t){Object(_.a)(this,e),this.navigatorLocales=navigator.languages,this.availableLocales={},this.currentLocale=t,this.defaultLocale=t}return Object(p.a)(e,[{key:"addDict",value:function(e,t){var a=this;this.availableLocales[e]=t;var l=!1;this.navigatorLocales.forEach((function(e){e in a.availableLocales&&!l&&(a.currentLocale=e,l=!0)}))}},{key:"locale",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?(this.currentLocale=e,this):this.currentLocale}},{key:"t",value:function(e){return this.availableLocales[this.currentLocale]&&this.availableLocales[this.currentLocale][e]?this.availableLocales[this.currentLocale][e]:this.availableLocales[this.defaultLocale]&&this.availableLocales[this.defaultLocale][e]?this.availableLocales[this.defaultLocale][e]:e}}]),e}(),v=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(_.a)(this,a),(e=t.call(this)).polyglot=new L("en"),e.polyglot.addDict("en",T),e.state={locale:e.polyglot.locale()},e.fetchTranslation=e.fetchTranslation.bind(Object(c.a)(e)),e}return Object(p.a)(a,[{key:"fetchTranslation",value:function(e,t){var a=document.createElement(t);return a.innerHTML=this.polyglot.t(e),a}},{key:"render",value:function(){return Object(l.jsx)(d.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)(d.b,{to:"/",children:[Object(l.jsx)("img",{src:b,alt:"Kaplan Logo"}),Object(l.jsx)("h1",{children:"Kaplan"})]}),Object(l.jsx)("h1",{children:"|"}),Object(l.jsx)(d.b,{to:"/docs",children:Object(l.jsx)("h1",{children:this.polyglot.t("docs_header")})}),Object(l.jsx)("span",{children:Object(l.jsx)("br",{})})]}),Object(l.jsxs)(g.d,{children:[Object(l.jsx)(g.b,{path:"/docs",children:Object(l.jsxs)("main",{id:"docs",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:this.polyglot.t("projects_header")}),Object(l.jsx)("h3",{id:"create-project",children:this.polyglot.t("new_project_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("new_project_step_1_html")}}),Object(l.jsx)("img",{src:y,alt:this.polyglot.t("new_project_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:this.polyglot.t("new_project_step_2_1")}),Object(l.jsx)("p",{children:this.polyglot.t("new_project_step_2_2")})]})]}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("new_project_done_html")}}),Object(l.jsx)("img",{src:x,alt:this.polyglot.t("new_project_done_alt"),width:"400",height:"300"}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("create_project_package_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_project_package_step_1_html")}}),Object(l.jsx)("img",{src:f,alt:this.polyglot.t("create_project_package_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{children:this.polyglot.t("create_project_package_step_2")})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:this.polyglot.t("nota_bene")})," ",this.polyglot.t("create_project_package_nb")]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("import_project_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("import_project_step_1_html")}}),Object(l.jsx)("img",{src:O,alt:this.polyglot.t("import_project_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{children:this.polyglot.t("import_project_step_2")})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("create_return_package_header")}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_return_package_html")}}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_return_package_step_1_html")}}),Object(l.jsx)("img",{src:u,alt:this.polyglot.t("create_return_package_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{children:this.polyglot.t("create_return_package_step_2")})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("update_from_return_package_header")}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("update_from_return_package_html")}}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("update_from_return_package_step_1_html")}}),Object(l.jsx)("img",{src:k,alt:this.polyglot.t("update_from_return_package_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{children:this.polyglot.t("update_from_return_package_step_2")})]}),Object(l.jsx)("p",{children:this.polyglot.t("update_from_return_package_done")})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:this.polyglot.t("files_header")}),Object(l.jsx)("h3",{children:this.polyglot.t("file_header")}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("file_html")}}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("generate_target_header")}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("generate_target_html")}}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("merge_segments_header")}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("merge_segments_html")}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:this.polyglot.t("language_resources_header")}),Object(l.jsx)("h3",{children:this.polyglot.t("create_language_resource_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_language_resource_step_1_html")}})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_language_resource_step_2_html")}})})]}),Object(l.jsx)("p",{children:this.polyglot.t("create_language_resource_done")}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("import_language_resource_header")}),Object(l.jsx)("p",{children:this.polyglot.t("import_language_resource")}),Object(l.jsx)("h4",{children:this.polyglot.t("import_language_resource_csv_checklist_header")}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:this.polyglot.t("import_language_resource_csv_1")}),Object(l.jsx)("li",{children:this.polyglot.t("import_language_resource_csv_2")}),Object(l.jsx)("li",{children:this.polyglot.t("import_language_resource_csv_3")})]}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{dangerouslySetInnerHTML:{__html:this.polyglot.t("import_language_resource_step_1_html")}}),Object(l.jsx)("li",{children:this.polyglot.t("import_language_resource_step_2")})]}),Object(l.jsx)("p",{children:this.polyglot.t("import_language_resource_done")}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:this.polyglot.t("nota_bene")})," ",this.polyglot.t("import_language_resource_nb")]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("mysql_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:this.polyglot.t("mysql_step_1_1")}),Object(l.jsx)("p",{children:this.polyglot.t("mysql_step_1_2")}),Object(l.jsx)("code",{children:"CREATE TABLE `[database]`.`kaplan_tables` ( `name` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `source` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `target` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `id` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_unicode_ci COMMENT = 'Table containing cloud TMs';"}),Object(l.jsx)("code",{children:"CREATE TABLE `[database]`.`kaplan_entries` ( `src_lang` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `source` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `trg_lang` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `target` TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL , `table_i` INT NOT NULL , `id` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_unicode_ci COMMENT = 'Table containing cloud TM entries';"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("mysql_step_2_html")}}),Object(l.jsx)("img",{src:w,alt:this.polyglot.t("mysql_step_2_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("mysql_step_3_html")}})}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("mysql_done_html")}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:this.polyglot.t("create_cloud_tm_header")}),Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_cloud_tm_step_1_html")}}),Object(l.jsx)("img",{src:j,alt:this.polyglot.t("create_cloud_tm_step_1_alt"),width:"400",height:"300"})]}),Object(l.jsx)("li",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_cloud_tm_step_2_html")}})]}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:this.polyglot.t("create_cloud_tm_done_html")}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:this.polyglot.t("debugging_window_header")}),Object(l.jsx)("p",{children:this.polyglot.t("debugging_window")}),Object(l.jsx)("img",{src:m,alt:this.polyglot.t("debugging_window_alt")})]})]})}),Object(l.jsx)(g.b,{exact:!0,path:"/",children:Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:this.polyglot.t("about_1")}),Object(l.jsx)("p",{children:this.polyglot.t("about_2")}),Object(l.jsx)("p",{children:this.polyglot.t("about_3")}),Object(l.jsx)("p",{children:this.polyglot.t("about_4")}),Object(l.jsx)("p",{children:this.polyglot.t("about_5")}),Object(l.jsx)("p",{children:this.polyglot.t("about_6")})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:this.polyglot.t("links_header")}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.microsoft.com/en-us/p/kaplan-desktop/9nb1v5xzbmx2",rel:"nofollow noopener noreferrer",target:"_blank",children:this.polyglot.t("links_1")})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/kaplanPRO/kaplan-desktop/releases/tag/latest",rel:"nofollow noopener noreferrer",target:"_blank",children:this.polyglot.t("links_2")})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/kaplanPRO/kaplanpy",rel:"nofollow noopener noreferrer",target:"_blank",children:this.polyglot.t("links_3")})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/kaplanPRO/kaplan-desktop",rel:"nofollow noopener noreferrer",target:"_blank",children:this.polyglot.t("links_4")})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/company/kaplanpro/",rel:"nofollow noopener noreferrer",target:"_blank",children:"LinkedIn"})})]})]})]})}),Object(l.jsx)(g.b,{path:"*",children:Object(l.jsx)(g.a,{to:"/"})})]}),Object(l.jsx)("footer",{children:Object(l.jsx)("a",{href:"mailto:contact@kaplan.pro",children:"contact@kaplan.pro"})})]})})}}]),a}(r.a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.fefcc8bb.chunk.js.map