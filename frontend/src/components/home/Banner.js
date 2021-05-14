import React from 'react'

export default function Banner() {
  // const lstQuangCao = [
  //   { img: "https://drive.google.com/uc?export=download&id=12CtwZFYxTFXV6zArQks4tk7FEUHNibkD", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1CleZQuRTGrFevT8KoUmVyWM0wrVI0Hin", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1EMGMTxDMnBnimOsiT28ef_3O8LFNg5oV", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1HbCJwv27YODvyoHx4YSizjdg3_qmQsJJ", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1QEypLIm3tj9ULgPkA4b9J4bJlcm6keBt", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1QHEtlVdj6ZLi5yCFZ48tAD3PtIQgXRJa", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1S2W_sL85n3EwCf5BxvDMc4OLWGutKMfU", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1i7U8AHP6FoUpEr63L0QOKCfrflC0xj4_", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1jTlcUNj9rt1PqyWHjwMNljmnS45pW4-x", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1k29G-DFuUixMEouFn2l0jf48pQmWvEyn", link: "a.html" },
  //   { img: "https://drive.google.com/uc?export=download&id=1u661khT4xUI5Ed7_51_18m462eRzevcc", link: "a.html" }
  // link banner right
  //   { img: "https://drive.google.com/uc?export=download&id=1oEnxtPFkML2pFL6OElmi48A9ntWxA8Dn", link: "a.html" }
  //   { img: "https://drive.google.com/uc?export=download&id=1pXZOFwfQvl3aeEu_l0H_h-skN09UcRVa", link: "a.html" }
  // ]
  return (
    <div className="banner">
      <div className="banner__left">
        <a href="https://www.thegioididong.com/khuyen-mai-soc/a51-a71">
          <img src="https://drive.google.com/uc?export=download&id=1u661khT4xUI5Ed7_51_18m462eRzevcc" alt="" />
        </a>
      </div>
      <div className="banner__right">
        <a href="https://www.thegioididong.com/dtdd/samsung-galaxy-s10-lite">
          <img src="https://drive.google.com/uc?export=download&id=1oEnxtPFkML2pFL6OElmi48A9ntWxA8Dn" alt="" />
        </a>
        <a href="https://www.thegioididong.com/dtdd/oppo-a31-4gb-128gb">
          <img src="https://drive.google.com/uc?export=download&id=1pXZOFwfQvl3aeEu_l0H_h-skN09UcRVa" alt="" />
        </a>
      </div>
    </div>
  )
}
