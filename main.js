function register(){
    username=userName.value;
    userid=userId.value;
    password=Password.value;
   confirm_password=PasswordTwo.value

    userDetails={
        username,
        userid,
        password,
        confirm_password
    }   
    if(username.legth == 0 || password.length == 0){
        alert("please register to log in")
    }
    else if(userid in localStorage){
        alert("id already exist")
   } 
    else{
        if(password == confirm_password){
            localStorage.setItem(userid,(JSON.stringify(userDetails)));
        alert("registered succesfully")
        window.location='./index.html'
        }else{
            alert("password miss-match")
        }
      }
}


function login(){
    userid=uid.value;
upassword=uPswd.value;
if(userid.length == 0 || upassword.length == 0){
    alert("enter user id and password ")
}else if(userid in localStorage){
    userData=JSON.parse(localStorage.getItem(userid))
    dispName=userData.username
    if(upassword==userData.password){
        window.location='./home.html'
         alert("login succesfull")
      }
      else{
          alert('invalid password')
      }
}else{
    alert('invalid User ID')
}
}


 
function addIncome(){
    
    income=incomeName.value;
    incomeAmount=incomeAmt.value;
    if(income==""){
        alert('please enter the particulars ')
    }
    else if(incomeAmount==0){
        alert('enter amount')
    }
     
    else{
    tableData=` 
     <tr >
        <td style="color: green;font-size: 25px;font-weight: 400;">${income}</td>
        <td style="color: green;font-size: 25px;font-weight: 400;">${incomeAmount}</td>
        
     </tr>`
        result.innerHTML+=tableData;
        addBalance()

    }
        
    document.getElementById('myformInc').reset();
  
}

balanceInfo.value=0;
var balanceAMT = parseInt(balanceInfo.value);

// balance
function addBalance(){
    incomeAMT = parseInt(incomeAmt.value )
     balance=(balanceAMT+=incomeAMT )
    if(balance==0){
        alert("please enter the value")
    }
    else{
    balanceInfo.value = balance;
     }
}

// expense 
function subBalance(){
    expAMT = parseInt(expenseAmt.value )
    balance=parseInt(balanceAMT-=expAMT )
   balanceInfo.value = balance;


}
function addExpense(){
    expense=expenseName.value;
    expenseAmount=expenseAmt.value;
    if(expense==""){
        alert('Please enter the particulars');
    }
    else if(expenseAmount==0){
        alert(' Enter  amount');
    }
    else{
    tabledata=` 
     <tr>
        <td style="color: red;font-size: 25px;font-weight: 400;">${expense}</td>
        <td style="color: red;font-size: 25px;font-weight: 400;">${expenseAmount}</td>
        
    </tr>`
        resultExp.innerHTML+=tabledata;
        subBalance()
    }

    document.getElementById('myformExp').reset();
        
}

// clear all from table 

function clearAll(){
   alert("are yo sure to clear the data")
    result.innerHTML="";
    resultExp.innerHTML="";
    balanceInfo.value=0;
}



localStorage.getItem('userid')
function logout(){
    alert("are yo sure to log out")
     localStorage.clear()
    window.location='./index.html'

}


