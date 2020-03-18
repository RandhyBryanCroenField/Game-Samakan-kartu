let jumlahkartu = 6;
let kartuPertama = (kartukedua = 0);

function buatAngka() {
  let angkaBerurut = [];

  for (let i = 1; i < jumlahkartu; i++) {
    angkaBerurut.push(i, i);
  }
  return angkaBerurut;
}

function acakAngka(angkaBerurut) {
  let angkaAcak = angkaBerurut.sort(function() {
    return 0.6 - Math.random();
  });
  return angkaAcak;
}

function persiapkankartu(angkaAcak) {
  let str = "";

  angkaAcak.forEach(function(i) {
    str +=
      '<div class="kartu" nilai="' +
      i +
      '">' +
      '<div class="belakang">' +
      i +
      "</div>" +
      '<div class="depan">BUKA</div>' +
      "</div>";
  });
  $("#game").append(str);
}

function pengendali() {
  $(".kartu").on("click", function() {
    $(this).addClass("buka");

    if (kartuPertama == 0) {
      kartuPertama = $(this).attr("nilai");
      console.log("kartu pertama : " + kartuPertama);
    } else {
      kartukedua = $(this).attr("nilai");
      console.log("kartu kedua : " + kartukedua);

      if (kartuPertama == kartukedua) {
        console.log("benar");
        $(".buka").addClass("betul");
        $(".betul").removeClass("benar");
      } else {
        console.log("salah");
        kartuPertama = kartukedua = 0;
        $(this).one("transitionend", function() {
          $(".kartu").removeClass("buka");
        });
      }
    }
  });
}

$(document).ready(function() {
  let angkaBerurut = buatAngka();

  let angkaAcak = acakAngka(angkaBerurut);

  persiapkankartu(angkaAcak);

  pengendali();

  // console.log('ini adalah angka berurut :' + angkaberurut)
  // console.log("ini adalah angka acak :" + angkaAcak);
});
