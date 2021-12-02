let express = require('express');
let router = express.Router();

const Trabajador = require('../modelos/Trabajador');

router.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la Empresa</h1>');
});

router.get('/consulta', async (req, res) => {
    try {
        const listado = await Producto.find({});
        res.status(200).send(listado);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.post('/disponible', async (req, res) => {
    try {
        let trabajadorDispo;
        for (let i=0; (i<10 && !trabajadorDispo); i++) {
            let j=10-i;
            const trabajadorA = await Trabajador.find({especializacion: j});
            const de = trabajadorA.length;
            for (let k=0; k<de; k++) {
                const trabajadorB = trabajadorA[k];
                if (trabajadorB.disponible && trabajadorB.cargo == req.body.cargo) {
                    console.log(trabajadorB);
                    trabajadorDispo = trabajadorB;
                }
            }
        }
        if (!trabajadorDispo) {
            console.log("No existe ningun trabajador disponible");
            res.status(401).end();
        }
        await Trabajador.updateOne({nombre: trabajadorDispo.nombre}, {disponible:false})
        res.send(trabajadorDispo);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/t_finalizado', async (req, res) => {
    try {
        let trabajadorDispo = await Trabajador.findOne({nombre: req.body.nombre});
        if (!trabajadorDispo) {
            console.log("No existe ningun trabajador disponible");
            res.status(401).end();
        }
        if (!trabajadorDispo.disponible)
        await Trabajador.updateOne({nombre: trabajadorDispo.nombre}, {disponible:true})
        res.send(trabajadorDispo);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/nuevo', async (req, res) => {
    try {
        const creartrabaa = new Trabajador({nombre, cargo, especializacion});
        await creartrabaa.save();
        res.status(200).send("Se guardo satisfactoriamente");
    } catch (err) {
        res.status(500).send(err);
    }
});

async function creartraba() {
    const creartrabaa = new Trabajador({
        nombre: "a",
        cargo: "a",
        especializacion: 4,
        disponible: true
    });
    const creartrabab = new Trabajador({
        nombre: "b",
        cargo: "a",
        especializacion: 9,
        disponible: false
    });
    const creartrabac = new Trabajador({
        nombre: "c",
        cargo: "a",
        especializacion: 9,
        disponible: true
    });
    const creartrabad = new Trabajador({
        nombre: "d",
        cargo: "a",
        especializacion: 5,
        disponible: true
    });
    const creartrabae = new Trabajador({
        nombre: "e",
        cargo: "b",
        especializacion: 2,
        disponible: true
    });
    try {
        await creartrabaa.save();
        await creartrabab.save();
        await creartrabac.save();
        await creartrabad.save();
        await creartrabae.save();
    }
    catch (err) {
        console.log(err);
    }
};

creartraba();

module.exports = router;
