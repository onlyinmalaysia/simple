 function userlogin()
            {
                var pass=$( "input[name=password]" ).val();
                var mail=$( "input[name=email]" ).val();
                var obj = {};
                obj.password =pass;
                obj.email =mail;
                $.ajax({
                type: "POST",
                url: "checkuser.php",
                data: {user:obj},
                success:function(data){
                    if(data=="nouser")
                        $("#lnkDialog2").click();
                    else
                        window.location.href="home.html";
                    localStorage.setItem('user',data);
           }
       });
       var cart = {};
       cart.products = [];
       localStorage.clear();
       localStorage.setItem('cart', JSON.stringify(cart));
}
 function userregister()
            {
                var name=$( "input[name=username]" ).val();
                var pass=$( "input[name=password]" ).val();
                var mail=$( "input[name=email]" ).val();
                var obj = {};
                obj.username =name;
                obj.password =pass;
                obj.email =mail;
                $.ajax({
                type: "POST",
                url: "saveuser.php",
                data: {newuser:obj},
                success:function(data){
                if(data=="success")
                $("#linkd").click();
                else
                $("#linkd2").click();
           }
       });
    }