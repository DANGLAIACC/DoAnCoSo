// var version_id = document.querySelector(".m_default b");
// console.log(version_id);

function getDetail() {
  console.log("Nhớ xem lại url, version_id, article");
  var parameter = [];
  var lstLi = document.querySelectorAll(".parameter li>div");
  var img_large = document.querySelector(".icon-position>img:nth-child(1)").src;
  var id = img_large.substr(39, 6);

  img_large = img_large.substring(46, img_large.length - 12);

  var img_small = document.querySelector(".info_sp>img").src;
  img_small = img_small.substring(46, img_small.length - 12);

  var price = document
    .querySelector(".area_price strong")
    .innerText.replaceAll(".", "")
    .replace("₫", "");
  // var article = stripScripts(document.querySelector('.area_articleFull').innerHTML);
  for (var i = 0; i < lstLi.length; i++) {
    parameter[i] = lstLi[i] ? lstLi[i].innerText : "";
  }
  var url = "";
  var text = document.querySelector(".m_default b").innerText;
  var article = document.querySelector(".area_article.area_articleFull")
    .innerHTML;

  var lstTemp = document.querySelectorAll(".characteristics .owl-item img");
  var img_slider = "";
  var slength = lstTemp.length - 1;
  for (var i = 0; i < slength; i++) {
    var a1 = lstTemp[i].src;
    img_slider += `${a1.substring(53, a1.length - 4)},`;
  }
  var slast = lstTemp[slength].src;

  img_slider += slast.substring(50, slast.length - 4);
  console.log(img_slider);

  article = article.substring(0, article.length - 13237); // trừ đi đoạn script phía sau
  var strKetQua = `(${id},
	'${url}',
	'${text}',
	'${img_small}', 
	'${img_large}', 
   ${price},
  '${parameter[0]}',
	'${parameter[1]}',
	'${parameter[2]}',
	'${parameter[3]}',
	'${parameter[4]}',
	'${parameter[5]}',
	'${parameter[6]}',
	'',
	'', 
  'version___id',
  '${img_slider}',
  '${article}'  
  )`;

  var el = document.createElement("textarea");
  el.value = strKetQua;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

////////// get img for slider fotorama__img

function getColor() {
  //////////////// get img for slide color in modal //////////////////

  var a = document.querySelectorAll(
    ".fotorama__nav__shaft .fotorama__thumb>img"
  );
  var strResult = "";
  for (var j = 0; j < a.length - 1; j++) {
    var src = a[j].currentSrc;

    strResult += src.substring(46, src.length - 12) + ",";
  }

  /// copy to clipboard

  var el = document.createElement("textarea");
  el.value = strResult.substring(0, strResult.length - 1);
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

////////////// get Evaluate
function getEvaluate() {
  // khởi tạo mảng username
  var arrUsername = [
    "ndtai",
    "ntphong",
    "nhdhao",
    "hqdung",
    "ltkiet",
    "hdhuy",
    "ttlong",
    "hnthien",
    "dkhy",
    "ntkanh",
    "ctnhung",
    "ntloc",
    "ndquang",
    "pmthe",
    "hqbao",
    "sssbath",
    "ddkhanh",
    "vdhieu",
    "lmquy",
    "nhhiep",
    "ddnhue",
    "lnminh",
    "nttthuy",
    "dqlai",
    "ptloc",
    "nvan",
    "ptttam",
    "httri",
    "ltduy",
    "httam",
    "hltmanh",
    "dhkhai",
    "pmthanh",
    "bndtrung",
    "lvdai",
    "nvchung",
    "ntkduy",
    "lqcuong",
    "dqviet",
    "ltlong",
    "lvqan",
    "nthoang",
    "dnmquoc",
    "ltlong",
    "ltsong",
    "ptkien",
    "nvthai",
    "nhdhao",
    "dhkhai",
    "mhvan",
    "hltmanh",
    "ttson",
    "vtluan",
    "tu123",
    "nhtuan",
    "tylnhi",
    "toshiko",
    "thanhvy",
    "ndtai",
  ];

  for (let i = arrUsername.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrUsername[i], arrUsername[j]] = [arrUsername[j], arrUsername[i]];
  }

  var x = document.querySelectorAll("ul.ratingLst>li.par:not(.child)");
  var strEvaluate = "";
  var id = document
    .querySelector(
      "#boxRatingCmt > div.toprt > div.crt > div.lcrt > div > div.left > img"
    )
    .src.substr(39, 6);
  for (var i = 0; i < x.length && i < 60; i++) {
    var time_up = x[i].querySelector(".ra .cmtd").innerText;
    var content = x[i].querySelector(".rc>p>i").innerText;
    var rateStar = x[i].querySelectorAll(".rc>p>span>i.iconcom-txtstar").length;
    var response, time_resolved, handler;
    response = handler = "";
    time_resolved = "default";
    response = x[i].querySelector("div.rsp");
    if (response !== null) {
      response = response.innerText;
      time_resolved = response.substr(response.length - 10);
      handler = response.substr(1, response.indexOf(" đã") - 1);
    }
    // Lưu ý dùng function a2 để auto tạo invoice luôn
    strEvaluate += `select a2('${arrUsername[i]}',${id},'${time_up}','${content}',${rateStar},'${time_resolved}','${handler}');
    `;
  }

  var el = document.createElement("textarea");
  el.value = strEvaluate.substring(0, strEvaluate.length - 1);
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// update Script new date 10/11/2020

function getColor() {
  var a = document.querySelectorAll(
    ".fotorama__nav__shaft .fotorama__thumb>img"
  );
  var strResult = "";
  for (var j = 0; j < a.length - 1; j++) {
    var src = a[j].currentSrc;

    strResult += src.substring(46, src.length - 12) + ",";
  }

  /// copy to clipboard

  var el = document.createElement("textarea");
  el.value = strResult.substring(0, strResult.length - 1);
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
function get2() {
  var lstTemp = document.querySelectorAll(".characteristics .owl-item img");
  var img_slider = "";
  var slength = lstTemp.length - 1;
  for (var i = 0; i < slength; i++) {
    var a1 = lstTemp[i].src;
    img_slider += `${a1.substring(53)},`;
  }

  var slast = lstTemp[slength].src;
  img_slider += slast.substring(50);

  var el = document.createElement("textarea");
  el.value = img_slider;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
