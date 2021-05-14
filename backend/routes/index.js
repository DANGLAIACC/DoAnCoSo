var express = require("express");
var router = express.Router();
var cors = require("cors");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Thế giới di động" });
});

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "store",
  password: "dqltlcs",
  port: 5432,
});

router.use(cors());

router.get("/getShortItem", function (req, res, next) {
  let lstManu = req.query.lstManu;

  let strQuery = `select mo.id,ma.text||' '||v.text||' '||mo.text phone_name,price,mo.img_small, manu_id,version_id,url, c.total, c.average from modal mo inner join version v on mo.version_id = v.id inner join manu ma on v.manu_id = ma.id inner join (select modal_id, count(usr) total, ROUND(avg(rate_star)) average from evaluate group by modal_id) c on mo.id = c.modal_id`;

  var length = lstManu.length;
  if (length > 2) {
    strQuery += ` where manu_id in (${lstManu.substring(0, length - 1)})`;
  }

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log(
        "----- 41 select mo.id,ma.text||' '||v.text||' '||mo.text phone_name,"
      );
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getPhoneDetail", function (req, res, next) {
  let modalId = req.query.modalId;
  let strQuery = `
    select mo.*,ma.text||' '||v.text||' '||mo.text phoneName, ma.text manu_text, ma.text, img_slider,version_id
    from modal mo inner join version v on mo.version_id = v.id inner join manu ma on v.manu_id = ma.id 
    where mo.id = '${modalId}'`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 60 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getPhoneSameVersion", function (req, res, next) {
  let version_id = req.query.version_id;
  let strQuery = `
    select mo.id,mo.text,price,manu_id, version_id, url
    from modal mo inner join version ve on mo.version_id = ve.id
    where version_id = '${version_id}'`;
  // console.log("------- 73 strQuery", strQuery);
  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 76 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getColorById", function (req, res, next) {
  let modalId = req.query.modalId;
  let strQuery = `select id, text, img_demo, img_slide from color where modal_id = ${modalId}`;
  // console.log("strQuery", strQuery);
  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 89 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getLogin", function (req, res, next) {
  let strQuery = `select usr, fullname, phonenumber, address from users where 
    usr='${req.query.usr}' and 
    pwd='${req.query.pwd}'`;
  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 102 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getEvaluateTop3", function (req, res, next) {
  let strQuery = `select a.usr, to_char(a.time_up, 'DD-MM-YYYY') time_up,
  content,rate_star,to_char(time_resolved, 'DD-MM-YYYY') time_resolved,
  handler,fullname from (
	select max(time_up) time_up,usr
  from evaluate
  where modal_id = ${req.query.modalId}
  group by usr
	order by time_up desc
	limit 3) a inner join evaluate b on a.time_up = b.time_up and a.usr = b.usr
  inner join users c on a.usr = c.usr`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 123 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/getRateStar", function (req, res, next) {
  let strQuery = `select tinh from 
  (select rate_star, count(*) tinh
  from evaluate
  where modal_id = '${req.query.modalId}'
  group by rate_star) a right join 
  (select distinct on (rate_star) rate_star from evaluate order by rate_star desc) b 
  on a.rate_star = b. rate_star`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 141 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.post("/addUser", function (req, res, next) {
  let strQuery = `select adduser('${req.body.usr}',
  '${req.body.pwd}',
  '${req.body.fullname}',
  '${req.body.phoneNumber}',
  '${req.body.address}',
  ${req.body.gender},
  ${req.body.roles})`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 159 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.get("/checkHadEnvoice", function (req, res, next) {
  let strQuery = `select a.invoice_id from invoice a inner join invoice_detail b on a.invoice_id=b.invoice_id 
where usr = '${req.query.usr}' and modal_id = ${req.query.modalId} and status = 2`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("---- 172 strQuery: ", strQuery);
    } else {
      res.send(response);
    }
  });
});

router.post("/addInvoice", function (req, res, next) {
  let strQuery = `select addInvoice( 
    '${req.body.usr}', 2, 0,
    '${req.body.address}',
    '${req.body.fullname}',
    '${req.body.phonenumber}',
    '${req.body.pay}', 
    '${req.body.note}',
    '${req.body.modalId}',
    '${req.body.colorId}',
    '${req.body.quantity}',
    '${req.body.price}',
    0)`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 180 strQuery: ", strQuery);
    } else {
      // console.log("----- 180 strQuery ------: ", strQuery);
      res.send(response.rows);
    }
  });
});

router.post("/addInvoiceMore", function (req, res, next) {
  let strQuery = `insert into invoice_detail values(
    '${req.body.invoiceId}',
    '${req.body.modalId}',
    '${req.body.colorId}',
    '${req.body.quantity}',
    '${req.body.price}',
    0)`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 204 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

router.post("/addEvaluate", function (req, res, next) {
  let strQuery = `insert into evaluate values
  ('${req.body.usr}',
  ${req.body.modalId},
  default,
  '${req.body.content}',
  ${req.body.rateStar},
  default,'')`;

  pool.query(strQuery, (error, response) => {
    if (error) {
      console.log("----- 232 strQuery: ", strQuery);
    } else {
      res.send(response.rows);
    }
  });
});

/// bắt đầu thêm pagination
router.get("/listEvaluate", async function (req, res, next) {
  let _page = req.query._page;
  let _limit = req.query._limit;

  let dataQuery = `select a.usr, to_char(a.time_up, 'DD-MM-YYYY') time_up,
  content,rate_star,to_char(time_resolved, 'DD-MM-YYYY') time_resolved,
  handler,fullname from (
	select max(time_up) time_up,usr
  from evaluate
  where modal_id = ${req.query.modalId}
  group by usr
	order by time_up desc
	) a inner join evaluate b on a.time_up = b.time_up and a.usr = b.usr
  inner join users c on a.usr = c.usr
  limit ${_limit} offset ${(_page - 1) * _limit}`;

  await pool.query(dataQuery, (error, response) => {
    if (error) {
      console.log("----- 296 strQuery: ", dataQuery);
    } else {
      res.send({
        pagination: {
          _page: _page,
          _limit: _limit,
        },
        data: response.rows,
      });
    }
  });
});

module.exports = router;
