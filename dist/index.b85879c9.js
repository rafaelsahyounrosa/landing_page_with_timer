AOS.init();const e=new Date("Oct 13, 2024 9:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime();document.getElementById("contador").innerHTML=`${Math.floor(n/864e5)}d ${Math.floor(n%864e5/36e5)}h ${Math.floor(n%36e5/6e4)}m ${Math.floor(n%6e4/1e3)}s`,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="Evento expirado")},1e3);
//# sourceMappingURL=index.b85879c9.js.map