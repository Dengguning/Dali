window.onload = function() {
            showmenu();
        }
       
        function showmenu() {
            var hamBurg = document.querySelector("#hamburgmenu");
            var haM1 = document.querySelector(".hamburg-1");
            var haM2 = document.querySelector(".hamburg-2");
            var haM3 = document.querySelector(".hamburg-3");
            var homeMenu = document.querySelector(".homemenu");
            var pageMenu = document.querySelector(".pagemenu");
                    
            hamBurg.onclick = function() {
                haM1.classList.toggle("ham-1-after");
                haM2.classList.toggle("ham-2-after");
                haM3.classList.toggle("ham-3-after");
                homeMenu.classList.toggle("homemenu-show");
                
                /*
                var menuShow = navBox.style.display;
                if(menuShow == "block") {
                    homeMenu.style.display = "none";
                } else {
                    homeMenu.style.display = "block";
                } */
            };
            
        } 