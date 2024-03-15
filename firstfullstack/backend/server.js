import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port=process.env.PORT ||3000;

app.get("/api/jokes",(req,res)=>
{
  const jokes=[
    {
      id:1,
      title:'A joke',
      content:'aThis is joke'
    },
    {
      id:2,
      title:'A joke 2',
      content:'This is joke2'
    },
    {
      id:3,
      title:'A joke3',
      content:'This is joke3'
    },
    {
      id:4,
      title:'A joke4',
      content:'This is joke4'
    },
    {
      id:5,
      title:'A joke5',
      content:'This is joke5'
    }

  ]
  res.send(jokes);
})
app.listen(port,()=>
{
  console.log(`serve ar local host ${port}`)
})

 