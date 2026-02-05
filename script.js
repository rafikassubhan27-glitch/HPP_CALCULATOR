function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

function hargaPsikologis(harga) {
  return Math.ceil(harga / 100) * 100 - 100;
}

function hitung() {
  const hpp = Number(document.getElementById("hpp").value);
  const target = Number(document.getElementById("targetLaba").value);
  const margin = Number(document.getElementById("margin").value) / 100;
  const hari = Number(document.getElementById("hari").value);

  if (!hpp || !target || !margin || !hari) {
    alert("Lengkapi semua data dulu ya");
    return;
  }

  let harga = hpp + (hpp * margin);
  harga = hargaPsikologis(harga);

  const laba = harga - hpp;
  const targetBulan = Math.ceil(target / laba);
  const targetHari = Math.ceil(targetBulan / hari);

  document.getElementById("harga").innerText = formatRupiah(harga);
  document.getElementById("laba").innerText = formatRupiah(laba);
  document.getElementById("perBulan").innerText = targetBulan + " porsi";
  document.getElementById("perHari").innerText = targetHari + " porsi";

  let insight = "Target terlihat realistis.";
  if (targetHari > 100) insight = "Target cukup berat, pertimbangkan naikkan harga atau margin.";

  document.getElementById("insight").innerText = insight;
}
