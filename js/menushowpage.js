window.onload = function() {
            showmenu();
        }
       
        function showmenu() {
            var hamBurgpage = document.querySelector("#hamburgmenu-page");
            var haM1 = document.querySelector(".hamburg-1");
            var haM2 = document.querySelector(".hamburg-2");
            var haM3 = document.querySelector(".hamburg-3");
            var pageMenu = document.querySelector(".pagemenu");
                    
            hamBurgpage.onclick = function() {
                haM1.classList.toggle("ham-1-after");
                haM2.classList.toggle("ham-2-after");
                haM3.classList.toggle("ham-3-after");
                pageMenu.classList.toggle("pagemenu-show");
                
                                
                /*
                var menuShow = navBox.style.display;
                if(menuShow == "block") {
                    homeMenu.style.display = "none";
                } else {
                    homeMenu.style.display = "block";
                } */
            };
            
        } 