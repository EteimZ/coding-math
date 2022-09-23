import  express  from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;


// set the view engine to pug
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Home page');
} )

app.get('/:id', (req, res) => {
    let id = req.params.id
    let file = `index${id}.js`
    res.render("index", {num: id , include: [file]} );
} )

app.use((req, res) => {
    res.status(404).send('page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
