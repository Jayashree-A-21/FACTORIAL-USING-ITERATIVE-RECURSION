 <script>
        function factorialIterative(n) {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        function factorialRecursive(n) {
            if (n === 0 || n === 1) return 1;
            return n * factorialRecursive(n - 1);
        }

        function calculateFactorial() {
            let num = document.getElementById("number").value;
            num = parseInt(num);
            if (isNaN(num) || num < 0) {
                document.getElementById("result").innerText = "Please enter a valid positive integer.";
                return;
            }
            let method = document.querySelector('input[name="method"]:checked').value;
            let result = method === 'iterative' ? factorialIterative(num) : factorialRecursive(num);
            document.getElementById("result").innerHTML = `<strong>${method.charAt(0).toUpperCase() + method.slice(1)}:</strong> ${result}`;
            updateProgress(3);
        }

        function updateProgress(step) {
            let steps = document.querySelectorAll(".step");
            steps.forEach((el, index) => {
                el.classList.toggle("active", index < step);
            });
        }
    </script>