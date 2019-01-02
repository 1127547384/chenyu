jQuery(function($){
    var validname = false;
    var validpwd = false;
    // var validrpwd=false;
    var $username=$('#username');
    var $password=$('#password');
    var $btn = $("#btn");
    var $usninf=$('#usninf');
    // var $pwd_message=$('#pwd_message');
    // var $rpassword=$('#rpassword');
    // var $rpwd_message=$('#rpwd_message');
    // 用户名验证
    $username.on('blur',function(){
        var _username = $username.val()
        if(_username==''){
            $usninf.html("用户名不合法");
            validname = false;
        }else{
             $usninf.html("用户名可用");
            $usninf.css("color","red");
            validname = true;


        }
    })
    //密码验证
    $password.on("blur",function(){
        var _password = $password.val();
        if(_password == ''){
            // $pwd_message.html("密码不合法");
            
            validpwd = false;
        }else{
            // $pwd_message.html("密码合法");
            // $pwd_message.css("color","red");
            validpwd = true;
        }
    })
    //密码再次确认
    // $rpassword.on("blur",function(){
    //     var _rpassword = $rpassword.val();
    //     var _password = $password.val();

    //     if(_rpassword !=_password){
    //         // $rpwd_message.html("密码不一致");
            
    //         validpwd = false;
    //     }else{
    //         // $rpwd_message.html("密码一致");
    //         // $rpwd_message.css("color","red");
    //         validrpwd = true;
    //     }
    // })
    
    
 
      $btn.on('click',function(){

        if(validname&&validpwd){
            var _password = $password.val();
            var _username = $username.val();

            $.ajax({
            type: "POST",
            url: "../src/api/reg.php",
            data:"username="+_username+'&password='+_password,
            success:function(msg){
                    alert(msg)
                    location.href = './login.html';

                }
            })
        }}) 
})


