document.getElementById('myBtn').addEventListener('click', Music);
function Music(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
    };
    
    fetch("https://v1.nocodeapi.com/dnhd0181/yt/iyuilUpBMWLhxGnl/search?q=rap", requestOptions)
        .then(response => response.json())
        .then(data => {let author = data.results;
            console.log(author);
        // In dữ liệu người dùng
        //Get Data Value
    // dùng let tạo variable output
        let output = "<h2><center>Get User Data</center></h2>";

        //Get Data Loop Through
    // Tạo list data cần Fetch API
        author.forEach(function (lists) {
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                        <li class="list-group-item"><h2>Name: ${lists.snippet.description}</h2></li>}
                        </ul>
                    </div>
                </div> `;
            
            });    
            document.getElementById('output').innerHTML = output})};