let a = Number(prompt("Nhập vào cạnh thứ nhất"));
        let b = Number(prompt("Nhập vào cạnh thứ hai"));
        let c = Number(prompt("Nhập vào cạnh thứ ba"));
        // B2: Kiểm tra xem 3 cạnh có phải là 3 cạnh tam giác
        if (a + b > c && a + c > b && c + b > a) {
            // Đây là 3 cạnh của tam giác
            // B2: Kiểm tra tam giác cân
            let checkCan = false;
            if (a == b || b == c || c == a) {
                checkCan = true;
            }
            // B3: Kiểm tra tam giác đều
            let checkDeu = false;
            if (a == b && b == c) {
                checkDeu = true;
            }
            // B4: Kiểm tra tam giác vuông
            let checkVuong = false;
            if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
                checkVuong = true;
            }
            if (checkDeu) {
                console.log("Đây là 3 cạnh của tam giác đều");
            } else {
                if (checkCan) {
                    if (checkVuong) {
                        console.log("Đây là 3 cạnh của tam giác vuông cân");
                    } else {
                        console.log("Đây là 3 cạnh của tam giác cân");
                    }
                } else {
                    if (checkVuong) {
                        console.log("Đây là 3 cạnh của tam giác vuông");
                    } else {
                        console.log("Đây là 3 cạnh của tam giác bình thường");
                    }
                }
            }
        } else {
            console.log("Đây không phải là 3 cạnh của tam giác");
        }