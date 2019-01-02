jQuery(function($){
    var validname = false;
    var validpwd = false;
    
    var $log_btn=$('#btn');
    var $username=$('#username');
    var $password=$('#password');
    var $usninf =$('#usninf');
    // var $tixing2 =$('#id_info_password');
    //用户名验证
    $username.on('blur',function(){
            var _username = $username.val()

            if(_username==''){
                $usninf.html("用户名不能为空");
                $usninf.css("color","red");
                validname = false;
            }else{
                 $usninf.html("");
                
                validname = true;


            }
        })
        //密码验证
        $password.on("blur",function(){
            var _password = $password.val();
            if(_password == ''){
                // $tixing2.html("密码不能为空");
                // $tixing2.css("color","red");
                
                validpwd = false;
            }else{
                // $tixing2.html("");
                validpwd = true;
            }
        })



    $log_btn.on('click',function(){

        if(validname&&validpwd){
            var _password = $password.val();
            var _username = $username.val();
            $.cookie('username', '_username');
            $.ajax({
            type: "POST",
            url: "../src/api/login.php",
            data:"username="+_username+'&password='+_password,
            success:function(msg){
                    if(msg=='yes'){
                        location.href = '../index.html';
                    }else{
                            alert('密码错误或用户名不存在')

                        }
                }
            })
        }
    })

        
})