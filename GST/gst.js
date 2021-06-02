const gst = document.getElementById('gst');
const final = document.getElementById('final');
const balance = document.getElementById('balance');
const share = document.getElementById('share');
const out = document.getElementById('result');
const p = document.getElementById('note');

function calGst() {
    var bal = balance.value;
    var total = (gst.value/100) * bal;
    // console.log(total);
    const finalAmt = (bal*10+total*10)/10;
    // console.log(finalAmt);
    final.innerHTML = "Final Price = " + finalAmt;
    var shareAmt = total/2;
    var n = shareAmt.toFixed(2);
    share.innerHTML = `CGST / SGST :  ${n}  <br/><br/> <hr/>`;
    p.innerHTML = "change GST percentage to see different value";
    out.setAttribute('id','bdy');

}
