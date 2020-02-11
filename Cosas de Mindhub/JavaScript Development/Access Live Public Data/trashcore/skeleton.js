//juegito mocho

oneA = s
oneB = 0,
twoA = 0;
twoB = 0;
thrA = 0;
thrB = 0;
fouA = 0;
fouB = 0;
fivA = 0;
fivB = 0;
sixA = 0;
sixB = 0;
sevA = 0;
sevB = 0;
eigA = 0;
eigB = 0;
ninA = 0;
ninB = 0;
tenA = 0,
tenB = 0;


if (oneT == 2) {

}else if (twoT == 2) {

}else if (thrT == 2) {

}else if (fouT == 2) {

}else if (fifT == 2) {

}else if (sixT == 2) {

}else if (sevT == 2) {

}else if (eigT == 2) {

}else if (ninT == 2) {

}else if (tenT == 2) {

}else {

}




members.sort((a, b) =>
a.votes_with_party_pct - b.votes_with_party_pct)
  for (i = 0; i < members.length*0.1 || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){
     lLoyal.push(members[i])
   }

members.sort((a, b) =>
b.votes_with_party_pct - a.votes_with_party_pct)
  for (i = 0; i < members.length*0.1 || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){
     mLoyal.push(members[i])
   }

members.sort((a, b) =>
a.missed_votes_pct - b.missed_votes_pct)
  for (i = 0; i < members.length*0.1 || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){
     lAtten.push(members[i])
   }

members.sort((a, b) =>
b.missed_votes_pct - a.missed_votes_pct)
  for (i = 0; i < members.length*0.1 || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){
     mAtten.push(members[i])
    }

   if(document.getElementById("lower") != null){

     const table2 = document.getElementById("lower")
     for (i = 0; i < lAtten.length; i++) {
        let row2 = table2.insertRow(-1);

        if (lAtten[i].url == "") {
          row2.innerHTML=`<td class="text-left pl-4">${lAtten[i].first_name} ${lAtten[i].middle_name || ""} ${lAtten[i].last_name}</td>
          <td>${lAtten[i].missed_votes}</td>
          <td>${lAtten[i].missed_votes_pct+"%"}</td>`
        }else {
          row2.innerHTML=`<td class="text-left pl-4"><a href="${lAtten[i].url}">${lAtten[i].first_name} ${lAtten[i].middle_name || ""} ${lAtten[i].last_name}<a></td>
          <td>${lAtten[i].missed_votes}</td>
          <td>${lAtten[i].missed_votes_pct+"%"}</td>`
        }
       }

     const table3 = document.getElementById("most")
     for (i = 0; i < mAtten.length; i++) {
        let row3 = table3.insertRow(-1);

        if (mAtten[i].url == "") {
          row3.innerHTML=`<td class="text-left pl-4">${mAtten[i].first_name} ${mAtten[i].middle_name || ""} ${mAtten[i].last_name}</td>
          <td>${mAtten[i].missed_votes}</td>
          <td>${mAtten[i].missed_votes_pct+"%"}</td>`
        }else {
          row3.innerHTML=`<td class="text-left pl-4"><a href="${mAtten[i].url}">${mAtten[i].first_name} ${mAtten[i].middle_name || ""} ${mAtten[i].last_name}<a></td>
          <td>${mAtten[i].missed_votes}</td>
          <td>${mAtten[i].missed_votes_pct+"%"}</td>`
        }
       }
     }else{

       const table4 = document.getElementById("lloyal")
       for (i = 0; i < lLoyal.length; i++) {
          let row4 = table4.insertRow(-1);

          if (lLoyal[i].url == "") {
            row4.innerHTML=`<td class="text-left pl-4">${lLoyal[i].first_name} ${lLoyal[i].middle_name || ""} ${lLoyal[i].last_name}</td>
            <td>${(lLoyal[i].votes_with_party_pct * lLoyal[i].total_votes/100).toFixed(0)}</td>
            <td>${lLoyal[i].votes_with_party_pct+"%"}</td>`
          }else {
            row4.innerHTML=`<td class="text-left pl-4"><a href="${lLoyal[i].url}">${lLoyal[i].first_name} ${lLoyal[i].middle_name || ""} ${lLoyal[i].last_name}<a></td>
            <td>${(lLoyal[i].votes_with_party_pct * lLoyal[i].total_votes/100).toFixed(0)}</td>
            <td>${lLoyal[i].votes_with_party_pct+"%"}</td>`
          }
         }

       const table5 = document.getElementById("mloyal")
       for (i = 0; i < mLoyal.length; i++) {
          let row5 = table5.insertRow(-1);

          if (mLoyal[i].url == "") {
            row5.innerHTML=`<td class="text-left pl-4">${mLoyal[i].first_name} ${mLoyal[i].middle_name || ""} ${mLoyal[i].last_name}</td>
            <td>${(mLoyal[i].votes_with_party_pct * mLoyal[i].total_votes/100).toFixed(0)}</td>
            <td>${mLoyal[i].votes_with_party_pct+"%"}</td>`
          }else {
            row5.innerHTML=`<td class="text-left pl-4"><a href="${mLoyal[i].url}">${mLoyal[i].first_name} ${mLoyal[i].middle_name || ""} ${mLoyal[i].last_name}<a></td>
            <td>${(mLoyal[i].votes_with_party_pct * mLoyal[i].total_votes/100).toFixed(0)}</td>
            <td>${mLoyal[i].votes_with_party_pct+"%"}</td>`
          }
         }
       }
