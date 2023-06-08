// Input: month, year
        // Output: days
        // B1: Nhập vào month, year
        let month = Number(prompt("Nhập vào tháng"));
        let year = Number(prompt("Nhập vào năm"));
        let days;
        if (month >= 1 && month <= 12) {
            // B2: Kiểm tra tháng
            switch (month) {
                case 4:
                case 6:
                case 9:
                case 11:
                    days = 30;
                    break;
                case 2:
                    // Tháng 2
                    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                        // Năm nhuận
                        days = 29;
                    } else {
                        days = 28;
                    }
                    break;
                default:
                    days = 31;
            }
            console.log("Năm " + year + " tháng " + month + " có " + days + " ngày");
        } else {
            console.log("Bạn vừa nhập giá trị không phải là tháng");
        }

        // let month=Number(prompt("Nhập tháng:"));
        // let year=Number(prompt("Nhập năm:"));
        // if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        //    console.log("31 ngày"); 
        // }
        // else if(month ==4 || month ==6 || month == 9 || month == 11){
        //    console.log("30 ngày"); 
        // }
        // else{
        //     if((year%4 === 0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0))
        //    console.log("29 ngày"); 
        //     else{
        //         console.log("28 ngày"); 
        //     }
        // }      