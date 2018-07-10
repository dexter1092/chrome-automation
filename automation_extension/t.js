$(document).on('change','#campaign_current_status',function(){
	if($(this).is(':checked')) {
		var obj = {};
		obj['campaign_start'] = 'y';
		chrome.storage.local.set(obj);
		
		chrome.tabs.create({url:'https://www.bgequickcheckup.com/MainSearch.aspx'}, function(tab) {
		});
		chrome.tabs.executeScript(null, { 
            code: "start();" 
		});	
		
	}
	else
	{
		var obj = {};
		obj['campaign_start'] = 'n';
		chrome.storage.local.set(obj);
		var obj1 = {};
		obj['read'] = 'n';
		chrome.storage.local.set(obj1);


	}
});





// 			// $(document).ready(function(){
// 			// 	// setTimeout(function(){
// 			// 	// $("#ctl00_PanelContent2_myLogin_UserName").val('SFawcett');
// 			// 	// $("#ctl00_PanelContent2_myLogin_Password").val('MayAGHS1!');
// 			// 	// },5000);

// 			// 	// setTimeout(function(){
// 			// 	// 	$('#ctl00_PanelContent2_myLogin_LoginButton').trigger('click');	
// 			// 	// },5000);

// 			// 	setTimeout(function(){
// 			// 		$('#ctl00_PanelContent2_txtSearchValue').val('5278890451');
// 			// 		$('#ctl00_PanelContent2_ddlSearchBy').val(2);
					
// 			// 	},5000);

// 			// 	setTimeout(function(){
// 			// 		$('#ctl00_PanelContent2_btnSearch').trigger('click');
					
// 			// 	},10000);

// 			// 	setTimeout(function(){
// 			// 		$('#ctl00_PanelContent2_gvSearch_ctl02_EditButton')[0].click();
// 			// 	},5000);

				

// 			// });

		
// 		}
// });


