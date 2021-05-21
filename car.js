        //check된 금액 + 2000만원
        let totalValue = 0; //기본차량가액 + 옵션금액
        let totalTag; //최종차량가액 표시할 객체
        window.onload = function(){ //콜백함수
            //온로드 안 하면 값을 못 찾음 
            totalTag = document.getElementById("total");
            totalValue = parseInt(totalTag.value); //숫자지만 읽어오면 text임 =-=> 형변환 해줘야함
            // console.log(totalValue + 9000);
            //이렇게 하면 "2000000" + "9000" = "20000009000" 
            console.log("totalValue : " + totalValue);
        };
        function compute(opt){
            console.log("compute() 실행 : " + opt.id );
            let optValue = parseInt(opt.value);
            //이렇게 해야 숫자로 가져옴!!_!!
            console.log("optValue : " + optValue);
            if(opt.checked){ //체크상태 : 금액 더하기
                totalValue += optValue;
            }else{          //체크 해제 상태 : 금액 빼주기
                totalValue -= optValue;
            }
            console.log("totalValue : " + totalValue);

            //화면에 결과값 표시
            totalTag.value = totalValue;
        }