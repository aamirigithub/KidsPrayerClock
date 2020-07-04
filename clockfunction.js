        function digitalClock() {
            var today = new Date();

            var todayHour = today.getHours();
            var todayMinute = today.getMinutes();
            var todaySecond = today.getSeconds();

            var todayDay = today.getDay();
            var todayMonth = today.getMonth();
            var todayDate = today.getDate();
            var toddayYear = today.getFullYear();

            todayHour = checkTime(todayHour);
            todayMinute = checkTime(todayMinute);
            todaySecond = checkTime(todaySecond);
            //todayMonth = checkTime(todayMonth); dont need becasue month should be in integer data type for months array
            todayDate = checkTime(todayDate);

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            //var ISL = ["Aik","Doo","Theen","char",""];

            var timeScreen = todayHour + ":" + todayMinute + ":" + todaySecond;
            var dateScreen = days[todayDay] + ", " + months[todayMonth] + " " + todayDate + " " + toddayYear;

            document.getElementById('todayTime').innerHTML = timeScreen;
            document.getElementById('todayTime2').innerHTML = timeScreen;
            document.getElementById('todayTime3').innerHTML = timeScreen;
            document.getElementById('todayDate').innerHTML = dateScreen;

            var t = setTimeout(digitalClock, 500);
        }
        function checkTime(i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        }