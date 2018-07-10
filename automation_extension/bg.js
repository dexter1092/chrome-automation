function start(){
    chrome.storage.local.get('campaign_start',function(result){
        if(result.campaign_start=='y'){

            $('#ctl00_PanelContent2_txtSearchValue').val('5278890451');
            $('#ctl00_PanelContent2_ddlSearchBy').val(2);
            $('#ctl00_PanelContent2_btnSearch').trigger('click');

            willIGetNewPhone
            .then(showOff)                
            .catch(error => console.log(error.message)); // fat arrow
        }
    })
}


const willIGetNewPhone = new Promise(
    (resolve, reject) => {
            
        setTimeout(function(){
            
            // alert('fis');
            showOff();
             return resolve('123');        
        },5000);        
              
    }
);

const showOff = function (phone) {

    // alert('hey');
        var obj1 = {};
        obj1['read'] = 'y';
		chrome.storage.local.set(obj1);
    $('#ctl00_PanelContent2_gvSearch_ctl02_EditButton')[0].click();

    
        
   
};

setInterval(checkIfGameAlreadyStarted, 20000);


function checkIfGameAlreadyStarted(){
    alert('hey');
    $('#ctl00_PanelContent2_txtSearchValue').val('5278890451');
    $('#ctl00_PanelContent2_ddlSearchBy').val(2);
}






//     longfunctionfirst(shortfunctionsecond);

//     // new Promise(function(resolve,reject){
        
            // $('#ctl00_PanelContent2_txtSearchValue').val('5278890451');
            // $('#ctl00_PanelContent2_ddlSearchBy').val(2);
            // $('#ctl00_PanelContent2_btnSearch').trigger('click')
//             // var rows = $('#ctl00_PanelContent2_gvSearch tr').length;

//             // for(var i=0;i<=20;i++){
//             //     alert(i);
//             //     if( $('#ctl00_PanelContent2_gvSearch tr').length==1){
//             //         alert('hey');
//             //     }
//             // }



//             // $('#ctl00_PanelContent2_btnSearch').trigger('click');
//             // var v = $('#ctl00_PanelContent2_txtSearchValue').val();
           
//             // // setTimeout(function(){
//             // //     if(v!=''){
//             // //         var rows = $('#ctl00_PanelContent2_gvSearch tr').length;
//             // //         alert(rows);
//             // //         return resolve(true);
//             // //     }
//             // // },5000)
//             // alert("Boom!---");
//             // setTimeout(function(){
//             //     alert("Boom!");
//             //   }, 2000);
            
            
           
//     // }).then(function(result){
//     //     alert('hey')
//     // // })
//     // $('#ctl00_PanelContent2_txtSearchValue').val('5278890451');
//     // $('#ctl00_PanelContent2_ddlSearchBy').val(2);
//     // $('#ctl00_PanelContent2_btnSearch').trigger('click')

// }

// function longfunctionfirst(callback) {
//     setTimeout(function() {
//         alert('first function finished');
//         document.getElementById('ctl00_PanelContent2_txtSearchValue').value='5278890451';
//         document.getElementById('ctl00_PanelContent2_ddlSearchBy').value='2';
       

//         if(typeof callback == 'function')
//             callback();
//     }, 3000);
// };

// function shortfunctionsecond() {
//     setTimeout('alert("second function finished");', 2000);
//     $('#ctl00_PanelContent2_btnSearch').trigger('click');

// };


//     chrome.tabs.getSelected(function(tab){
//         if(tab.url=="http://ec2-34-201-172-147.compute-1.amazonaws.com/index.php/admin"){

    
//             window.open('https://www.bgequickcheckup.com/MainSearch.aspx');
//         }else{
//             alert('not the url')
//         }
//     });
// }
// chrome.storage.local.get('campaign_start', function(result){
//     if(result.campaign_start=='y') {
//         $('#ctl00_PanelContent2_myLogin_UserName').val('hey');
//         // setInterval(function(){
//         //     // alert('hey time');
//         //     $('#ctl00_PanelContent2_myLogin_UserName').val('login');
//         // },500)
    
//     }
// });