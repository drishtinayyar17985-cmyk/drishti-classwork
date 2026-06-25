let sname,h,e,m,total,avg,sstatus,grade,color;
sname=prompt("enter your name");
h=parseInt(prompt("enter your hindi marks"));
e=parseInt(prompt("enter your english marks"));
m=parseInt(prompt("enter your maths marks"));
total=h+e+m;
avg=total/3;
if(avg>1 && avg<=100)
{
    sstatus=(avg>=60)?"Pass":"Fail";
grade=(avg>=90)?"A":(avg>=80)?"B":(avg>=70)?"C":(avg>=60)?"D":"Better Luck Next Time";
color=(avg>=90)?"green":(avg>=80)?"blue":(avg>=70)?"red":(avg>=60)?"orange":"pink";
document.write(`
    <table width="100%" border="1" cellpadding="20">
    <thead>
    <tr align="center">
    <th>Name</th>
    <th>Hindi</th>
    <th>English</th>
    <th>Maths</th>
    <th>Total</th>
    <th>Average</th>
    <th>Status</th>
    <th>Grade</th>
    </tr>
    </thead>
    <tbody>
    <tr style="color:${color}" align:center>
    <td>${sname}</td>
    <td>${h}</td>
    <td>${e}</td>
    <td>${m}</td>
    <td>${total}</td>
    <td>${avg}</td>
    <td>${sstatus}</td>
    <td>${grade}</td>
    </tr>
    </tbody>
    </table>
  `)

}
else{
    document.write("<h1>Invalid Numbers</h1>");
}
