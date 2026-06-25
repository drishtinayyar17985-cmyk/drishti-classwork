let ncols=prompt("enter number of columns");
let nrows=prompt("enter number of rows");
document.write(`<table width="100%" border="1"`);
for(let r=1;r<=nrows;r++)
{
    document.write(`<tr>`);
    for(let c=1;c<=ncols;c++)
    {
        document.write(`<td>${r}${c}</td>`)
    }
document.write(`</tr>`)
}
document.write(`</table>`)
