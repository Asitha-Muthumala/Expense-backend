const conn = require("../service/db");
const AppError = require("../utils/appError");

exports.getAllAmounts = (req, res, next) => {
    conn.query("SELECT amount, date, description, id FROM amountrecords",[],(err, data, fields) => {

        if(err) {
            res.status("401").json({
                data: err
            })
        }
        else{
            res.status("201").json({
                data: data
            })
        }

    })
}

exports.getBudget = (req, res, next) => {
    // conn.query("SELECT SUM(amount) AS Amount FROM amountrecords WHERE amount>=0;",[],(err, data, fields) => {

    //     if(err) {
    //         res.status("401").json({
    //             data: err
    //         })
    //     }
    //     else{
    //         res.status("201").json({
    //             data: data
    //         })
    //     }

    // })

    conn.query("SELECT SUM(amount) AS Amount FROM amountrecords WHERE amount>=0;",[],(err, data, fields) => {

        if(err) {
            res.status("401").json({
                data: err
            })
        }
        else{

            res.status("201").json({
                data: data
            })
            
        }

    })
}

exports.getSpent = (req, res, next) => {
    conn.query("SELECT SUM(amount) AS Spent FROM amountrecords WHERE amount<0;",[],(err, data, fields) => {

        if(err) {
            res.status("401").json({
                data: err
            })
        }
        else{
            res.status("201").json({
                data: data
            })
        }

    })
}

exports.deleteAmount = (req, res, next) => {
  console.log("this is is "+ req.query.id)
    conn.query(
        "DELETE FROM amountrecords WHERE `amountrecords`.`id` = ?",
        [req.query.id],
        function (err, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "Amount deleted!",
            });
        }
    );
}

exports.addAmount = (req, res, next) => {
    // console.log("hii")
    if (!req.body) return next(new AppError("NO form data found", 404));
    const values = [req.body.date, req.body.description, req.body.amount];
    conn.query(
        "INSERT INTO amountrecords (id, date, description, amount) VALUES (NULL, ?);",
        [values],
        function (err, fields) {
            if (err) return next(new AppError(err, 500));

            res.status(201).json({
                status: "success",
                message: "Amount added!",
            });

        }
    );
}
// exports.getRejisteredStudent = (req, res, next) => {

//     if(!req.body) return next(new AppError("no form data found!", 401));

//     const value = [req.body.name, req.body.age, req.body.rank];

//     conn.query("INSERT INTO students (s_id, name, age, rank) VALUES (NULL, ?);", [value], (err, data, fields) => {
//         if(err) return next(new AppError(err, 500));

//             res.status("201").json({
//                 data: "success",
//                 message: "Student rejistered"
//             })

//     })

// }