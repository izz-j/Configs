if(document.getElementById("lp_docwrite_site2")&&set_innertext(document.getElementById("lp_docwrite_site2"),gs("Add New Site")),document.getElementById("lp_docwrite_site3")&&set_innertext(document.getElementById("lp_docwrite_site3"),gs("URL:")),document.getElementById("lp_docwrite_site4")&&set_innertext(document.getElementById("lp_docwrite_site4"),gs("Name:")),document.getElementById("lp_docwrite_site5")&&set_innertext(document.getElementById("lp_docwrite_site5"),gs("Group:")),document.getElementById("lp_docwrite_site6")&&set_innertext(document.getElementById("lp_docwrite_site6"),gs("Username:")),document.getElementById("lp_docwrite_site7")&&set_innertext(document.getElementById("lp_docwrite_site7"),gs("History")),document.getElementById("lp_docwrite_site8")&&set_innertext(document.getElementById("lp_docwrite_site8"),gs("Password:")),g_eye_show&&document.getElementById("passwordtoggle")){var img_src=(getBG().g_ischrome,"images/eye-shown.png");LP_decimate_children(document.getElementById("passwordtoggle"));var a=document.createElement("a");a.setAttribute("href","#"),a.className="tooltip eye"+(g_isopera?"":" eye2");var img=document.createElement("img");img.setAttribute("src",img_src),img.id="passwordtoggleimg",img.setAttribute("alt",gs("[Show]")),a.appendChild(img);var span=document.createElement("span");span.setAttribute("tabindex","-1"),span.id="passwordtoggle_tooltip",set_innertext(span,gs("Show Password")),a.appendChild(span),document.getElementById("passwordtoggle").appendChild(a)}document.getElementById("lp_docwrite_site10")&&set_innertext(document.getElementById("lp_docwrite_site10"),gs("History")),document.getElementById("lp_docwrite_site12")&&set_innertext(document.getElementById("lp_docwrite_site12"),gs("Fields:")),document.getElementById("lp_docwrite_site13")&&set_innertext(document.getElementById("lp_docwrite_site13"),gs("Note Type")+":"),document.getElementById("lp_docwrite_site14")&&set_innertext(document.getElementById("lp_docwrite_site14"),gs("Notes")+":"),document.getElementById("lpaddattach")&&set_innertext(document.getElementById("lpaddattach"),gs("Add File")),document.getElementById("lp_docwrite_site14a")&&set_innertext(document.getElementById("lp_docwrite_site14a"),gs("Advanced Settings")),document.getElementById("lp_docwrite_site15")&&set_innertext(document.getElementById("lp_docwrite_site15"),gs("Favorite")),document.getElementById("lp_docwrite_site16")&&set_innertext(document.getElementById("lp_docwrite_site16"),gs("Never AutoFill")),document.getElementById("editfields")&&set_innertext(document.getElementById("editfields"),gs("Edit Form Fields")),document.getElementById("lp_docwrite_site18")&&set_innertext(document.getElementById("lp_docwrite_site18"),gs("Require Password Reprompt")),document.getElementById("lp_docwrite_site19")&&set_innertext(document.getElementById("lp_docwrite_site19"),gs("AutoLogin")),document.getElementById("lp_docwrite_site20")&&set_innertext(document.getElementById("lp_docwrite_site20"),gs("Replace Existing Site")),document.getElementById("lp_docwrite_site30")&&set_innertext(document.getElementById("lp_docwrite_site30"),gs("Show Username History")),document.getElementById("lp_docwrite_site31")&&set_innertext(document.getElementById("lp_docwrite_site31"),gs("Show Password History")),document.getElementById("lp_docwrite_site32")&&set_innertext(document.getElementById("lp_docwrite_site32"),gs("Share Site")),document.getElementById("lp_docwrite_site33")&&set_innertext(document.getElementById("lp_docwrite_site33"),gs("Delete Site")),document.getElementById("lp_docwrite_site34")&&set_innertext(document.getElementById("lp_docwrite_site34"),gs("Add Site to Favorites")),document.getElementById("lp_docwrite_site35")&&set_innertext(document.getElementById("lp_docwrite_site35"),gs("Note History")),document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){onLoad()}),window.addEventListener("resize",function(){onResize()}),document.getElementById("lpform").submit=function(){},document.getElementById("addnewsite").addEventListener("click",function(){fix_addreplace()}),document.getElementById("showusernamehistory").onclick=function(){return show_history(HISTORY.USERNAME),!1},document.getElementById("passwordtoggle").onclick=function(){return toggle_password(document.getElementById("password"),document.getElementById("passwordtoggle")),!1},document.getElementById("showpasswordhistory").onclick=function(){return show_history(HISTORY.PASSWORD),!1},document.getElementById("password").addEventListener("keyup",function(){update_password_meter("",this.value),disable_CPWButton()}),document.getElementById("notestype").onchange=function(){buildSecureNotes()},document.getElementById("notestype").addEventListener("focus",function(){this.blur()}),document.getElementById("editfields").onclick=function(){return doeditfields(),!1},document.getElementById("replaceexistingsite").addEventListener("click",function(){fix_addreplace()}),document.getElementById("del").addEventListener("click",function(){return dodel(),!1}),document.getElementById("share").addEventListener("click",function(){return doshare(),!1}),document.getElementById("notehistory").addEventListener("click",function(){return notehist(),!1}),document.getElementById("save").addEventListener("click",function(){return dosave(),!1}),document.getElementById("cancel").addEventListener("click",function(){return docancel(),!1}),document.getElementById("lpaddattach").addEventListener("click",function(){return addattach(),!1}),document.getElementById("exnotehist").addEventListener("click",function(){return show_history(HISTORY.EXTRA),!1}),document.getElementById("cpwbtn").addEventListener("click",function(e){return docpwbtn(e),!1}),document.getElementById("cpwdebug").addEventListener("click",function(e){return docpwdebug(e),!1}),window.addEventListener("keyup",function(e){update_SaveButton(ENABLE_ONLY),g_do_keyaccel&&accelerator_key_handler(e)}),window.addEventListener("mouseup",function(){update_SaveButton(ENABLE_ONLY)})}),g_cpwbot&&window.addEventListener("unload",function(){var e=getBG();if(e&&void 0!==e.cpwbot_halt){if(g_ischrome)var t=e.cpwbot_getpwchangestate();else var t=g_cpwbot_pwchangestate;"FAIL"!=t&&"CAPTCHA"!=t&&"DONE"!=t&&"OK"!=t&&"TIMEOUT"!=t&&0!=t&&null!==t&&e.cpwbot_halt()}},!1),is_in_dialog()&&(document.getElementById("sitebodymain").style.padding="0px",document.getElementById("sitebodymain").style.overflowX="hidden");