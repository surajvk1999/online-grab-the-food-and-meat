import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

async function addUserRecord(req, res) {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);

        const db = client.db("reactproject");
        const messageColl = db.collection("user");

        
        let inputDoc = {
            fullname: req.query.fullname,
            username: req.query.username,
            password: req.query.password,
            email: req.query.email,
            number: req.query.number,
            gender: req.query.gender,
        };

        await messageColl.insertOne(inputDoc);

        await client.close();

        res.json({ opr: "success" });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function findAllUser(req, res) {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);

        const db = client.db("reactproject");
        const messageColl = db.collection("user");

        let list = await messageColl.find().toArray();

        await client.close();
        res.json(list);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function deleteUserRecord(req, res) {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);

        const db = client.db("reactproject");
        const messageColl = db.collection("user");

        if (!req.query.email) {
            throw new Error("Required field is missing");
        }

        // this line is for delete
        await messageColl.deleteOne({ email: req.query.email });

        // for delete all
        // await messageColl.deleteMany({});

        await client.close();

        res.json({ opr: true });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function loginByGet(req, res) {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);

        const db = client.db("reactproject");
        const messageColl = db.collection("user");

        let query = { email: req.query.email, password: req.query.password };
        let userRef = await messageColl.findOne(query);

        await client.close();

        // Negative: UserRef CANBE NULL;
        if (!userRef) {
            let errorMessage = `Record Not Found or Authentication Failure: ${req.query.email}`;
            throw new Error(errorMessage);
        }

        // Postive Scenario
        res.json(userRef);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function contactusRecord(req, res) {
    try {
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);

        const db = client.db("reactproject");
        const messageColl = db.collection("contactus");

        let inputDoc = {
            name: req.query.name,
            number: req.query.number,
            email: req.query.email,
            comment: req.query.comment,
        };
        await messageColl.insertOne(inputDoc);

        await client.close();

        res.json({ opr: true });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

app.get("/adduser", addUserRecord);
app.get("/find-all-user", findAllUser);
app.get("/login-by-get", loginByGet);
app.get("/contact-us", contactusRecord);
app.get("/delete-user", deleteUserRecord);


app.listen(4000);

