var fback=localStorage.getItem("fback");
print_tbl()

console.log(fback)
if (fback==null)
{
    fback=[];
}
else
{
   // for (var i in fback) console.log(fback[i]);
 fback = JSON.parse(fback);
}


function formIn() {
    var newName = document.getElementById('name').value;
    var newSkill = document.getElementById('skill').value;
    var newLevel = document.getElementById('level').value;
    var newComment = document.getElementById('comment').value;
    console.log(newName);
    console.log(newSkill);
    console.log(newLevel);
    console.log(newComment);
    
    var feedobj={name:newName,skill:newSkill,level:newLevel,comment:newComment};
    console.log(fback);
    
    fback.push(feedobj);
    console.log(fback);
     localStorage.frecord=JSON.stringify(fback);
    localStorage.setItem("fback",JSON.stringify(fback));
    location.reload();

    
   //print_tbl()
}

function make_tbl(name,skill,level,comment)
{
    var table=document.getElementById("form_tbl");
    var row = table.insertRow();
    var namecell = row.insertCell(0);
    var skillcell = row.insertCell(1);
    var lvlcell = row.insertCell(2);
    var cmtcell = row.insertCell(3);

    namecell.innerHTML = name;
    skillcell.innerHTML = skill;
    lvlcell.innerHTML = level;
    cmtcell.innerHTML = comment;
}
function print_tbl()
{
    if (localStorage.frecord)
    {
        
        fback=JSON.parse(localStorage.frecord);
        for(var i=0;i<fback.length;i++)
        {
            make_tbl(fback[i].name,fback[i].skill,fback[i].level,fback[i].comment);

        }
    }
}