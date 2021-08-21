    let num = 1234;
    // Function to reverse digits of num
    function reversDigits(num) {
        let rev_num = 0;
        while(num > 0)
        {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev_num;
    }
 // function call  
    document.write(reversDigits(num));
     
// This code is contributed by Surbhi tyagi
 
