import express from 'express'
const app = express()

// app.get('/', (req, res) => {
//     res.send('Suniyaa')
// });

const port = process.env.PORT || 3000

// get a list of five jokes from the API
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "Why don’t skeletons fight?", content: "Because they don’t have the guts!" },
        { id: 2, title: "Parallel lines", content: "Parallel lines have so much in common. It’s a shame they’ll never meet." },
        { id: 3, title: "Why did the scarecrow win an award?", content: "Because he was outstanding in his field!" },
        { id: 4, title: "Math Teacher’s Favorite Place", content: "Times Square." },
        { id: 5, title: "Why don’t eggs tell jokes?", content: "Because they might crack up!" }
      ];
      res.send(jokes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
