var n = localStorage.getItem('hit_cnt');

if (n==null)
{
    n=0;
}
n++;
localStorage.setItem("hit_cnt", n);

document.getElementById("cntr-text").innerHTML+=" " + n + " people have visited my site!";