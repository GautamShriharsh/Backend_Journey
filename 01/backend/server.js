import express from 'express';

const app = express();

app.get('/', ( req, res ) => {
    res.send('server is ready')
})

//get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is the first joke'
            
        },
        {
            id: 2,
            title: 'second joke',
            content: 'This is the 2nd joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'This is the 3rd joke'
        },
        {
            id: 4,
            title: 'fourth joke',
            content: 'This is the 4th joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'This is the fifth joke'
        },
    ]
    res.send(jokes)

})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serving at http://localhost:${port}`);
});


