const http=require("http");

const server=http.createServer(function(req,res)
{
    if(req.url==="/getSecret")
    {
        res.end("There is no secret here");
    }
    res.end("Hello world");
});

server.listen(7777);